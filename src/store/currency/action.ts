import { CurrencyData } from "../../types/apiResponses";
import { CurrencyActionTypes } from "./types";

export const setCurrencyData = (data: CurrencyData[]) => ({
  type: CurrencyActionTypes.SET_CURRENCY_DATA,
  payload: data,
} as const);

export const fetchCurrencyData = () => ({
  type: CurrencyActionTypes.FETCH_CURRENCY_DATA,
} as const);

export const setMaxPage = (pageCounts: number) => ({
  type: CurrencyActionTypes.SET_MAX_PAGE,
  payload: pageCounts,
} as const);

export const changePage = () => ({
  type: CurrencyActionTypes.CHANGE_VIEW_PAGE,
} as const);
