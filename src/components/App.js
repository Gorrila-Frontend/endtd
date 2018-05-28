
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <TodoInput addTodo={this.props.actions.addTodo } />
        <TodoList 
         todos={this.props.todos}
         actions={this.props.actions} 
        />
        <Footer 
          filter={this.props.visibilityFilter}
          onFilterChange={nextFilter =>
            this.props.actions.setVisibilityFilter(nextFilter)
          }          
        />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);