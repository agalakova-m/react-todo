import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  };
  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };
  render() {
    const { onItemAdded } = this.props;

    return (
      <form className="item-add-form d-flex">
        {this.state.label}
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
        />
        <button
          className="btn btn-outline-secondary"
          onClick={() => onItemAdded('Hello World')}
        >
          Add item
        </button>
      </form>
    );
  }
}
