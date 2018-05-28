import React, { Component } from 'react';

class TodoInput extends Component {  
  constructor (props) {
    super(props);
    this.state = {
      todos: {
        text: '',
      }
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (event) => {
    this.setState({
      todos: {
        text: event.target.value
      }
    })
  }
  onSubmit = () => {
    this.props.addTodo(this.state.todos.text);
  }

  render () {
    return (
      <form 
        onSubmit={(event) => event.preventDefault()}
      >
        <input 
          type="text"
          onChange={this.onChange}
        />
        <button   
          className="btn btn-primary" 
          type="submit"
          onClick={ this.onSubmit }
          disabled={!this.state.todos.text}
        >
          ADD
        </button>
      </form>
    )
  }
}

export default TodoInput;
