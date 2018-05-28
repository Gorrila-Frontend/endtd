import React from 'react';
import TodoItem from './TodoItem';
import { Button } from 'reactstrap';

const TodoList = (props) => { 
  console.log(props)
   let todo = props.todos.map(item => (
    <TodoItem 
      todo={item}
      toggle={() => props.actions.toggleTodo(item.id)}
      remove={ () => props.actions.deleteTodo(item.id)}
   />
  )) 
  return (
    <div>
      <ul
      className="list-group"
      >
      {todo}
      </ul>
      <Button  color="primary">primary</Button>
    </div>
  )
}
export default TodoList;