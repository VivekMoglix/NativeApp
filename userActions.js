export function addUser(name, age) {
  return {
    type: 'ADD_USER',
    payload: {name: name, age: age},
  };
}

export function updateUser(name, age, index) {
  return {
    type: 'UPDATE_USER',
    payload: {name: name, age: age, index: index},
  };
}

export function deleteUser(index) {
  return {
    type: 'DELETE_USER',
    payload: index,
  };
}

export function setEditTrue() {
  return {
    type: 'SET_EDIT_TRUE',
  };
}

export function setEditFalse() {
  return {
    type: 'SET_EDIT_FALSE',
  };
}

export function setErrorTrue() {
  return {
    type: 'SET_ERROR_TRUE',
  };
}

export function setErrorFalse() {
  return {
    type: 'SET_ERROR_FALSE',
  };
}

export function setErrorMessage(message) {
  return {
    type: 'SET_ERROR_MSG',
    payload: message,
  };
}
