"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParaSwapLiquiditySwapAdapterFactory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class ParaSwapLiquiditySwapAdapterFactory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(addressesProvider, augustusRegistry, overrides) {
        return super.deploy(addressesProvider, augustusRegistry, overrides || {});
    }
    getDeployTransaction(addressesProvider, augustusRegistry, overrides) {
        return super.getDeployTransaction(addressesProvider, augustusRegistry, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ParaSwapLiquiditySwapAdapterFactory = ParaSwapLiquiditySwapAdapterFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ILendingPoolAddressesProvider",
                name: "addressesProvider",
                type: "address",
            },
            {
                internalType: "contract IParaSwapAugustusRegistry",
                name: "augustusRegistry",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "fromAsset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "toAsset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "receivedAmount",
                type: "uint256",
            },
        ],
        name: "Swapped",
        type: "event",
    },
    {
        inputs: [],
        name: "ADDRESSES_PROVIDER",
        outputs: [
            {
                internalType: "contract ILendingPoolAddressesProvider",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "AUGUSTUS_REGISTRY",
        outputs: [
            {
                internalType: "contract IParaSwapAugustusRegistry",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "LENDING_POOL",
        outputs: [
            {
                internalType: "contract ILendingPool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MAX_SLIPPAGE_PERCENT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ORACLE",
        outputs: [
            {
                internalType: "contract IPriceOracleGetter",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint8",
                        name: "tranche",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "asset",
                        type: "address",
                    },
                ],
                internalType: "struct DataTypes.TrancheAddress[]",
                name: "assets",
                type: "tuple[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "premiums",
                type: "uint256[]",
            },
            {
                internalType: "address",
                name: "initiator",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "params",
                type: "bytes",
            },
        ],
        name: "executeOperation",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
        ],
        name: "rescueTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint8",
                        name: "tranche",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "asset",
                        type: "address",
                    },
                ],
                internalType: "struct DataTypes.TrancheAddress",
                name: "assetToSwapFrom",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint8",
                        name: "tranche",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "asset",
                        type: "address",
                    },
                ],
                internalType: "struct DataTypes.TrancheAddress",
                name: "assetToSwapTo",
                type: "tuple",
            },
            {
                internalType: "uint256",
                name: "amountToSwap",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minAmountToReceive",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "swapAllBalanceOffset",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "swapCalldata",
                type: "bytes",
            },
            {
                internalType: "contract IParaSwapAugustus",
                name: "augustus",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8",
                    },
                    {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32",
                    },
                ],
                internalType: "struct BaseParaSwapAdapter.PermitSignature",
                name: "permitParams",
                type: "tuple",
            },
        ],
        name: "swapAndDeposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6101006040523480156200001257600080fd5b5060405162002cb838038062002cb88339810160408190526200003591620002af565b81818180806001600160a01b03166080816001600160a01b031660601b81525050806001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200009057600080fd5b505afa158015620000a5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cb919062000267565b60601b6001600160601b03191660a052506000620000e862000263565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350806001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b1580156200016c57600080fd5b505afa15801562000181573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a7919062000267565b60601b6001600160601b03191660c0525060405163fb04e17b60e01b81526001600160a01b0382169063fb04e17b90620001e790600090600401620002ed565b60206040518083038186803b1580156200020057600080fd5b505afa15801562000215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023b91906200028d565b156200024657600080fd5b60601b6001600160601b03191660e052505060018055506200031a565b3390565b60006020828403121562000279578081fd5b8151620002868162000301565b9392505050565b6000602082840312156200029f578081fd5b8151801515811462000286578182fd5b60008060408385031215620002c2578081fd5b8251620002cf8162000301565b6020840151909250620002e28162000301565b809150509250929050565b6001600160a01b0391909116815260200190565b6001600160a01b03811681146200031757600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6128fd620003bb6000396000818161028c015261108a01526000818161026801526118bd01526000818161033e0152818161039501528181610738015281816107cb0152818161087901528181610b2b01528181610bd001528181610c6b01528181610d0f01528181610db501528181610e780152610fbe0152600061023e01526128fd6000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c8063715018a611610071578063715018a6146101055780638da5cb5b1461010d578063b4dcfc7714610115578063c4783a471461011d578063f2fde38b1461013d578063f7a919ce14610150576100a8565b8062ae3bf8146100ad5780630542975c146100c257806332e4b286146100e057806338013f02146100f55780633a829867146100fd575b600080fd5b6100c06100bb366004611c85565b610163565b005b6100ca61023c565b6040516100d79190612163565b60405180910390f35b6100e8610260565b6040516100d79190612688565b6100ca610266565b6100ca61028a565b6100c06102ae565b6100ca61032d565b6100ca61033c565b61013061012b366004611cbd565b610360565b6040516100d79190612280565b6100c061014b366004611c85565b6104ec565b6100c061015e366004612061565b6105a2565b61016b6108f8565b6000546001600160a01b039081169116146101a15760405162461bcd60e51b8152600401610198906124bf565b60405180910390fd5b6102396101ac61032d565b6040516370a0823160e01b81526001600160a01b038416906370a08231906101d8903090600401612163565b60206040518083038186803b1580156101f057600080fd5b505afa158015610204573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102289190612113565b6001600160a01b03841691906108fc565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b610bb881565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6102b66108f8565b6000546001600160a01b039081169116146102e35760405162461bcd60e51b8152600401610198906124bf565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600260015414156103855760405162461bcd60e51b815260040161019890612575565b6002600155336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103d25760405162461bcd60e51b8152600401610198906122c2565b6001891480156103e25750600187145b80156103ee5750600185145b61040a5760405162461bcd60e51b81526004016101989061233f565b6104d961044c84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061095792505050565b8989600081811061046d57634e487b7160e01b600052603260045260246000fd5b905060200201358888600081811061049557634e487b7160e01b600052603260045260246000fd5b90506020020135878e8e60008181106104be57634e487b7160e01b600052603260045260246000fd5b9050604002018036038101906104d49190612046565b6109d2565b5060018080559998505050505050505050565b6104f46108f8565b6000546001600160a01b039081169116146105215760405162461bcd60e51b8152600401610198906124bf565b6001600160a01b0381166105475760405162461bcd60e51b8152600401610198906122f9565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600260015414156105c55760405162461bcd60e51b815260040161019890612575565b6002600155602089015189516000916105dd91610e59565b60e001519050851561068d576040516370a0823160e01b81526000906001600160a01b038316906370a0823190610618903390600401612163565b60206040518083038186803b15801561063057600080fd5b505afa158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190612113565b90508881111561068a5760405162461bcd60e51b8152600401610198906125e3565b97505b60208a01518a516106b0919083338c6106ab36899003890189611ecd565b610f07565b600061070d8787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050868e602001518e602001518e8e611070565b60208b015160405163095ea7b360e01b81529192506001600160a01b03169063095ea7b390610763907f0000000000000000000000000000000000000000000000000000000000000000906000906004016121dc565b602060405180830381600087803b15801561077d57600080fd5b505af1158015610791573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b59190611dbd565b5089602001516001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016108089291906121dc565b602060405180830381600087803b15801561082257600080fd5b505af1158015610836573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085a9190611dbd565b5060208a01518a51604051637b08c23b60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263f6118476926108b592600090879033908390600401612211565b600060405180830381600087803b1580156108cf57600080fd5b505af11580156108e3573d6000803e3d6000fd5b50506001805550505050505050505050505050565b3390565b6109528363a9059cbb60e01b848460405160240161091b9291906121dc565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526116e0565b505050565b61095f61197e565b60008060008060008060008880602001905181019061097e9190611ddd565b6040805160e0810182526001600160a01b03988916815260ff9097166020880152860194909452606085019290925260808401529290921660a082015260c08101919091529750505050505050505b919050565b60006109e682602001518360000151610e59565b60e001516040516370a0823160e01b815290915085906000906001600160a01b038416906370a0823190610a1e908890600401612163565b60206040518083038186803b158015610a3657600080fd5b505afa158015610a4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6e9190612113565b90508760600151600014610ab1576000610a8882886117ca565b905082811115610aaa5760405162461bcd60e51b8152600401610198906125e3565b9150610ada565b610abb82876117d6565b811015610ada5760405162461bcd60e51b81526004016101989061228b565b6000610b0389606001518a608001518b60a0015188602001518d60000151888f60400151611070565b895160405163095ea7b360e01b81529192506001600160a01b03169063095ea7b390610b56907f0000000000000000000000000000000000000000000000000000000000000000906000906004016121dc565b602060405180830381600087803b158015610b7057600080fd5b505af1158015610b84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba89190611dbd565b50885160405163095ea7b360e01b81526001600160a01b039091169063095ea7b390610bfa907f00000000000000000000000000000000000000000000000000000000000000009085906004016121dc565b602060405180830381600087803b158015610c1457600080fd5b505af1158015610c28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4c9190611dbd565b50885160208a0151604051637b08c23b60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263f611847692610ca79260009087908d908390600401612211565b600060405180830381600087803b158015610cc157600080fd5b505af1158015610cd5573d6000803e3d6000fd5b50505060208601518651610cfa92508689610cf0888d6117d6565b8e60c00151610f07565b84602001516001600160a01b031663095ea7b37f000000000000000000000000000000000000000000000000000000000000000060006040518363ffffffff1660e01b8152600401610d4d9291906121dc565b602060405180830381600087803b158015610d6757600080fd5b505af1158015610d7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9f9190611dbd565b5060208501516001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000610dde8b8b6117d6565b6040518363ffffffff1660e01b8152600401610dfb9291906121dc565b602060405180830381600087803b158015610e1557600080fd5b505af1158015610e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4d9190611dbd565b50505050505050505050565b610e616119d5565b604051633629e3cd60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633629e3cd90610eaf90869086906004016121f5565b6101a06040518083038186803b158015610ec857600080fd5b505afa158015610edc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f009190611f44565b9392505050565b602081015115610f9057836001600160a01b031663d505accf8430846000015185602001518660400151876060015188608001516040518863ffffffff1660e01b8152600401610f5d979695949392919061219b565b600060405180830381600087803b158015610f7757600080fd5b505af1158015610f8b573d6000803e3d6000fd5b505050505b610fa56001600160a01b0385168430856117e2565b60405163452572f360e01b815282906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063452572f390610ff9908a908a9086903090600401612252565b602060405180830381600087803b15801561101357600080fd5b505af1158015611027573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104b9190612113565b146110685760405162461bcd60e51b815260040161019890612488565b505050505050565b60405163fb04e17b60e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063fb04e17b906110bf908990600401612163565b60206040518083038186803b1580156110d757600080fd5b505afa1580156110eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110f9190611dbd565b61112b5760405162461bcd60e51b815260040161019890612386565b600061113686611803565b60ff169050600061114686611803565b60ff1690506000611156886118a3565b90506000611163886118a3565b90506000611175610bb8612710612834565b61118085600a612747565b61118a9084612815565b61119586600a612747565b61119f9086612815565b6111a9908b612815565b6111b391906126e1565b6111bd9190612815565b9050868111156111df5760405162461bcd60e51b815260040161019890612451565b50506040516370a0823160e01b8152600093506001600160a01b03891692506370a082319150611213903090600401612163565b60206040518083038186803b15801561122b57600080fd5b505afa15801561123f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112639190612113565b9050838110156112855760405162461bcd60e51b8152600401610198906123e5565b6040516370a0823160e01b81526000906001600160a01b038716906370a08231906112b4903090600401612163565b60206040518083038186803b1580156112cc57600080fd5b505afa1580156112e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113049190612113565b90506000886001600160a01b031663d2c4b5986040518163ffffffff1660e01b815260040160206040518083038186803b15801561134157600080fd5b505afa158015611355573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113799190611ca1565b60405163095ea7b360e01b81529091506001600160a01b0389169063095ea7b3906113ab9084906000906004016121dc565b602060405180830381600087803b1580156113c557600080fd5b505af11580156113d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113fd9190611dbd565b5060405163095ea7b360e01b81526001600160a01b0389169063095ea7b39061142c9084908a906004016121dc565b602060405180830381600087803b15801561144657600080fd5b505af115801561145a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147e9190611dbd565b508a156114c85760048b101580156114a3575060208a5161149f9190612834565b8b11155b6114bf5760405162461bcd60e51b81526004016101989061261a565b8560208c018b01525b6000896001600160a01b03168b6040516114e29190612147565b6000604051808303816000865af19150503d806000811461151f576040519150601f19603f3d011682016040523d82523d6000602084013e611524565b606091505b5050905080611537573d6000803e3d6000fd5b6115418785612834565b6040516370a0823160e01b81526001600160a01b038b16906370a082319061156d903090600401612163565b60206040518083038186803b15801561158557600080fd5b505afa158015611599573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115bd9190612113565b146115da5760405162461bcd60e51b8152600401610198906124f4565b6040516370a0823160e01b815283906001600160a01b038a16906370a0823190611608903090600401612163565b60206040518083038186803b15801561162057600080fd5b505afa158015611634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116589190612113565b6116629190612834565b9450858510156116845760405162461bcd60e51b81526004016101989061241a565b876001600160a01b0316896001600160a01b03167fa078c4190abe07940190effc1846be0ccf03ad6007bc9e93f9697d0b460befbb89886040516116c9929190612691565b60405180910390a350505050979650505050505050565b6116f2826001600160a01b0316611942565b61170e5760405162461bcd60e51b8152600401610198906125ac565b600080836001600160a01b0316836040516117299190612147565b6000604051808303816000865af19150503d8060008114611766576040519150601f19603f3d011682016040523d82523d6000602084013e61176b565b606091505b50915091508161178d5760405162461bcd60e51b8152600401610198906123b0565b8051156117c457808060200190518101906117a89190611dbd565b6117c45760405162461bcd60e51b81526004016101989061252b565b50505050565b6000610f008284612834565b6000610f0082846126c9565b6117c4846323b872dd60e01b85858560405160240161091b93929190612177565b600080826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561183f57600080fd5b505afa158015611853573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611877919061212b565b9050604d8160ff16111561189d5760405162461bcd60e51b815260040161019890612651565b92915050565b60405163b3596f0760e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b3596f07906118f2908590600401612163565b60206040518083038186803b15801561190a57600080fd5b505afa15801561191e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189d9190612113565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061197657508115155b949350505050565b6040518060e0016040528060006001600160a01b03168152602001600060ff16815260200160008152602001600081526020016060815260200160006001600160a01b031681526020016119d0611a48565b905290565b604051806101a001604052806119e9611a76565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201819052610140820181905261016082018190526101809091015290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518060200160405280600081525090565b80356109cd816128a3565b80516109cd816128a3565b60008083601f840112611ab0578182fd5b50813567ffffffffffffffff811115611ac7578182fd5b6020830191508360208083028501011115611ae157600080fd5b9250929050565b60008083601f840112611af9578182fd5b50813567ffffffffffffffff811115611b10578182fd5b602083019150836020828501011115611ae157600080fd5b600060a08284031215611b39578081fd5b60405160a0810181811067ffffffffffffffff82111715611b5c57611b5c61288d565b806040525080915082518152602083015160208201526040830151611b80816128b8565b8060408301525060608301516060820152608083015160808201525092915050565b600060208284031215611bb3578081fd5b6040516020810181811067ffffffffffffffff82111715611bd657611bd661288d565b6040529151825250919050565b600060408284031215611bf4578081fd5b6040516040810181811067ffffffffffffffff82111715611c1757611c1761288d565b6040529050808235611c28816128b8565b81526020830135611c38816128a3565b6020919091015292915050565b80516fffffffffffffffffffffffffffffffff811681146109cd57600080fd5b805164ffffffffff811681146109cd57600080fd5b80516109cd816128b8565b600060208284031215611c96578081fd5b8135610f00816128a3565b600060208284031215611cb2578081fd5b8151610f00816128a3565b600080600080600080600080600060a08a8c031215611cda578485fd5b893567ffffffffffffffff80821115611cf1578687fd5b818c0191508c601f830112611d04578687fd5b813581811115611d12578788fd5b8d6020604083028501011115611d26578788fd5b60209283019b509950908b01359080821115611d40578687fd5b611d4c8d838e01611a9f565b909950975060408c0135915080821115611d64578687fd5b611d708d838e01611a9f565b9097509550859150611d8460608d01611a89565b945060808c0135915080821115611d99578384fd5b50611da68c828d01611ae8565b915080935050809150509295985092959850929598565b600060208284031215611dce578081fd5b81518015158114610f00578182fd5b6000806000806000806000610160888a031215611df8578081fd5b8751611e03816128a3565b6020890151909750611e14816128b8565b809650506040880151945060608801519350608088015167ffffffffffffffff80821115611e40578283fd5b818a0191508a601f830112611e53578283fd5b815181811115611e6557611e6561288d565b611e78601f8201601f191660200161269f565b91508082528b6020828501011115611e8e578384fd5b611e9f81602084016020860161284b565b509350611eb0905060a08901611a94565b9150611ebf8960c08a01611b28565b905092959891949750929550565b600060a08284031215611ede578081fd5b60405160a0810181811067ffffffffffffffff82111715611f0157611f0161288d565b806040525082358152602083013560208201526040830135611f22816128b8565b6040820152606083810135908201526080928301359281019290925250919050565b60006101a0808385031215611f57578182fd5b611f608161269f565b9050611f6c8484611ba2565b8152611f7a60208401611c45565b6020820152611f8b60408401611c45565b6040820152611f9c60608401611c45565b6060820152611fad60808401611c45565b6080820152611fbe60a08401611c45565b60a0820152611fcf60c08401611c65565b60c0820152611fe060e08401611a94565b60e0820152610100611ff3818501611a94565b90820152610120612005848201611a94565b90820152610140612017848201611a94565b90820152610160612029848201611c7a565b9082015261018061203b848201611c7a565b908201529392505050565b600060408284031215612057578081fd5b610f008383611be3565b6000806000806000806000806000898b036101c0811215612080578384fd5b61208a8c8c611be3565b99506120998c60408d01611be3565b985060808b0135975060a08b0135965060c08b0135955060e08b013567ffffffffffffffff8111156120c9578485fd5b6120d58d828e01611ae8565b9096509450506101008b01356120ea816128a3565b925060a061011f19820112156120fe578182fd5b506101208a0190509295985092959850929598565b600060208284031215612124578081fd5b5051919050565b60006020828403121561213c578081fd5b8151610f00816128b8565b6000825161215981846020870161284b565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0392909216825260ff16602082015260400190565b6001600160a01b03968716815260ff95909516602086015292151560408501526060840191909152909216608082015261ffff90911660a082015260c00190565b6001600160a01b03948516815260ff9390931660208401526040830191909152909116606082015260800190565b901515815260200190565b6020808252601b908201527f494e53554646494349454e545f41544f4b454e5f42414c414e43450000000000604082015260600190565b6020808252601b908201527f43414c4c45525f4d5553545f42455f4c454e44494e475f504f4f4c0000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526027908201527f464c4153484c4f414e5f4d554c5449504c455f4153534554535f4e4f545f5355604082015266141413d495115160ca1b606082015260800190565b60208082526010908201526f494e56414c49445f415547555354555360801b604082015260600190565b6020808252818101527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604082015260600190565b6020808252818101527f494e53554646494349454e545f42414c414e43455f4245464f52455f53574150604082015260600190565b6020808252601c908201527f494e53554646494349454e545f414d4f554e545f524543454956454400000000604082015260600190565b6020808252601f908201527f4d494e5f414d4f554e545f455843454544535f4d41585f534c49505041474500604082015260600190565b6020808252601b908201527f554e45585045435445445f414d4f554e545f57495448445241574e0000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f57524f4e475f42414c414e43455f41465445525f535741500000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6020808252601f908201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604082015260600190565b6020808252601b908201527f494e53554646494349454e545f414d4f554e545f544f5f535741500000000000604082015260600190565b6020808252601f908201527f46524f4d5f414d4f554e545f4f46465345545f4f55545f4f465f52414e474500604082015260600190565b6020808252601a908201527f544f4f5f4d414e595f444543494d414c535f4f4e5f544f4b454e000000000000604082015260600190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff811182821017156126c1576126c161288d565b604052919050565b600082198211156126dc576126dc612877565b500190565b6000826126fc57634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611612713575061273e565b81870482111561272557612725612877565b8086161561273257918102915b9490941c938002612704565b94509492505050565b6000610f00600019848460008261276057506001610f00565b8161276d57506000610f00565b8160018114612783576002811461278d576127ba565b6001915050610f00565b60ff84111561279e5761279e612877565b6001841b9150848211156127b4576127b4612877565b50610f00565b5060208310610133831016604e8410600b84101617156127ed575081810a838111156127e8576127e8612877565b610f00565b6127fa8484846001612701565b80860482111561280c5761280c612877565b02949350505050565b600081600019048311821515161561282f5761282f612877565b500290565b60008282101561284657612846612877565b500390565b60005b8381101561286657818101518382015260200161284e565b838111156117c45750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461023957600080fd5b60ff8116811461023957600080fdfea26469706673582212207b260337c20d1558897e3e1f23b11647680b5283c76a6d278a35393489ea227e64736f6c63430008000033";
