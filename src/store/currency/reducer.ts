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
};

export const currencyReducer = (
  state = initialState,
  action: CurrencyActions,
): CurrencyInitialState => {
  switch (action.type) {
    case CurrencyActionTypes.SET_CURRENCY_DATA: {
      return state;
    }
    default:
      return state;
  }
};
