import uuid from 'uuid';

const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    payload: { todo },
  }
};

const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: { id },
  }
}
const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: { id },
  }
}

const sortFilterActive = id => {
  return {
    type: 'ACTIVE_SORT',
    payload: { id },
  }
}
const sortFilterCompleted = id => {
  return {
    type: 'COMPLETED_SORT',
    payload: { id }, 
  }
}

const allTodo = id=> {
  return {
    type: 'ALL_TODO',
    payload: { id },
  }
}
export { addTodo, toggleTodo, deleteTodo, sortFilterActive, sortFilterCompleted,allTodo }
