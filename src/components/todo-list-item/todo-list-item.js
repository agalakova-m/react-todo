import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      done,
      important,
    } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-important"
          onClick={onToggleImportant}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 50 50"
            fill="currentColor"
          >
            <path d="M23 0c-.55 0-1 .45-1 1v38a1 1 0 001 1h4c.555 0 1-.445 1-1V1a1 1 0 00-1-1zm0 44a1 1 0 00-1 1v4a1 1 0 001 1h4c.555 0 1-.445 1-1v-4c0-.555-.445-1-1-1z" />
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
            <g
              fill="none"
              stroke-linejoin="none"
              stroke-miterlimit="10"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path
                d="M97.398 17.613a5.7 5.7 0 015.777 5.699h34.115a5.7 5.7 0 110 11.398H34.71a5.7 5.7 0 110-11.398h34.115a5.7 5.7 0 015.777-5.7zm39.892 28.494v91.183c0 6.298-5.1 11.398-11.397 11.398H46.107c-6.297 0-11.397-5.1-11.397-11.398V46.107z"
                fill="#666"
                stroke="#000"
                stroke-linejoin="round"
                stroke-width=".994"
              />
              <path d="M.516 171.484V.516h170.968v170.968z" />
              <path
                d="M74.602 17.613a5.7 5.7 0 00-5.777 5.699H34.71a5.7 5.7 0 100 11.398h102.58a5.7 5.7 0 100-11.398h-34.115a5.7 5.7 0 00-5.777-5.7zM34.71 46.107v91.183c0 6.298 5.1 11.398 11.397 11.398h79.786c6.297 0 11.397-5.1 11.397-11.398V46.107z"
                fill="#666"
                stroke-linejoin="miter"
              />
            </g>
          </svg>
        </button>
      </span>
    );
  }
}
