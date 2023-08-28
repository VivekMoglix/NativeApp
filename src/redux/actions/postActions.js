import {POSTS, POSTS_REMOVE, POSTS_SET} from '../constants/constants';

export function setPostsData(data) {
  return {
    type: POSTS_SET,
    payload: data,
  };
}

export function setPosts(data) {
  return {
    type: POSTS,
    payload: data,
  };
}

export function removePostsData(data) {
  return {
    type: POSTS_REMOVE,
    payload: data,
  };
}
