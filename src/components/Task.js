import React from 'react';

const Task = props => {
  return (
    <li className="task">
      <input
        id={props.id}
        type="checkbox"
        className="task__toggle"
        name={props.id}
        checked={props.isActive}
        onChange={() => props.toggle(props.id)} />
      <label htmlFor={props.id} className="task__toggleLabel">
        <span className="ui-readonly">Mark task as done</span>
      </label>
      <h3 className="task__title">{props.title}</h3>
      <button
        className="task__btnDelete"
        onClick={() => props.delete(props.id)}
      >
        <span>Delete Task</span>
      </button>
    </li>
  );
}

export default Task;