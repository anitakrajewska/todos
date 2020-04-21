import React from 'react';

const ButtonFilter = props => {
  return (
    <button className={props.cssBtnFilter}
      onClick={props.filter}
    >{props.filterName}</button>
  );
}

export default ButtonFilter;