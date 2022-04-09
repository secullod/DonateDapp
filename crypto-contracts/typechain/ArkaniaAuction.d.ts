/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ArkaniaAuctionInterface extends ethers.utils.Interface {
  functions: {
    "bid()": FunctionFragment;
    "bids(address)": FunctionFragment;
    "end()": FunctionFragment;
    "endAt()": FunctionFragment;
    "ended()": FunctionFragment;
    "highestBid()": FunctionFragment;
    "highestBidder()": FunctionFragment;
    "nft()": FunctionFragment;
    "nftId()": FunctionFragment;
    "seller()": FunctionFragment;
    "start()": FunctionFragment;
    "started()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(functionFragment: "bids", values: [string]): string;
  encodeFunctionData(functionFragment: "end", values?: undefined): string;
  encodeFunctionData(functionFragment: "endAt", values?: undefined): string;
  encodeFunctionData(functionFragment: "ended", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "highestBid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "highestBidder",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "nftId", values?: undefined): string;
  encodeFunctionData(functionFragment: "seller", values?: undefined): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(functionFragment: "started", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bids", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "end", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ended", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "highestBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "highestBidder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "started", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Bid(address,uint256)": EventFragment;
    "End(address,uint256)": EventFragment;
    "Start()": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "End"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Start"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type BidEvent = TypedEvent<
  [string, BigNumber] & { sender: string; amount: BigNumber }
>;

export type EndEvent = TypedEvent<
  [string, BigNumber] & { winner: string; amount: BigNumber }
>;

export type StartEvent = TypedEvent<[] & {}>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber] & { bidder: string; amount: BigNumber }
>;

export class ArkaniaAuction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ArkaniaAuctionInterface;

  functions: {
    bid(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bids(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endAt(overrides?: CallOverrides): Promise<[BigNumber]>;

    ended(overrides?: CallOverrides): Promise<[boolean]>;

    highestBid(overrides?: CallOverrides): Promise<[BigNumber]>;

    highestBidder(overrides?: CallOverrides): Promise<[string]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    nftId(overrides?: CallOverrides): Promise<[BigNumber]>;

    seller(overrides?: CallOverrides): Promise<[string]>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    started(overrides?: CallOverrides): Promise<[boolean]>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bid(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bids(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  end(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endAt(overrides?: CallOverrides): Promise<BigNumber>;

  ended(overrides?: CallOverrides): Promise<boolean>;

  highestBid(overrides?: CallOverrides): Promise<BigNumber>;

  highestBidder(overrides?: CallOverrides): Promise<string>;

  nft(overrides?: CallOverrides): Promise<string>;

  nftId(overrides?: CallOverrides): Promise<BigNumber>;

  seller(overrides?: CallOverrides): Promise<string>;

  start(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  started(overrides?: CallOverrides): Promise<boolean>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bid(overrides?: CallOverrides): Promise<void>;

    bids(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    end(overrides?: CallOverrides): Promise<void>;

    endAt(overrides?: CallOverrides): Promise<BigNumber>;

    ended(overrides?: CallOverrides): Promise<boolean>;

    highestBid(overrides?: CallOverrides): Promise<BigNumber>;

    highestBidder(overrides?: CallOverrides): Promise<string>;

    nft(overrides?: CallOverrides): Promise<string>;

    nftId(overrides?: CallOverrides): Promise<BigNumber>;

    seller(overrides?: CallOverrides): Promise<string>;

    start(overrides?: CallOverrides): Promise<void>;

    started(overrides?: CallOverrides): Promise<boolean>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Bid(address,uint256)"(
      sender?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; amount: BigNumber }
    >;

    Bid(
      sender?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; amount: BigNumber }
    >;

    "End(address,uint256)"(
      winner?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { winner: string; amount: BigNumber }
    >;

    End(
      winner?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { winner: string; amount: BigNumber }
    >;

    "Start()"(): TypedEventFilter<[], {}>;

    Start(): TypedEventFilter<[], {}>;

    "Withdraw(address,uint256)"(
      bidder?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { bidder: string; amount: BigNumber }
    >;

    Withdraw(
      bidder?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { bidder: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    bid(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bids(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endAt(overrides?: CallOverrides): Promise<BigNumber>;

    ended(overrides?: CallOverrides): Promise<BigNumber>;

    highestBid(overrides?: CallOverrides): Promise<BigNumber>;

    highestBidder(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    nftId(overrides?: CallOverrides): Promise<BigNumber>;

    seller(overrides?: CallOverrides): Promise<BigNumber>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    started(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bid(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bids(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ended(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    highestBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    highestBidder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    started(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}