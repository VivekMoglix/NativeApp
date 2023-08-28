import {put, fork, takeEvery, take, takeLatest} from 'redux-saga/effects';
import {
  LoginUser,
  LogoutUser,
  setErrorMessage,
  setLoadingFalse,
  setLoadingTrue,
  setLoggedInUser,
} from '../actions/authActions';
import {
  LOGGED_IN_USER,
  LOGOUT,
  SET_ERROR,
  SET_ERROR_MSG,
  SET_LOADING,
} from '../constants/constants';

function* setLoading({payload}) {
  if (payload === true) {
    yield put(setLoadingTrue());
  } else if (payload === false) {
    yield put(setLoadingFalse());
  }
}

function* setLogout() {
  yield put(LogoutUser());
}

function* setLoggedInUserDetails(data) {
  let {payload} = data;
  yield put(setLoggedInUser(payload));
}

function* setError({payload}) {
  yield put(setErrorMessage(payload));
}

export default fork(function* () {
  yield takeLatest(SET_LOADING, setLoading);
  yield takeEvery(LOGOUT, setLogout);
  yield takeEvery(LOGGED_IN_USER, setLoggedInUserDetails);
  yield takeEvery(SET_ERROR, setError);
});
