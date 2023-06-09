// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CancelListing extends ethereum.Event {
  get params(): CancelListing__Params {
    return new CancelListing__Params(this);
  }
}

export class CancelListing__Params {
  _event: CancelListing;

  constructor(event: CancelListing) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get contractNFT(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get contractERC20(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class ListingBulkItem extends ethereum.Event {
  get params(): ListingBulkItem__Params {
    return new ListingBulkItem__Params(this);
  }
}

export class ListingBulkItem__Params {
  _event: ListingBulkItem;

  constructor(event: ListingBulkItem) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get contractNFT(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get contractERC20(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class ListingItem extends ethereum.Event {
  get params(): ListingItem__Params {
    return new ListingItem__Params(this);
  }
}

export class ListingItem__Params {
  _event: ListingItem;

  constructor(event: ListingItem) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get contractNFT(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get contractERC20(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SaleItem extends ethereum.Event {
  get params(): SaleItem__Params {
    return new SaleItem__Params(this);
  }
}

export class SaleItem__Params {
  _event: SaleItem;

  constructor(event: SaleItem) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get contractNFT(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get contractERC20(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class UpdatePriceItem extends ethereum.Event {
  get params(): UpdatePriceItem__Params {
    return new UpdatePriceItem__Params(this);
  }
}

export class UpdatePriceItem__Params {
  _event: UpdatePriceItem;

  constructor(event: UpdatePriceItem) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get contractNFT(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get contractERC20(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Marketplace__itemStoreResult {
  value0: Address;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: i32;
  value5: i32;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: i32,
    value5: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    map.set(
      "value5",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value5))
    );
    return map;
  }

  getOwner(): Address {
    return this.value0;
  }

  getAmount(): BigInt {
    return this.value1;
  }

  getContractERC20(): Address {
    return this.value2;
  }

  getPrice(): BigInt {
    return this.value3;
  }

  getContractType(): i32 {
    return this.value4;
  }

  getState(): i32 {
    return this.value5;
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
  }

  FEE_PER_ITEM(): BigInt {
    let result = super.call("FEE_PER_ITEM", "FEE_PER_ITEM():(uint256)", []);

    return result[0].toBigInt();
  }

  try_FEE_PER_ITEM(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("FEE_PER_ITEM", "FEE_PER_ITEM():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_PERCENTAGE(): BigInt {
    let result = super.call("MAX_PERCENTAGE", "MAX_PERCENTAGE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_PERCENTAGE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_PERCENTAGE",
      "MAX_PERCENTAGE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getItemStoreLength(_contractNFT: Address, _tokenId: BigInt): BigInt {
    let result = super.call(
      "getItemStoreLength",
      "getItemStoreLength(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_contractNFT),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return result[0].toBigInt();
  }

  try_getItemStoreLength(
    _contractNFT: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getItemStoreLength",
      "getItemStoreLength(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_contractNFT),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  itemStore(
    param0: Address,
    param1: BigInt,
    param2: BigInt
  ): Marketplace__itemStoreResult {
    let result = super.call(
      "itemStore",
      "itemStore(address,uint256,uint256):(address,uint256,address,uint256,uint8,uint8)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return new Marketplace__itemStoreResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toI32(),
      result[5].toI32()
    );
  }

  try_itemStore(
    param0: Address,
    param1: BigInt,
    param2: BigInt
  ): ethereum.CallResult<Marketplace__itemStoreResult> {
    let result = super.tryCall(
      "itemStore",
      "itemStore(address,uint256,uint256):(address,uint256,address,uint256,uint8,uint8)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Marketplace__itemStoreResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toI32(),
        value[5].toI32()
      )
    );
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  treasuryAddress(): Address {
    let result = super.call(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_treasuryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class BuyItemCall extends ethereum.Call {
  get inputs(): BuyItemCall__Inputs {
    return new BuyItemCall__Inputs(this);
  }

  get outputs(): BuyItemCall__Outputs {
    return new BuyItemCall__Outputs(this);
  }
}

export class BuyItemCall__Inputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }

  get _contractNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _storeId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class BuyItemCall__Outputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }
}

export class CancelItemCall extends ethereum.Call {
  get inputs(): CancelItemCall__Inputs {
    return new CancelItemCall__Inputs(this);
  }

  get outputs(): CancelItemCall__Outputs {
    return new CancelItemCall__Outputs(this);
  }
}

export class CancelItemCall__Inputs {
  _call: CancelItemCall;

  constructor(call: CancelItemCall) {
    this._call = call;
  }

  get _contractNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _storeId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CancelItemCall__Outputs {
  _call: CancelItemCall;

  constructor(call: CancelItemCall) {
    this._call = call;
  }
}

export class ListBulkItemsCall extends ethereum.Call {
  get inputs(): ListBulkItemsCall__Inputs {
    return new ListBulkItemsCall__Inputs(this);
  }

  get outputs(): ListBulkItemsCall__Outputs {
    return new ListBulkItemsCall__Outputs(this);
  }
}

export class ListBulkItemsCall__Inputs {
  _call: ListBulkItemsCall;

  constructor(call: ListBulkItemsCall) {
    this._call = call;
  }

  get _contractNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _contractERC20(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ListBulkItemsCall__Outputs {
  _call: ListBulkItemsCall;

  constructor(call: ListBulkItemsCall) {
    this._call = call;
  }
}

export class ListItemCall extends ethereum.Call {
  get inputs(): ListItemCall__Inputs {
    return new ListItemCall__Inputs(this);
  }

  get outputs(): ListItemCall__Outputs {
    return new ListItemCall__Outputs(this);
  }
}

export class ListItemCall__Inputs {
  _call: ListItemCall;

  constructor(call: ListItemCall) {
    this._call = call;
  }

  get _contractNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _contractERC20(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ListItemCall__Outputs {
  _call: ListItemCall;

  constructor(call: ListItemCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetCurrencyAddressCall extends ethereum.Call {
  get inputs(): SetCurrencyAddressCall__Inputs {
    return new SetCurrencyAddressCall__Inputs(this);
  }

  get outputs(): SetCurrencyAddressCall__Outputs {
    return new SetCurrencyAddressCall__Outputs(this);
  }
}

export class SetCurrencyAddressCall__Inputs {
  _call: SetCurrencyAddressCall;

  constructor(call: SetCurrencyAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCurrencyAddressCall__Outputs {
  _call: SetCurrencyAddressCall;

  constructor(call: SetCurrencyAddressCall) {
    this._call = call;
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class SetTreasuryAddressCall extends ethereum.Call {
  get inputs(): SetTreasuryAddressCall__Inputs {
    return new SetTreasuryAddressCall__Inputs(this);
  }

  get outputs(): SetTreasuryAddressCall__Outputs {
    return new SetTreasuryAddressCall__Outputs(this);
  }
}

export class SetTreasuryAddressCall__Inputs {
  _call: SetTreasuryAddressCall;

  constructor(call: SetTreasuryAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTreasuryAddressCall__Outputs {
  _call: SetTreasuryAddressCall;

  constructor(call: SetTreasuryAddressCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdatePriceItemCall extends ethereum.Call {
  get inputs(): UpdatePriceItemCall__Inputs {
    return new UpdatePriceItemCall__Inputs(this);
  }

  get outputs(): UpdatePriceItemCall__Outputs {
    return new UpdatePriceItemCall__Outputs(this);
  }
}

export class UpdatePriceItemCall__Inputs {
  _call: UpdatePriceItemCall;

  constructor(call: UpdatePriceItemCall) {
    this._call = call;
  }

  get _contractNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _storeId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class UpdatePriceItemCall__Outputs {
  _call: UpdatePriceItemCall;

  constructor(call: UpdatePriceItemCall) {
    this._call = call;
  }
}
