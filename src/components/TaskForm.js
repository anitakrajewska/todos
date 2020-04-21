import React from 'react';

const TaskForm = props => {
  return (
    <form className="newTask" onSubmit={props.submit}>
      <input className="newTask__input"
        type="text"
        placeholder="What needs to be done?"
        ref={props.newTaskInput}
      />
    </form>
  );
}

export default TaskForm;


//       <label htmlFor="isMarkedAll">
//         <input type="checkbox" name="isMarkedAll" id="isMarkedAll"
//           checked={props.checkedMarkAll}
//           onChange={props.onchangeMarkAll} />
//             Mark all as complete
//       </label>