import {
  UPDATE_CURRENT_PAGE,
  UPDATE_POSTS_PER_PAGE,
  UPDATE_SEARCH_TEXT,
} from '../constants/constants';

const initialState = {
  searchText: '',
  pagination: {
    currentPage: 1,
    postsPerPage: 15,
    totalPosts: 100,
  },
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_POSTS_PER_PAGE: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          postsPerPage: action.payload,
        },
      };
    }
    case UPDATE_CURRENT_PAGE: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    }
    case UPDATE_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    default:
      return state;
  }
}
