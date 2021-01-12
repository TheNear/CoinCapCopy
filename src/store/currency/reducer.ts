import { CURRENCY_PER_PAGE } from "../../assets/js/constants";
import {
  CurrencyInitialState,
  CurrencyActions,
  PossibleSortTypes,
  CurrencyActionTypes,
} from "./types";

const initialState: CurrencyInitialState = {
  data: [],
  sortAZ: true,
  sortType: PossibleSortTypes.NOT_SORTED,
  page: 1,
  maxPage: 1,
  pageCapacity: CURRENCY_PER_PAGE,
};

export const currencyReducer = (
  state = initialState,
  action: CurrencyActions,
): CurrencyInitialState => {
  switch (action.type) {
    case CurrencyActionTypes.SET_CURRENCY_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case CurrencyActionTypes.SET_MAX_PAGE: {
      return {
        ...state,
        maxPage: action.payload,
      };
    }
    case CurrencyActionTypes.CHANGE_VIEW_PAGE: {
      const newPage = state.page + 1;
      return {
        ...state,
        page: newPage > state.maxPage ? 1 : newPage,
      };
    }
    default:
      return state;
  }
};
