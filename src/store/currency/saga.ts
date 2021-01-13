import { ForkEffect, put, select, takeEvery } from "redux-saga/effects";
import { api } from "../../api/services";
// import { CurrencyData } from "../../types/apiResponses";
import { ActionTypes } from "../../types/redux";
import { setCurrencyData, setMaxPage } from "./action";
import { getCurrencyCapacity } from "./selector";
import { CurrencyActionTypes } from "./types";

// FIXME: Типизировать
function* fetchCurrencyList() {
  try {
    // FIXME: почему ругается CALL
    const currencyListData = yield api.getCurrencyList();
    const currencyPerPage = yield select(getCurrencyCapacity);
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
