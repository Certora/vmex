// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.19;

import {DistributionTypes} from '../protocol/libraries/types/DistributionTypes.sol';

interface IIncentivesController {
  event RewardsAccrued(address indexed user, uint256 amount);

  /**
   * @dev Emitted when rewards are claimed
   * @param user The address of the user rewards has been claimed on behalf of
   * @param reward The address of the token reward is claimed
   * @param to The address of the receiver of the rewards
   * @param amount The amount of rewards claimed
   */
  event RewardClaimed(
    address indexed user,
    address indexed reward,
    address indexed to,
    uint256 amount
  );

  function handleAction(address user, uint256 totalSupply, uint256 oldBalance, uint256 newBalance, DistributionTypes.Action action) external;

  function getPendingRewards(
    address[] calldata assets,
    address user
  ) external view returns (address[] memory, uint256[] memory);

  function claimReward(
    address[] calldata assets,
    address reward,
    uint256 amountToClaim,
    address to
  ) external returns (uint256);

  function claimAllRewards(
    address[] calldata assets,
    address to
  ) external returns (address[] memory, uint256[] memory);

  function totalStaked() external view returns (uint256);
}
