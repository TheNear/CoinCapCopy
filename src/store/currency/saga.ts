import { put, select, takeEvery } from "redux-saga/effects";
import { api } from "../../helpers/services";
// import { CurrencyData } from "../../types/apiResponses";
import { ActionTypes } from "../../types/redux";
import { setCurrencyData, setMaxPage } from "./action";
import { getCurrencyCapacity } from "./selector";
import { CurrencyActionTypes } from "./types";

// FIXME: Типизировать
function* fetchCurrencyList() {
  try {
    console.log("sadfsdafasd");
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

export function* watchFetchCurrencyList() {
  yield takeEvery(CurrencyActionTypes.FETCH_CURRENCY_DATA, fetchCurrencyList);
}
