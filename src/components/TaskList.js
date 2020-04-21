import React from 'react';
import Task from './Task';

const TaskList = props => {
  const tasks = props.tasks.map(item => {
    return <Task key={item.id} {...item} toggle={props.toggle} delete={props.delete} />
  });

  return (
    <ul className="taskList">
      {tasks.reverse()}
    </ul>
  );
}

export default TaskList;