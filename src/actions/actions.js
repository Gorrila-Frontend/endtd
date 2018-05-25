import uuid from 'uuid';

const addTodo = (todo) => {
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
    type: 'ADD_TODO',
    payload: { id },
  }
}
export { addTodo, toggleTodo, deleteTodo };
