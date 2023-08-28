import {
  LOGGED_IN_USER,
  LOGOUT,
  SET_ERROR,
  SET_ERROR_MSG,
  SET_LOADING,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  SET_LOGGED_IN_FALSE,
  SET_LOGGED_IN_TRUE,
  SET_LOGGED_IN_USER,
} from '../constants/constants';

export function setLoading(state) {
  return {
    type: SET_LOADING,
    payload: state,
  };
}

export function setLoadingTrue() {
  return {
    type: SET_LOADING_TRUE,
  };
}

export function setLoadingFalse() {
  return {
    type: SET_LOADING_FALSE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function LogoutUser() {
  return {
    type: SET_LOGGED_IN_FALSE,
  };
}

export function loggedInUser(data) {
  return {
    type: LOGGED_IN_USER,
    payload: data,
  };
}

export function setLoggedInUser(data) {
  return {
    type: SET_LOGGED_IN_USER,
    payload: data,
  };
}

export function setError(message) {
  return {
    type: SET_ERROR,
    payload: message,
  };
}

export function setErrorMessage(message) {
  return {
    type: SET_ERROR_MSG,
    payload: message,
  };
}
