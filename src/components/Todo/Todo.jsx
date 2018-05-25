import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo} from '../../actions/actions';
//импортируем наш таск
import Task from '../Task/Task';
import uuid from 'uuid';

class Todo extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input
           type='text'
           id="exampleFormControlTextarea1"
           /* ref для ссылки на инпут , стобы вывести в дальнейшем его значение*/
           ref='task'
           placeholder='add new task'
           style={{
             display: "block",
             margin: "50px 30px 50px 0",
             height: "35px",
             width: "400px",
             borderRadius: "2px",
             border: "none",
             borderBottom: "solid 1px #64FFDA",
             background: "transparent",
             color: "#000",
             outline: "none",

           }}/>
            <button
              /*
                На событие клик мы вызываем анонимную функцию а на вход пропсы addTodo
                */
                style={{
                  width: '105px',
                  height: '45px',
                }}
                type='button'
                className='btn btn-success'
                onClick={() => this.props.addTodo({
                todo: {
                  text: this.refs.task.value,
                  completed: false,
                  id: uuid(),
                }
              })} >
                Add Task
              </button>

            </div>
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}> 
                {
                  this.props.todos.map((i, idx) => (<Task todo={i.todo} />))
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
  dispatch => bindActionCreators({ addTodo}, dispatch) )(Todo);
