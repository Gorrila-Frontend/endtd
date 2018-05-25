import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../../actions/actions';


class Task extends Component {
  render() {
console.log(this.props)
    return (
      <div>
        <div
          style={{
            background: this.props.todo ? '#000' : 'teal',
            width: '200px',
            height: '250px',
            color: '#000',
            boxShadow: '0 0 20px 2px rgba(20, 220, 103, .4)',
            borderRadius: '7px',
            fontFamily: 'Helvetica',textTransform: 'uppercase',
            marginTop: '30px',
            marginRight: '15px',
            textAlign: 'center',
            padding: '20px 15px 15px 15px',
            maxWidth: '90%',
            wordWrap: 'break-word'
          }}
        >
    {this.props.text}
        
        </div>
        <div>
          <button 
            onClick={() => toggleTodo(this.props.todo)}
            style={{marginTop: '15px'}}
            className="btn btn-outline-success">
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ toggleTodo }, dispatch  )
)(Task);

