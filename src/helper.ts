import {
  log,
  BigInt,
  BigDecimal,
  Address,
  ethereum,
} from "@graphprotocol/graph-ts";
import { ERC20 } from "../generated/Currency/ERC20";
import { ERC721 } from "../generated/Marketplace/ERC721";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export function fetchTokenSymbol(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress);

  // try generated string and bytes32 for symbol
  let symbolValue = "UNKNOWN";
  let symbolResult = contract.try_symbol();
  if (!symbolResult.reverted) {
    symbolValue = symbolResult.value;
  }

  return symbolValue;
}

export function fetchTokenName(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress);
  // try generated string and bytes32 for name
  let nameValue = "UNKNOWN";
  let nameResult = contract.try_name();
  if (!nameResult.reverted) {
    nameValue = nameResult.value;
  }

  return nameValue;
}

export function fetchTokenDecimals(tokenAddress: Address): number {
  let contract = ERC20.bind(tokenAddress);
  // try generated uint8 for decimals
  let decimalValue = 18;
  let decimalResult = contract.try_decimals();
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value;
  }
  return decimalValue;
}

export function fetchNftTokenURI(nftAddress: Address, tokenId: BigInt): string {
  let contract = ERC721.bind(nftAddress);
  let tokenURIValue = "";
  let tokenURIResult = contract.try_tokenURI(tokenId);
  if (!tokenURIResult.reverted) {
    tokenURIValue = tokenURIResult.value;
  }
  return tokenURIValue;
}
