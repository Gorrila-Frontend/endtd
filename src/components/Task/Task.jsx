import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//здесь мы создаем отдельную задачу

class Task extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.todo.text}
      </div>
    );
  }
}



export default connect(
  null,
  dispatch => bindActionCreators({}, dispatch)
)(Task);
