import {POSTS_REMOVE, POSTS_SET} from '../constants/constants';

const initialState = {
  posts: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_SET: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case POSTS_REMOVE: {
      return {
        ...state,
        posts: [],
      };
    }
    default:
      return state;
  }
}
