const initialState = {
  isEdit: false,
  hasError: false,
  errorMsg: '',
  usersData: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER': {
      let data = [...state.usersData];
      data.push({name: action.payload.name, age: action.payload.age});
      return {
        ...state,
        usersData: [...data],
      };
    }
    case 'UPDATE_USER': {
      state.usersData[action.payload.index].name = action.payload.name;
      state.usersData[action.payload.index].age = action.payload.age;
      return {
        ...state,
      };
    }
    case 'DELETE_USER': {
      let data = [...state.usersData];
      data.splice(Number(action.payload), 1);
      return {
        ...state,
        usersData: [...data],
      };
    }
    case 'SET_EDIT_TRUE': {
      return {
        ...state,
        isEdit: true,
      };
    }
    case 'SET_EDIT_FALSE': {
      return {
        ...state,
        isEdit: false,
      };
    }
    case 'SET_ERROR_TRUE': {
      return {
        ...state,
        hasError: true,
      };
    }
    case 'SET_ERROR_FALSE': {
      return {
        ...state,
        hasError: false,
      };
    }
    case 'SET_ERROR_MSG': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
