import { CurrencyData } from "../../types/apiResponses";
import { InferValueTypes } from "../../types/redux";
import * as actions from "./action";

export enum CurrencyActionTypes {
  FETCH_CURRENCY_DATA = "users/FETCH_CURRENCY_DATA",
  SET_CURRENCY_DATA = "users/SET_CURRENCY_DATA",
  SET_SORT_TYPE = "users/SET_SORT_TYPE",
  CHANGE_SORT_DIRECTION = "users/CHANGE_SORT_DIRECTION",
}

export enum PossibleSortTypes {
  NOT_SORTED = "NOT_SORTED",
  BY_RANK = "BY_RANK",
  BY_NAME = "BY_NAME",
  BY_PRICE = "BY_PRICE",
  BY_MARKETCUP = "BY_MARKET_CUP",
  BY_VWAP = "BY_VWAP",
  BY_SUPPLY = "BY_SUPPLY",
  BY_VOLUME = "BY_VOLUME",
  BY_CHANGE = "BY_CHANGE",
}

export interface CurrencyInitialState {
  readonly data: CurrencyData[],
  readonly sortType: PossibleSortTypes,
  readonly sortAZ: boolean,
}

export type CurrencyActions = ReturnType<InferValueTypes<typeof actions>>;
