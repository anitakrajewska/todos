import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';
//import ButtonFilter from './ButtonFilter';
import TaskForm from './TaskForm';

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'mark all as read',
        isActive: true,
      },
      {
        id: 2,
        title: 'add filters: All | Active | Done',
        isActive: true,
      },
      {
        id: 3,
        title: 'add cover if task list is empty',
        isActive: true,
      },
      {
        id: 4,
        title: 'move styles to components, Cleanup',
        isActive: true,
      },
      {
        id: 5,
        title: 'clear completed',
        isActive: true,
      },
      {
        id: 6,
        title: 'items left',
        isActive: false,
      }
    ],
    activeTasks: 0,
    completedTasks: 0
  }
  inputElement = null;

  componentDidMount() {
    const activeTasks = this.countActiveTasks(this.state.tasks);
    const completedTasks = this.countCompletedTasks(this.state.tasks);

    this.setState({
      activeTasks,
      completedTasks
    })
  }

  toggleActive = (id) => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.isActive = !task.isActive;
      }
      return task;
    });

    const activeTasks = this.countActiveTasks(tasks);
    const completedTasks = this.countCompletedTasks(tasks);

    // tasks.forEach(task => {
    //   if (task.id === id) {
    //     task.isActive = !task.isActive;
    //   }
    // })


    this.setState({
      tasks,
      activeTasks,
      completedTasks
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const tasks = [...this.state.tasks];

    if (this.inputElement.value === '' || this.inputElement.value === ' ') {
      return;
    }
    tasks.push({
      id: this.state.tasks.length + 1,
      title: this.inputElement.value,
      isActive: true,
    });

    const activeTasks = this.countActiveTasks(tasks);
    const completedTasks = this.countCompletedTasks(tasks);

    this.setState({
      tasks,
      activeTasks,
      completedTasks
    })

    this.inputElement.value = '';
  }

  handleDeleteTaskClick = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);

    tasks.splice(index, 1);

    const activeTasks = this.countActiveTasks(tasks);
    const completedTasks = this.countCompletedTasks(tasks);

    this.setState({
      tasks,
      activeTasks,
      completedTasks
    })
  }

  handleDeleteCompletedTasksClick = () => {
    const tasks = this.state.tasks.filter(item => item.isActive);
    const activeTasks = this.countActiveTasks(tasks);
    const completedTasks = this.countCompletedTasks(tasks);

    this.setState({
      tasks,
      activeTasks,
      completedTasks
    })





    console.log(tasks)
  }

  countActiveTasks = (tasks) => tasks.filter(item => item.isActive).length;

  countCompletedTasks = (tasks) => tasks.filter(item => !item.isActive).length;

  render() {
    // const all = props.tasks.filter(item => item);

    return (
      <main className="todoapp">
        <TaskForm submit={this.handleSubmit} newTaskInput={el => this.inputElement = el} />
        <div className="todos">
          <TaskList
            tasks={this.state.tasks}
            toggle={this.toggleActive}
            delete={this.handleDeleteTaskClick}
          />
        </div>
        <nav className="filterList">
          <span className="filterTodo"><em>{this.state.activeTasks}</em> items left</span>
          {/* <ul className="filters">
            <li><ButtonFilter cssBtnFilter="btnFilter" filterName="All" filter={() => this.setFilter('all')} /></li>
            <li><ButtonFilter cssBtnFilter="btnFilter" filterName="Active" filter={() => this.setFilter('active')} /></li>
            <li><ButtonFilter cssBtnFilter="btnFilter" filterName="Done" filter={() => this.setFilter('done')} /></li>
          </ul> */}
          <span className="filterClear">
            <button onClick={this.handleDeleteCompletedTasksClick}>Clear done [{this.state.completedTasks}]</button>
          </span>
        </nav>
      </main>
    );
  }
}

export default App;
