import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    searchValue: '',
  };

  onSearchChange = e => {
    const value = e.target.value;
    this.setState({ searchValue: value });
    this.props.onSearchChange(value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={this.state.searchValue}
      />
    );
  }
}
