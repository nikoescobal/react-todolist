/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem(props) {
  return <li>{props.todo.title}</li>;
}

export default TodoItem;
