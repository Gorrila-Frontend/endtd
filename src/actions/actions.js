import uuid from 'uuid';
// Создаем событие 
const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: uuid(),
    completed: false,
    payload: { text },
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
