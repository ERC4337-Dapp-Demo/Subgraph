import { NewCurrency, SetPermissionCurrency } from '../generated/Currency/Currency';
import { fetchTokenDecimals, fetchTokenName, fetchTokenSymbol } from './helper';
import { Currency } from '../generated/schema'

export function handleNewCurrency(event: NewCurrency): void {
    let address = event.params.currency;
    let currency = Currency.load(address.toHexString());

    if (currency == null) {
        currency = new Currency(address.toHexString());
        currency.erc20Address = address;
        currency.name = fetchTokenName(address);
        currency.symbol = fetchTokenSymbol(address);
        currency.decimal = fetchTokenDecimals(address) as i32;
        currency.url = event.params.url;
        currency.permission = true;
    }

    currency.save();
}

export function handleSetPermissionCurrency(event: SetPermissionCurrency): void {
    let address = event.params.currency;
    let currency = Currency.load(address.toHexString());

    if (currency == null) {
        currency = new Currency(address.toHexString());
        currency.erc20Address = address;
        currency.name = fetchTokenName(address);
        currency.symbol = fetchTokenSymbol(address);
        currency.decimal = fetchTokenDecimals(address) as i32;
        currency.url = "";
        currency.permission = true;
    }

    currency.permission = event.params.permission;
    currency.save();
}