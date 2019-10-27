import React, { Component } from 'react';
import ThingTodo from './ThingTodo/ThingTodo.js'
class TodoList extends Component {
  state = {}
  render () {
    return (
      <ThingTodo toWhat="123"></ThingTodo>
    );
  }
}

export default TodoList;