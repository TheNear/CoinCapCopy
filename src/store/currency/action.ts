import { CurrencyData } from "../../types/apiResponses";
import { CurrencyActionTypes } from "./types";

export const setCurrencyData = (data: CurrencyData[]) => ({
  type: CurrencyActionTypes.SET_CURRENCY_DATA,
  payload: data,
} as const);
