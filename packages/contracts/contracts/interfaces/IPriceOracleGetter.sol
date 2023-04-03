// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.17;

/**
 * @title IPriceOracleGetter interface
 * @notice Interface for the Aave price oracle.
 **/
interface IPriceOracleGetter {
    event BaseCurrencySet(
        address indexed baseCurrency,
        uint256 baseCurrencyUnit
    );
    event AssetSourceUpdated(address indexed asset, address indexed source);
    event FallbackOracleUpdated(address indexed fallbackOracle);
    event SequencerUptimeFeedUpdated(uint256 indexed chainId, address indexed sequencerUptimeFeed);


    /**
     * @dev returns the asset price in ETH
     * @param asset the address of the asset
     * @return the ETH price of the asset
     **/
    function getAssetPrice(address asset) external returns (uint256);
}
