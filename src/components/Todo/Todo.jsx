import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../actions/actions';
//импортируем наш таск
import Task from '../Task/Task';
import uuid from 'uuid';

class Todo extends Component {

  render() {
    return (
      <div>
        <div>
          <input
           type='text'
           id="exampleFormControlTextarea1"
           /* ref для ссылки на инпут , стобы вывести в дальнейшем его значение*/
           ref='task'
           placeholder='add new task'
           style={{
             display: "block",
             margin: "50px auto 0  auto",
             height: "35px",
             width: "400px",
             borderRadius: "2px",
             border: "none",
             borderBottom: "solid 1px #64FFDA",
             background: "transparent",
             color: "#000",
             outline: "none",

           }}/>
        </div>
        <div>
            <button
              /*
                На событие клик мы вызываем анонимную функцию а на вход пропсы addTodo
                */
              onClick={() => this.props.addTodo({
                text: this.refs.task.value,
                id: uuid(),
              })}>
            </button>


      </div>
      <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
        }}
        >

            {
              /*todos это наш стейт и он массив*/
            this.props.todos.map(
              (todo, index ) => {
                return <Task style={{width:"100px",height:'100px', background: 'red', marginLeft: '10px'}} key={index} todo={todo} />
              })
            }
  </div>
    </div>
    )
  }
}
export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => bindActionCreators({ addTodo }, dispatch) )(Todo);
