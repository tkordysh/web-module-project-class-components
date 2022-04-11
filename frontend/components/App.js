import React from 'react'

import TodoList from './TodoList';
import Todo from './Todo';
import Form from './Form';


const tasks = [
  {
    name: 'Exercise',
    id: 1234,
    completed: false
  },
  {
    name: 'Meditate',
    id: 1235,
    completed: false
  },
  {
    name: 'Practice coding',
    id: 1236,
    completed: false
  },
  {
    name: 'Play basketball',
    id: 1237,
    completed: false
  }
];




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }



  render() {
    return (
      <div>
        <h2>Todo List: </h2>
        <TodoList tasks={this.state.tasks}/>
      </div>
    )
  }
}
