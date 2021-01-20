import { ForkEffect, put, select, takeEvery, call } from "redux-saga/effects";
import { FetchApi } from "../../api/fetchService";
import { CurrencyData } from "../../api/types";
import { ActionTypes } from "../../types/redux";
import { setCurrencyData, setMaxPage } from "./action";
import { getCurrencyCapacity } from "./selector";
import { CurrencyActionTypes } from "./types";

// FIXME: Типизировать
function* fetchCurrencyList() {
  try {
    const currencyListData: CurrencyData[] = yield call(FetchApi.getCurrencyList);
    const currencyPerPage: number = yield select(getCurrencyCapacity);
    const maxPossiblePages = Math.ceil(currencyListData.length / currencyPerPage);
    yield put<ActionTypes>(setMaxPage(maxPossiblePages));
    yield put<ActionTypes>(setCurrencyData(currencyListData));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchCurrencyList(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(CurrencyActionTypes.FETCH_CURRENCY_DATA, fetchCurrencyList);
}
