import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getGleaningListItem() {
  try {
    const response = yield axios.get("api/salesforce/gleaning/item");
    yield put({ type: "SET_GLEANING_ITEM", payload: response.data });
  } catch (error) {
    console.log("Gleaning request failed", error);
  }
}

function* gleaningListSaga() {
  yield takeLatest("GET_ALL_GLEANING", getGleaningListItem);
}

export default gleaningListSaga;