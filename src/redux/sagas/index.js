import {all} from 'redux-saga/effects';
import auth from './auth';
import post from './post';

export default function* () {
  yield all([auth, post]);
}
