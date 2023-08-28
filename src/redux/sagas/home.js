import {put, fork, takeEvery} from 'redux-saga/effects';
import {
  SET_CURRENT_PAGE,
  SET_POSTS_PER_PAGE,
  SET_SEARCH_TEXT,
} from '../constants/constants';
import {
  updateCurrentPage,
  updatePostsPerPage,
  updateSearchText,
} from '../actions/homeActions';

function* setCurrentPage({payload}) {
  yield put(updateCurrentPage(payload));
}

function* setPostsPerPage({payload}) {
  yield put(updatePostsPerPage(payload));
}

function* setSearchText({payload}) {
  yield put(updateSearchText(payload));
}

export default fork(function* () {
  yield takeEvery(SET_CURRENT_PAGE, setCurrentPage);
  yield takeEvery(SET_POSTS_PER_PAGE, setPostsPerPage);
  yield takeEvery(SET_SEARCH_TEXT, setSearchText);
});
