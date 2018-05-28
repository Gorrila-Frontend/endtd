import React from 'react';

const TodoItem = (props) => {
  return (
    <li
    className="list-group-item"
      style={{
        color: props.todo.completed ? 'red' : 'green',
      }} 
      key={props.todo.id} >
      {props.todo.text}
      <button 
        className="btn btn-success"
        onClick={props.toggle}
      >
      Completed
      </button>
      <button 
        className="btn btn-warning"
        onClick={props.remove}
      >
      Deleted
      </button>
    </li>

  )
}

export default TodoItem;