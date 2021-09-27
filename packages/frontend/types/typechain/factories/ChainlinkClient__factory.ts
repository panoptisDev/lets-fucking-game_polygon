/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ChainlinkClient,
  ChainlinkClientInterface,
} from "../ChainlinkClient";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
];

const _bytecode =
  "0x60806040526001600455348015601457600080fd5b50603f8060226000396000f3fe6080604052600080fdfea2646970667358221220051b7f89907b82b68e68cce9bff783a26514cd21164f75eb4de07136edbdba9664736f6c63430006060033";

export class ChainlinkClient__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChainlinkClient> {
    return super.deploy(overrides || {}) as Promise<ChainlinkClient>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChainlinkClient {
    return super.attach(address) as ChainlinkClient;
  }
  connect(signer: Signer): ChainlinkClient__factory {
    return super.connect(signer) as ChainlinkClient__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainlinkClientInterface {
    return new utils.Interface(_abi) as ChainlinkClientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkClient {
    return new Contract(address, _abi, signerOrProvider) as ChainlinkClient;
  }
}
