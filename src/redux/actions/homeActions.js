import {
  SET_CURRENT_PAGE,
  SET_POSTS_PER_PAGE,
  SET_SEARCH_TEXT,
  UPDATE_CURRENT_PAGE,
  UPDATE_POSTS_PER_PAGE,
  UPDATE_SEARCH_TEXT,
} from '../constants/constants';

export function setSearchText(data) {
  return {
    type: SET_SEARCH_TEXT,
    payload: data,
  };
}

export function updateSearchText(data) {
  return {
    type: UPDATE_SEARCH_TEXT,
    payload: data,
  };
}

export function setCurrentPage(data) {
  return {
    type: SET_CURRENT_PAGE,
    payload: data,
  };
}

export function updateCurrentPage(data) {
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: data,
  };
}

export function setPostsPerPage(data) {
  return {
    type: SET_POSTS_PER_PAGE,
    payload: data,
  };
}

export function updatePostsPerPage(data) {
  return {
    type: UPDATE_POSTS_PER_PAGE,
    payload: data,
  };
}
