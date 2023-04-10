// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.17;

import {SafeERC20} from "../../dependencies/openzeppelin/contracts/SafeERC20.sol";
import {IStakingRewards} from '../../interfaces/IStakingRewards.sol';
import {IAToken} from '../../interfaces/IAToken.sol';
import {IERC20} from '../../dependencies/openzeppelin/contracts/IERC20.sol';

contract ExternalRewardDistributor {
  using SafeERC20 for IERC20;

  struct UserState {
    uint256 assetBalance;
    uint256 rewardBalance;
    uint256 lastUpdateRewardPerToken;
  }

  struct StakingReward {
    IStakingRewards staking;
    IERC20 reward;
    uint256 cumulativeRewardPerToken;
    uint256 lastUpdateTimestamp;
    mapping(address => UserState) users;
  }

  mapping(address => StakingReward) internal stakingData; // incentivized underlying asset => reward info
  mapping(address => address) internal aTokenMap; //  aToken => underlying, authorized callers

  address public immutable manager;

  event RewardConfigured(address indexed aToken, address indexed underlying, address indexed reward, address staking);
  event Harvested(address indexed underlying, uint256 rewardPerToken);
  event UserUpdated(address indexed user, address indexed aToken, address indexed underlying, uint256 rewardBalance);

  constructor(address _manager) {
    manager = _manager;
  }

  function harvestAndUpdate(
    address user,
    address underlying
  ) internal {
    StakingReward storage rewardData = stakingData[underlying];

    if (rewardData.lastUpdateTimestamp < block.timestamp) {
      uint256 rewardBalance = rewardData.reward.balanceOf(address(this));
      rewardData.staking.getReward();
      uint256 received = rewardData.reward.balanceOf(address(this)) - rewardBalance;

      uint256 totalSupply = rewardData.staking.balanceOf(address(this));
      uint256 accruedPerToken = received / totalSupply;

      rewardData.cumulativeRewardPerToken += accruedPerToken;
      rewardData.lastUpdateTimestamp = block.timestamp;

      emit Harvested(underlying, accruedPerToken);
    }

    if (rewardData.users[user].lastUpdateRewardPerToken < rewardData.cumulativeRewardPerToken) {
      uint256 diff =
        rewardData.cumulativeRewardPerToken - rewardData.users[user].lastUpdateRewardPerToken;
      rewardData.users[user].rewardBalance += diff * rewardData.users[user].assetBalance;
      rewardData.users[user].lastUpdateRewardPerToken = rewardData.cumulativeRewardPerToken;

      emit UserUpdated(user, msg.sender, underlying, rewardData.users[user].rewardBalance);
    }
  }

  function addStakingReward(
    address aToken,
    address staking,
    address reward
  ) public {
    require(msg.sender == manager, 'Only manager');
    require(aTokenMap[aToken] == address(0), 'Already registered');

    address underlying = IAToken(aToken).UNDERLYING_ASSET_ADDRESS();
    if (address(stakingData[underlying].reward) == address(0)) {
        require(staking != address(0) && reward != address(0), 'No zero address');
        stakingData[aToken].staking = IStakingRewards(staking);
        stakingData[aToken].reward = IERC20(reward);
    }
    aTokenMap[aToken] = underlying;

    emit RewardConfigured(aToken, underlying, reward, staking);
  }

  function batchAddStakingRewards(
      address[] calldata aTokens,
      address[] calldata stakingContracts,
      address[] calldata rewards
  ) external {
    require(aTokens.length == stakingContracts.length 
        && stakingContracts.length == rewards.length, "Malformed input");

    for(uint i = 0; i < aTokens.length; i++) {
        addStakingReward(aTokens[i], stakingContracts[i], rewards[i]);
    }
  }

  function onDeposit(
    address user,
    uint256 amount
  ) internal {
    address underlying = aTokenMap[msg.sender];
    harvestAndUpdate(user, underlying);
    StakingReward storage rewardData = stakingData[underlying];
        
    IERC20(underlying).safeTransferFrom(msg.sender, address(this), amount);
    rewardData.staking.stake(amount);
    rewardData.users[user].assetBalance += amount;
  }

  function onWithdraw(
    address user,
    uint256 amount
  ) internal {
    address underlying = aTokenMap[msg.sender];
    harvestAndUpdate(user, underlying);
    StakingReward storage rewardData = stakingData[underlying];

    rewardData.staking.withdraw(amount);
    IERC20(underlying).safeTransfer(msg.sender, amount);
    rewardData.users[user].assetBalance -= amount;
  }

  function onTransfer(
      address user,
      uint256 amount,
      bool sender
  ) internal {
    address underlying = aTokenMap[msg.sender];
    harvestAndUpdate(user, underlying);

    if (sender) {
        stakingData[underlying].users[user].assetBalance -= amount;
    } else {
        stakingData[underlying].users[user].assetBalance += amount;
    }
  }

  function claimStakingReward(
    address underlying,
    uint256 amount
  ) public {
    harvestAndUpdate(msg.sender, underlying);

    StakingReward storage rewardData = stakingData[underlying];
    require(rewardData.users[msg.sender].rewardBalance >= amount, 'Insufficient balance');
    rewardData.reward.safeTransfer(msg.sender, amount);
    rewardData.users[msg.sender].rewardBalance -= amount;
  }

  function batchClaimStakingRewards(
    address[] calldata assets,
    uint256[] calldata amounts
  ) external {
    require(assets.length == amounts.length, 'Malformed input');
    for (uint256 i = 0; i < assets.length; i++) {
      claimStakingReward(assets[i], amounts[i]);
    }
  }

  function getDataByAToken(address aToken) external view
  returns (address, address, address, uint256, uint256) {
      return (
          aTokenMap[aToken],
          address(stakingData[aTokenMap[aToken]].staking),
          address(stakingData[aTokenMap[aToken]].reward),
          stakingData[aTokenMap[aToken]].cumulativeRewardPerToken,
          stakingData[aTokenMap[aToken]].lastUpdateTimestamp
      );
  }
}