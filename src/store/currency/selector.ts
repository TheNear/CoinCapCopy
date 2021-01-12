import { createSelector } from "reselect";
import { CurrencyData } from "../../types/apiResponses";
import { RootState } from "../../types/redux";

export const getCurrencyList = (state: RootState): CurrencyData[] => state.currency.data;
export const getCurrencyPage = (state: RootState): number => state.currency.page;
export const getCurrencyCapacity = (state: RootState): number => state.currency.pageCapacity;
export const getMaxPage = (state: RootState): number => state.currency.maxPage;

export const getCurrencyListPart = createSelector(
  [getCurrencyList, getCurrencyPage, getCurrencyCapacity],
  (list, page, capacity) => {
    return list.slice(0, page * capacity);
  },
);
