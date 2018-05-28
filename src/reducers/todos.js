
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, 
      {  
        text: action.payload.text,
        id: action.id,
        completed: false,
        active: true,
      }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id === action.payload.id ){
        return {...todo, completed: !todo.completed, active: !todo.active} 
      }
      else{ return todo } 
    })

    default:
      return state;
  }


}
export default todos;
