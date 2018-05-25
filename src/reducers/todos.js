import Todo from "../components/Todo/Todo";
import uuid from 'uuid';


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, action.payload.todo
      ]
    case 'TOGGLE_TODO':
    return state.map(todo => (todo.todo.id === action.payload.id )
       ? {...todo, todo: {todo: {complited:!todo.todo.completed}} } : todo )
    default:
      return state;
  }
}
export { todos };
