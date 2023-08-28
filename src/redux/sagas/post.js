import {put, fork, takeEvery} from 'redux-saga/effects';
import {removePostsData, setPostsData} from '../actions/postActions';
import {POSTS} from '../constants/constants';

function* setPosts(data) {
  const type = data?.payload?.type;
  const postData = data?.payload?.data;
  if (type === 'ADD') {
    yield put(setPostsData(postData));
  } else if (type === 'REMOVE') {
    yield put(removePostsData([]));
  }
}

export default fork(function* () {
  yield takeEvery(POSTS, setPosts);
});
