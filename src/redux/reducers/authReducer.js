import {
  SET_ERROR_MSG,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  SET_LOGGED_IN_FALSE,
  SET_LOGGED_IN_USER,
} from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  errorMessage: '',
};

async function setUserDetailsInStorage(data) {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

async function removeUserDetailsInStorage() {
  try {
    await AsyncStorage.removeItem('user');
  } catch (err) {
    console.log(err);
  }
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_LOADING_FALSE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SET_LOGGED_IN_FALSE: {
      removeUserDetailsInStorage();
      return {
        ...initialState,
      };
    }
    case SET_LOGGED_IN_USER: {
      setUserDetailsInStorage(action.payload);
      return {
        ...state,
        isLoggedIn: true,
        loggedInUser: {...action.payload},
      };
    }
    case SET_ERROR_MSG: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
}
