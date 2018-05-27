import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo, deleteTodo } from '../../actions/actions';
import { relative } from 'path';
import '../../index.css'


class Task extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div
          style={{
            background: this.props.todo.completed ? 'rgba(0,0,0, .00001)' :  'rgba(0,0,0, .8)',
            width: '200px',
            height: '250px',
            color: this.props.todo.completed ? '#222' : '#fff',
            boxShadow: '0 0 20px 2px rgba(20, 220, 103, .6)',
            borderRadius: '7px',
            fontFamily: 'Helvetica',
            textTransform: 'uppercase',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            marginTop: '30px',
            marginRight: '15px',
            textAlign: 'left',
            padding: '15px 15px 15px 15px',
            maxWidth: '90%',
            wordWrap: 'break-word'
          }}>
          <div>
            {this.props.todo.text}
          </div>  
            <i 
              style={{
                position: 'relative',
                top: '50px',
                left: '50px',
                animationName: this.props.todo.completed ? 'Scale' : 'none',
                color: '#00d500',
              }}            
              className="far fa-calendar-check fa-4x"></i>
            
        </div>
        <div>
          <button 
            onClick={() => this.props.toggleTodo(this.props.todo.id)}
            style={{marginTop: '15px'}}
            className="btn btn-outline-success">
            OK
          </button>
          <button 
            onClick={() => this.props.deleteTodo(this.props.todo.id)}
            style={{
              marginTop: '15px',
              marginLeft: '50px',
            }}
            className="btn btn-outline-danger">>
            ReMove
          </button>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ toggleTodo, deleteTodo }, dispatch  )
)(Task);

