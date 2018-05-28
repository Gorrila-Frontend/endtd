import uuid from 'uuid';

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: uuid(),
    completed: false,
    active: true,
    payload: { text }
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: { id },
  }
}
export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: { id },
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
