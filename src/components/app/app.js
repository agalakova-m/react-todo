import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import 'normalize.css';
import './app.css';

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build React App'),
      this.createTodoItem('Have a lunch'),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const result = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: result,
      };
    });
  };

  addItem = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      // update object
      const idx = todoData.findIndex(el => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      // construct new array
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return { todoData: newArray };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      // update object
      const idx = todoData.findIndex(el => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };
      // construct new array
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return { todoData: newArray };
    });
  };

  render() {
    return (
      <div className="todo-app-wrapper">
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <TodoList
            todos={this.state.todoData}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleImportant={this.onToggleImportant}
          />
          <ItemAddForm onItemAdded={this.addItem} />
        </div>
      </div>
    );
  }
}
