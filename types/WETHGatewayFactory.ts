/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WETHGateway } from "./WETHGateway";

export class WETHGatewayFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(weth: string, overrides?: Overrides): Promise<WETHGateway> {
    return super.deploy(weth, overrides || {}) as Promise<WETHGateway>;
  }
  getDeployTransaction(
    weth: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(weth, overrides || {});
  }
  attach(address: string): WETHGateway {
    return super.attach(address) as WETHGateway;
  }
  connect(signer: Signer): WETHGatewayFactory {
    return super.connect(signer) as WETHGatewayFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETHGateway {
    return new Contract(address, _abi, signerOrProvider) as WETHGateway;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "weth",
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendingPool",
        type: "address",
      },
    ],
    name: "authorizeLendingPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendingPool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interesRateMode",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "borrowETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendingPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "emergencyEtherTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "emergencyTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWETHAddress",
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
        internalType: "address",
        name: "lendingPool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rateMode",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
    ],
    name: "repayETH",
    outputs: [],
    stateMutability: "payable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "lendingPool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161164c38038061164c83398101604081905261002f9161009c565b6000610039610098565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060601b6001600160601b0319166080526100ca565b3390565b6000602082840312156100ad578081fd5b81516001600160a01b03811681146100c3578182fd5b9392505050565b60805160601c61151161013b6000396000818160b001528181610263015281816103780152818161040e015281816104b50152818161054b015281816105cb015281816106420152818161076101528181610915015281816109ab01528181610aea0152610c5101526115116000f3fe6080604052600436106100a05760003560e01c80638da5cb5b116100645780638da5cb5b1461018b578063a3d5b255146101b6578063affa8817146101d6578063eed88b8d146101eb578063f2fde38b1461020b578063fd1495291461022b576100f8565b806302c5fcf814610110578063474cf53d1461012357806366514c9714610136578063715018a61461015657806380500d201461016b576100f8565b366100f857336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100f65760405162461bcd60e51b81526004016100ed90611389565b60405180910390fd5b005b60405162461bcd60e51b81526004016100ed90611315565b6100f661011e366004611024565b61024b565b6100f6610131366004610f32565b6104b3565b34801561014257600080fd5b506100f661015136600461106d565b6105a7565b34801561016257600080fd5b506100f66106bb565b34801561017757600080fd5b506100f6610186366004610fe3565b61073a565b34801561019757600080fd5b506101a0610a24565b6040516101ad9190611215565b60405180910390f35b3480156101c257600080fd5b506100f66101d1366004610f78565b610a33565b3480156101e257600080fd5b506101a0610ae8565b3480156101f757600080fd5b506100f6610206366004610fb8565b610b0c565b34801561021757600080fd5b506100f6610226366004610f0f565b610b4f565b34801561023757600080fd5b506100f6610246366004610f0f565b610c05565b6000806102f483876001600160a01b03166335ea6a757f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040161029e9190611215565b6101806040518083038186803b1580156102b757600080fd5b505afa1580156102cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ef91906110d4565b610cdc565b90925090506000600185600281111561031d57634e487b7160e01b600052602160045260246000fd5b600281111561033c57634e487b7160e01b600052602160045260246000fd5b146103475781610349565b825b9050808610156103565750845b803410156103765760405162461bcd60e51b81526004016100ed90611418565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156103d157600080fd5b505af11580156103e5573d6000803e3d6000fd5b505060405163573ade8160e01b81526001600160a01b038b16935063573ade81925061043c91507f00000000000000000000000000000000000000000000000000000000000000009034908a908a906004016112b6565b602060405180830381600087803b15801561045657600080fd5b505af115801561046a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048e91906111c4565b50803411156104aa576104aa336104a583346114a0565b610dec565b50505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561050e57600080fd5b505af1158015610522573d6000803e3d6000fd5b505060405163e8eda9df60e01b81526001600160a01b038716935063e8eda9df925061057991507f000000000000000000000000000000000000000000000000000000000000000090349087908790600401611289565b600060405180830381600087803b15801561059357600080fd5b505af11580156104aa573d6000803e3d6000fd5b60405163a415bcad60e01b81526001600160a01b0385169063a415bcad906105fb907f00000000000000000000000000000000000000000000000000000000000000009087908790879033906004016112e1565b600060405180830381600087803b15801561061557600080fd5b505af1158015610629573d6000803e3d6000fd5b5050604051632e1a7d4d60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169250632e1a7d4d915061067990869060040161145f565b600060405180830381600087803b15801561069357600080fd5b505af11580156106a7573d6000803e3d6000fd5b505050506106b53384610dec565b50505050565b6106c3610e7e565b6000546001600160a01b039081169116146106f05760405162461bcd60e51b81526004016100ed906113b6565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6040516335ea6a7560e01b81526000906001600160a01b038516906335ea6a7590610789907f000000000000000000000000000000000000000000000000000000000000000090600401611215565b6101806040518083038186803b1580156107a257600080fd5b505afa1580156107b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107da91906110d4565b60e0015190506000816001600160a01b03166370a08231336040518263ffffffff1660e01b815260040161080e9190611215565b60206040518083038186803b15801561082657600080fd5b505afa15801561083a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085e91906111c4565b90508360001981141561086e5750805b6040516323b872dd60e01b81526001600160a01b038416906323b872dd9061089e90339030908690600401611229565b602060405180830381600087803b1580156108b857600080fd5b505af11580156108cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f091906110b4565b50604051631a4ca37b60e21b81526001600160a01b038716906369328dec90610941907f00000000000000000000000000000000000000000000000000000000000000009085903090600401611266565b602060405180830381600087803b15801561095b57600080fd5b505af115801561096f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099391906111c4565b50604051632e1a7d4d60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e1a7d4d906109e090849060040161145f565b600060405180830381600087803b1580156109fa57600080fd5b505af1158015610a0e573d6000803e3d6000fd5b50505050610a1c8482610dec565b505050505050565b6000546001600160a01b031690565b610a3b610e7e565b6000546001600160a01b03908116911614610a685760405162461bcd60e51b81526004016100ed906113b6565b60405163a9059cbb60e01b81526001600160a01b0384169063a9059cbb90610a96908590859060040161124d565b602060405180830381600087803b158015610ab057600080fd5b505af1158015610ac4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b591906110b4565b7f000000000000000000000000000000000000000000000000000000000000000090565b610b14610e7e565b6000546001600160a01b03908116911614610b415760405162461bcd60e51b81526004016100ed906113b6565b610b4b8282610dec565b5050565b610b57610e7e565b6000546001600160a01b03908116911614610b845760405162461bcd60e51b81526004016100ed906113b6565b6001600160a01b038116610baa5760405162461bcd60e51b81526004016100ed90611343565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b610c0d610e7e565b6000546001600160a01b03908116911614610c3a5760405162461bcd60e51b81526004016100ed906113b6565b60405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390610c8a9084906000199060040161124d565b602060405180830381600087803b158015610ca457600080fd5b505af1158015610cb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4b91906110b4565b6000808261010001516001600160a01b03166370a08231856040518263ffffffff1660e01b8152600401610d109190611215565b60206040518083038186803b158015610d2857600080fd5b505afa158015610d3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6091906111c4565b8361012001516001600160a01b03166370a08231866040518263ffffffff1660e01b8152600401610d919190611215565b60206040518083038186803b158015610da957600080fd5b505afa158015610dbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de191906111c4565b915091509250929050565b604080516000808252602082019092526001600160a01b038416908390604051610e1691906111dc565b60006040518083038185875af1925050503d8060008114610e53576040519150601f19603f3d011682016040523d82523d6000602084013e610e58565b606091505b5050905080610e795760405162461bcd60e51b81526004016100ed906113eb565b505050565b3390565b8051610e8d816114c3565b919050565b600060208284031215610ea3578081fd5b610ead6020611468565b9151825250919050565b80516fffffffffffffffffffffffffffffffff81168114610e8d57600080fd5b803561ffff81168114610e8d57600080fd5b805164ffffffffff81168114610e8d57600080fd5b805160ff81168114610e8d57600080fd5b600060208284031215610f20578081fd5b8135610f2b816114c3565b9392505050565b600080600060608486031215610f46578182fd5b8335610f51816114c3565b92506020840135610f61816114c3565b9150610f6f60408501610ed7565b90509250925092565b600080600060608486031215610f8c578283fd5b8335610f97816114c3565b92506020840135610fa7816114c3565b929592945050506040919091013590565b60008060408385031215610fca578182fd5b8235610fd5816114c3565b946020939093013593505050565b600080600060608486031215610ff7578283fd5b8335611002816114c3565b9250602084013591506040840135611019816114c3565b809150509250925092565b60008060008060808587031215611039578081fd5b8435611044816114c3565b935060208501359250604085013591506060850135611062816114c3565b939692955090935050565b60008060008060808587031215611082578384fd5b843561108d816114c3565b935060208501359250604085013591506110a960608601610ed7565b905092959194509250565b6000602082840312156110c5578081fd5b81518015158114610f2b578182fd5b60006101808083850312156110e7578182fd5b6110f081611468565b90506110fc8484610e92565b815261110a60208401610eb7565b602082015261111b60408401610eb7565b604082015261112c60608401610eb7565b606082015261113d60808401610eb7565b608082015261114e60a08401610eb7565b60a082015261115f60c08401610ee9565b60c082015261117060e08401610e82565b60e0820152610100611183818501610e82565b90820152610120611195848201610e82565b908201526101406111a7848201610e82565b908201526101606111b9848201610efe565b908201529392505050565b6000602082840312156111d5578081fd5b5051919050565b60008251815b818110156111fc57602081860181015185830152016111e2565b8181111561120a5782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6001600160a01b03948516815260208101939093529216604082015261ffff909116606082015260800190565b6001600160a01b03948516815260208101939093526040830191909152909116606082015260800190565b6001600160a01b0395861681526020810194909452604084019290925261ffff166060830152909116608082015260a00190565b60208082526014908201527311985b1b189858dac81b9bdd08185b1b1bddd95960621b604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b602080825260139082015272149958d95a5d99481b9bdd08185b1b1bddd959606a1b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526013908201527211551217d514905394d1915497d19052531151606a1b604082015260600190565b60208082526027908201527f6d73672e76616c7565206973206c657373207468616e2072657061796d656e7460408201526608185b5bdd5b9d60ca1b606082015260800190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561149857634e487b7160e01b600052604160045260246000fd5b604052919050565b6000828210156114be57634e487b7160e01b81526011600452602481fd5b500390565b6001600160a01b03811681146114d857600080fd5b5056fea26469706673582212203fe7807ee912bd501e0306665944f6e716861d44356dca4432cdf273ef99a47a64736f6c63430008000033";