import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  addTodo, 
  toggleTodo, 
  deleteTodo, 
  sortFilterActive, 
  sortFilterCompleted,
  allTodo,
} from '../../actions/actions';
import Task from '../Task/Task';
import uuid from 'uuid';

class Todo extends Component {
  render() {
    return (
      <div>
        <header
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <form
          onSubmit={
            (event) => event.preventDefault()
          }
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <input
            type='text'
            ref='task'
            placeholder='add new task'
            style={{
              display: "block",
              margin: "50px 30px 50px 0",
              height: "65px",
              width: "400px",
              borderRadius: "2px",
              border: "none",
              borderBottom: "solid 1px #64FFDA",
              background: "transparent",
              color: "#000",
              outline: "none",

            }}/>
              <button
                style={{
                  width: '105px',
                  height: '45px',
                }}
                  type='submit'
                  className='btn btn-success'
                  onClick={() => this.props.addTodo({
                    id: uuid(),
                    text: this.refs.task.value,
                    completed: false,
                    active: true,
                  })
              }>                
                Add Task             
              </button>
            </form>
          </header>
          <div
            style={{
              marginLeft: '50px',
            }}
          >
          <button 
            onClick={ () => this.props.allTodo(this.props.todos) }
            style={{
              marginRight:'10px',
            }} 
            type="button" 
            className="btn btn-outline-primary">
            All
          </button>
          <button 
            onClick={() => this.props.sortFilterActive(this.props.todos)}
            style={{
              marginRight:'10px',
            }} 
            type="button" 
            className="btn btn-outline-warning">
            Active
          </button>
          <button 
            onClick={() => this.props.sortFilterCompleted(!this.props.todos)}
            style={{
              marginRight:'10px',
            }} 
            type="button" 
            className="btn btn-outline-success">
            Completed
          </button>
          </div>
            <div
              style={{
                width:'100%',
                height:'100%',
                display: 'flex',
                flexBasis: '100%',
                flefWrap: 'wrap',
              }}
            >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  {
                    this.props.todos.map(todo => <Task key={todo.id} todo={ todo }/>)
                  }
                </div>
          </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => bindActionCreators({ 
    addTodo, 
    toggleTodo, 
    deleteTodo,
    sortFilterActive,
    sortFilterCompleted,
    allTodo
  }, dispatch) )(Todo);
