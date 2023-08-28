import {all} from 'redux-saga/effects';
import auth from './auth';
import post from './post';
import home from './home';

export default function* () {
  yield all([auth, post, home]);
}
