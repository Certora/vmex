// SPDX-License-Identifier: agpl-3.0
pragma solidity >=0.8.0;

import {Ownable} from "../../dependencies/openzeppelin/contracts/Ownable.sol";

// Prettier ignore to prevent buidler flatter bug
// prettier-ignore
import {InitializableImmutableAdminUpgradeabilityProxy} from '../libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol';

import {ILendingPoolAddressesProvider} from "../../interfaces/ILendingPoolAddressesProvider.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";

/**
 * @title LendingPoolAddressesProvider contract
 * @dev Main registry of addresses part of or connected to the protocol, including permissioned roles
 * - Acting also as factory of proxies and admin of those, so with right to change its implementations
 * - Owned by the Aave Governance
 * @author Aave
 **/
contract LendingPoolAddressesProvider is
    Ownable,
    ILendingPoolAddressesProvider
{
    string private _marketId;
    mapping(bytes32 => address) private _addresses; //addresses that are not specific to a configurator
    mapping(bytes32 => mapping(uint64 => address)) private _addressesTranche; //addresses that are specific to a tranche: _addressesTranche[POOL_ADMIN][0] is the admin address for tranche 0
    mapping(address => bool) whitelistedAddresses;
    bool permissionlessTranches;

    bytes32 private constant GLOBAL_ADMIN = "GLOBAL_ADMIN";
    bytes32 private constant LENDING_POOL = "LENDING_POOL";
    bytes32 private constant ATOKEN = "ATOKEN";
    bytes32 private constant YEARN_VTOKEN = "YEARN_VTOKEN";
    bytes32 private constant STABLE_DEBT = "STABLE_DEBT";
    bytes32 private constant VARIABLE_DEBT = "VARIABLE_DEBT";
    bytes32 private constant LENDING_POOL_CONFIGURATOR =
        "LENDING_POOL_CONFIGURATOR";
    bytes32 private constant POOL_ADMIN = "POOL_ADMIN";
    bytes32 private constant EMERGENCY_ADMIN = "EMERGENCY_ADMIN";
    bytes32 private constant LENDING_POOL_COLLATERAL_MANAGER =
        "COLLATERAL_MANAGER";
    bytes32 private constant VMEX_PRICE_ORACLE = "VMEX_PRICE_ORACLE";
    bytes32 private constant LENDING_RATE_ORACLE = "LENDING_RATE_ORACLE";

    bytes32 private constant CURVE_ADDRESS_PROVIDER = "CURVE_ADDRESS_PROVIDER";
    bytes32 private constant ASSET_MAPPINGS = "ASSET_MAPPINGS";
    bytes32 private constant VMEX_TREASURY_ADDRESS = "VMEX_TREASURY_ADDRESS";

    constructor(string memory marketId) {
        _setMarketId(marketId);
        permissionlessTranches = false;
        _setVMEXTreasury(0xF2539a767D6a618A86E0E45D6d7DB3dE6282dE49);
    }

    function getVMEXTreasury() external view override returns(address){
        return getAddress(VMEX_TREASURY_ADDRESS);
    }

    function setVMEXTreasury(address add) external override onlyOwner {
        _setVMEXTreasury(add);
    }

    function _setVMEXTreasury(address add) internal {
        _addresses[VMEX_TREASURY_ADDRESS] = add;
        emit VMEXTreasuryUpdated(add);
    }

    function setPermissionlessTranches(bool _val) external onlyOwner {
        permissionlessTranches = _val;
    }

    function addWhitelistedAddress(address ad, bool _val) external onlyOwner {
        whitelistedAddresses[ad] = _val;
    }

    function isWhitelistedAddress(address ad)
        external
        view
        override
        returns (bool)
    {
        return permissionlessTranches || whitelistedAddresses[ad];
    }

    /**
     * @dev Returns the id of the Aave market to which this contracts points to
     * @return The market id
     **/
    function getMarketId() external view override returns (string memory) {
        return _marketId;
    }

    /**
     * @dev Allows to set the market which this LendingPoolAddressesProvider represents
     * @param marketId The market id
     */
    function setMarketId(string memory marketId) external override onlyOwner {
        _setMarketId(marketId);
    }

    /**
     * @dev General function to update the implementation of a proxy registered with
     * certain `id`. If there is no proxy registered, it will instantiate one and
     * set as implementation the `implementationAddress`
     * IMPORTANT Use this function carefully, only for ids that don't have an explicit
     * setter function, in order to avoid unexpected consequences
     * @param id The id
     * @param implementationAddress The address of the new implementation
     */
    function setAddressAsProxy(bytes32 id, address implementationAddress)
        external
        override
        onlyOwner
    {
        _updateImpl(id, implementationAddress);
        emit AddressSet(id, implementationAddress, true);
    }

    /**
     * @dev Sets an address for an id replacing the address saved in the addresses map
     * IMPORTANT Use this function carefully, as it will do a hard replacement
     * @param id The id
     * @param newAddress The address to set
     */
    function setAddress(bytes32 id, address newAddress)
        external
        override
        onlyOwner
    {
        _addresses[id] = newAddress;
        emit AddressSet(id, newAddress, false);
    }

    /**
     * @dev Returns an address by id
     * @return The address
     */
    function getAddress(bytes32 id) public view override returns (address) {
        return _addresses[id];
    }

    function getAddressTranche(bytes32 id, uint64 trancheId)
        public
        view
        override
        returns (address)
    {
        return _addressesTranche[id][trancheId];
    }

    /**
     * @dev Returns the address of the LendingPool proxy
     * @return The LendingPool proxy address
     **/
    function getLendingPool() external view override returns (address) {
        return getAddress(LENDING_POOL);
    }

    /**
     * @dev Updates the implementation of the LendingPool, or creates the proxy
     * setting the new `pool` implementation on the first time calling it
     * @param pool The new LendingPool implementation
     **/
    function setLendingPoolImpl(address pool) external override onlyOwner {
        _updateImpl(LENDING_POOL, pool);
        emit LendingPoolUpdated(pool);
    }

    /**
     * @dev Returns the address of the LendingPool proxy
     * @return The aToken proxy address
     **/
    function getAToken() external view override returns (address) {
        return getAddress(ATOKEN);
    }

    /**
     * @dev Updates the implementation of the LendingPool, or creates the proxy
     * setting the new `pool` implementation on the first time calling it
     * @param aToken The new aToken implementation
     **/
    function setATokenImpl(address aToken) external override onlyOwner {
        _addresses[ATOKEN] = aToken; 
        emit ATokenUpdated(aToken);
    }


    /**
     * @dev Returns the address of the LendingPool proxy
     * @return The aToken proxy address
     **/
    function getStableDebtToken() external view override returns (address) {
        return getAddress(STABLE_DEBT);
    }

    /**
     * @dev Updates the implementation of the LendingPool, or creates the proxy
     * setting the new `pool` implementation on the first time calling it
     * @param aToken The new aToken implementation
     **/
    function setStableDebtToken(address aToken) external override onlyOwner {
        _addresses[STABLE_DEBT] = aToken; //don't use _updateImpl since this just stores the address, the upgrade is done in LendingPoolConfigurator
        emit StableDebtUpdated(aToken);
    }


    /**
     * @dev Returns the address of the LendingPool proxy
     * @return The aToken proxy address
     **/
    function getVariableDebtToken() external view override returns (address) {
        return getAddress(VARIABLE_DEBT);
    }

    /**
     * @dev Updates the implementation of the LendingPool, or creates the proxy
     * setting the new `pool` implementation on the first time calling it
     * @param aToken The new aToken implementation
     **/
    function setVariableDebtToken(address aToken) external override onlyOwner {
        _addresses[VARIABLE_DEBT] = aToken; //don't use _updateImpl since this just stores the address, the upgrade is done in LendingPoolConfigurator
        emit VariableDebtUpdated(aToken);
    }

    /**
     * @dev Returns the address of the LendingPoolConfigurator proxy
     * @return The LendingPoolConfigurator proxy address
     **/
    function getLendingPoolConfigurator()
        external
        view
        override
        returns (address)
    {
        return getAddress(LENDING_POOL_CONFIGURATOR);
    }

    /**
     * @dev Updates the implementation of the LendingPoolConfigurator, or creates the proxy
     * setting the new `configurator` implementation on the first time calling it
     * @param newAddress The new LendingPoolConfigurator implementation
     **/
    function setLendingPoolConfiguratorImpl(address newAddress)
        external
        override
        onlyOwner
    {
        _updateImpl(LENDING_POOL_CONFIGURATOR, newAddress);
        emit LendingPoolConfiguratorUpdated(newAddress);
    }

    /**
     * @dev Returns the address of the LendingPoolCollateralManager. Since the manager is used
     * through delegateCall within the LendingPool contract, the proxy contract pattern does not work properly hence
     * the addresses are changed directly
     * @return The address of the LendingPoolCollateralManager
     **/

    function getLendingPoolCollateralManager()
        external
        view
        override
        returns (address)
    {
        return getAddress(LENDING_POOL_COLLATERAL_MANAGER);
    }

    /**
     * @dev Updates the address of the LendingPoolCollateralManager
     * @param manager The new LendingPoolCollateralManager address
     **/
    function setLendingPoolCollateralManager(address manager)
        external
        override
        onlyOwner
    {
        _addresses[LENDING_POOL_COLLATERAL_MANAGER] = manager;
        emit LendingPoolCollateralManagerUpdated(manager);
    }

    /**
     * @dev The functions below are getters/setters of addresses that are outside the context
     * of the protocol hence the upgradable proxy pattern is not used
     **/

    function getGlobalAdmin() external view override returns (address) {
        return getAddress(GLOBAL_ADMIN);
    }

    function setGlobalAdmin(address admin) external override onlyOwner {
        _addresses[GLOBAL_ADMIN] = admin;
    }

    function getPoolAdmin(uint64 trancheId)
        external
        view
        override
        returns (address)
    {
        return getAddressTranche(POOL_ADMIN, trancheId);
    }

    function setPoolAdmin(address admin, uint64 trancheId) external override {
        //eventually we want this to be permissionless, but for now we will manually set the pool admin for every tranche
        //TODO: check if I should use _msgSender or msg.sender
        require(
            _msgSender() == owner() ||
                _msgSender() == getAddressTranche(POOL_ADMIN, trancheId),
            "Sender is not VMEX admin or the original admin of the tranche"
        );
        _addressesTranche[POOL_ADMIN][trancheId] = admin;
        emit ConfigurationAdminUpdated(admin, trancheId);
    }

    function addPoolAdmin(address admin, uint64 trancheId) external override {
        //if you want to add your own tranche, anyone can do it, but you just have to choose a trancheId that hasn't been used yet
        require(
            _msgSender() == getAddress(LENDING_POOL_CONFIGURATOR) ||
                _msgSender() == owner(),
            "Caller must be lending pool configurator that is creating a new tranche"
        );
        require(
            _addressesTranche[POOL_ADMIN][trancheId] == address(0),
            "Pool admin trancheId input is already in use"
        );
        _addressesTranche[POOL_ADMIN][trancheId] = admin;
        emit ConfigurationAdminUpdated(admin, trancheId);
    }

    function getPriceOracle()
        external
        view
        override
        returns (address)
    {
        return getAddress(VMEX_PRICE_ORACLE);
    }

    //custom address provider for Curve tokens
    // function getCurveAddressProvider()
    //     external
    //     view
    //     override
    //     returns (address)
    // {
    //     return getAddress(CURVE_ADDRESS_PROVIDER);
    // }

    function setPriceOracle(address priceOracle)
        external
        override
        onlyOwner
    {
        // _addresses[VMEX_PRICE_ORACLE] = priceOracle;
        _updateImpl(VMEX_PRICE_ORACLE, priceOracle);
        emit PriceOracleUpdated(priceOracle);
    }

    function getLendingRateOracle() external view override returns (address) {
        return getAddress(LENDING_RATE_ORACLE);
    }

    function setLendingRateOracle(address lendingRateOracle)
        external
        override
        onlyOwner
    {
        _addresses[LENDING_RATE_ORACLE] = lendingRateOracle;
        emit LendingRateOracleUpdated(lendingRateOracle);
    }

    /**
     * @dev Internal function to update the implementation of a specific proxied component of the protocol
     * - If there is no proxy registered in the given `id`, it creates the proxy setting `newAdress`
     *   as implementation and calls the initialize() function on the proxy
     * - If there is already a proxy registered, it just updates the implementation to `newAddress` and
     *   calls the initialize() function via upgradeToAndCall() in the proxy
     * @param id The id of the proxy to be updated
     * @param newAddress The address of the new implementation
     **/
    function _updateImpl(bytes32 id, address newAddress) internal {
        address payable proxyAddress = payable(_addresses[id]);

        InitializableImmutableAdminUpgradeabilityProxy proxy = InitializableImmutableAdminUpgradeabilityProxy(
                proxyAddress
            );

        bytes memory params = abi.encodeWithSignature(
            "initialize(address)",
            address(this)
        );

        if (proxyAddress == address(0)) {
            proxy = new InitializableImmutableAdminUpgradeabilityProxy(
                address(this)
            );
            proxy.initialize(newAddress, params);
            _addresses[id] = address(proxy);
            emit ProxyCreated(id, address(proxy));
        } else {
            proxy.upgradeToAndCall(newAddress, params);
        }
    }

    function _setMarketId(string memory marketId) internal {
        _marketId = marketId;
        emit MarketIdSet(marketId);
    }

    function getAssetMappings() external view override returns (address){
        return getAddress(ASSET_MAPPINGS);
    }
    function setAssetMappingsImpl(address assetMappings) external override onlyOwner{
        _updateImpl(ASSET_MAPPINGS, assetMappings);
        emit AssetMappingsUpdated(assetMappings);
    }

    function getEmergencyAdmin() external view override returns (address) {
        return getAddress(EMERGENCY_ADMIN);
    }

    function setEmergencyAdmin(address emergencyAdmin) external override onlyOwner {
        _addresses[EMERGENCY_ADMIN] = emergencyAdmin;
        emit EmergencyAdminUpdated(emergencyAdmin);
    }
}
