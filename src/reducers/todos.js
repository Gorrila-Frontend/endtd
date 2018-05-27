
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, action.payload.todo
      ]
    case 'TOGGLE_TODO':
    return state.map(todo => {
      if(todo.id === action.payload.id ){
       return {...todo, completed: !todo.completed, active: !todo.active} 
    }
    else{ return todo } 
  })
  case 'DELETE_TODO':
    return state.filter(todo => (todo.id !== action.payload.id)
   )
  case 'ACTIVE_SORT':
   return state.filter(todo =>!todo.complited);

  case 'COMPLETED_SORT':
    return state.filter(todo => !todo.active.});   

  case 'ALL_TODO':
    return state;
    default:
      return state;
  }


}
export default todos;
