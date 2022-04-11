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

  toggleTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }


  addTask = (e, task) => {
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }


  clearCompleted = (e) => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }



  render() {
    return (
      <div>
        <h2>Todo List: </h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask}/>
        <Form tasks={this.state.tasks} clearCompleted={this.clearCompleted} addTask={this.addTask}/>
      </div>
    )
  }
}
