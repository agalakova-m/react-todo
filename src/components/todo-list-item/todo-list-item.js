import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const { label, onDeleted, onToggleDone, done } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label">{label}</span>
        <button type="button" className="btn btn-done" onClick={onToggleDone}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 172 172"
            fill="currentColor"
          >
            <g fill="none">
              <path
                d="M148.11 48.378l-78.36 78.36-5.121 4.898-5.12-4.898L23.89 91.12l10.24-10.24 30.498 30.498 73.24-73.24z"
                fill="currentColor"
              />
            </g>
          </svg>
        </button>
        <button type="button" className="btn btn-trash" onClick={onDeleted}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 172 172"
          >
            <g fill="none">
              <path
                d="M97.398 17.613a5.7 5.7 0 015.777 5.699h34.115a5.7 5.7 0 110 11.398H34.71a5.7 5.7 0 110-11.398h34.115a5.7 5.7 0 015.777-5.7zm39.892 28.494v91.183c0 6.298-5.1 11.398-11.397 11.398H46.107c-6.297 0-11.397-5.1-11.397-11.398V46.107z"
                fill="currentColor"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth=".994"
              />
              <path d="M.516 171.484V.516h170.968v170.968z" />
              <path
                d="M74.602 17.613a5.7 5.7 0 00-5.777 5.699H34.71a5.7 5.7 0 100 11.398h102.58a5.7 5.7 0 100-11.398h-34.115a5.7 5.7 0 00-5.777-5.7zM34.71 46.107v91.183c0 6.298 5.1 11.398 11.397 11.398h79.786c6.297 0 11.397-5.1 11.397-11.398V46.107z"
                fill="currentColor"
                strokeLinejoin="miter"
              />
            </g>
          </svg>
        </button>
      </span>
    );
  }
}
