import React from 'react'

export default class Form extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <button>Add Task</button>
          <button onClick={this.props.clearCompleted}>Hide Completed Tasks</button>
        </form>
      </div>
    )
  }
}
