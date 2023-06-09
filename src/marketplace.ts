import {
  ListingItem,
  ListingBulkItem,
  CancelListing,
  UpdatePriceItem,
  SaleItem,
} from "../generated/Marketplace/Marketplace";
import { fetchNftTokenURI, ADDRESS_ZERO } from "./helper";
import { Marketplace } from "../generated/schema";
import { Address } from "@graphprotocol/graph-ts";

export function handleListingItem(event: ListingItem): void {
  let id = `${event.params.contractNFT.toHexString()}-${event.params.tokenId.toString()}-${event.params.marketId.toString()}`;
  let marketplace = new Marketplace(id);
  marketplace.nftAddress = event.params.contractNFT;
  marketplace.tokenId = event.params.tokenId;
  marketplace.price = event.params.price;
  marketplace.tokenUri = fetchNftTokenURI(
    event.params.contractNFT,
    event.params.tokenId
  );
  marketplace.status = "LISTING";
  marketplace.lister = event.params.from;
  marketplace.buyer = Address.fromHexString(ADDRESS_ZERO);
  marketplace.quantity = event.params.quantity;
  marketplace.erc20Address = event.params.contractERC20;
  marketplace.save();
}

export function handleListingBulkItem(event: ListingBulkItem): void {
  let id = `${event.params.contractNFT.toHexString()}-${event.params.tokenId.toString()}-${event.params.marketId.toString()}`;
  let marketplace = new Marketplace(id);
  marketplace.nftAddress = event.params.contractNFT;
  marketplace.tokenId = event.params.tokenId;
  marketplace.price = event.params.price;
  marketplace.tokenUri = fetchNftTokenURI(
    event.params.contractNFT,
    event.params.tokenId
  );
  marketplace.status = "LISTING";
  marketplace.lister = event.params.from;
  marketplace.buyer = Address.fromHexString(ADDRESS_ZERO);
  marketplace.quantity = event.params.quantity;
  marketplace.erc20Address = event.params.contractERC20;
  marketplace.save();
}

export function handleCancelListing(event: CancelListing): void {
  let id = `${event.params.contractNFT.toHexString()}-${event.params.tokenId.toString()}-${event.params.marketId.toString()}`;
  let marketplace = Marketplace.load(id);
  if (marketplace == null) {
    return;
  }
  marketplace.status = "CANCELED";
  marketplace.save();
}

export function handleSaleItem(event: SaleItem): void {
  let id = `${event.params.contractNFT.toHexString()}-${event.params.tokenId.toString()}-${event.params.marketId.toString()}`;
  let marketplace = Marketplace.load(id);
  if (marketplace == null) {
    return;
  }
  marketplace.status = "BOUGHT";
  marketplace.buyer = event.params.to;
  marketplace.save();
}

export function handleUpdatePriceItem(event: UpdatePriceItem): void {
  let id = `${event.params.contractNFT.toHexString()}-${event.params.tokenId.toString()}-${event.params.marketId.toString()}`;
  let marketplace = Marketplace.load(id);
  if (marketplace == null) {
    return;
  }
  marketplace.price = event.params.price;
  marketplace.save();
}
