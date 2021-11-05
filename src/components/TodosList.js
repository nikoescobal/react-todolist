/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          // <li key={todo.id}>{todo.title}</li>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            addTodoProps={this.props.addTodoProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
