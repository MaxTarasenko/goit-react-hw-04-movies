import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => this.setState({ search: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          value={this.state.search}
          name="search"
          onChange={this.handleChange}
        />

        <button type="submit" className="search-form__button">
          <span>Search</span>
        </button>
      </form>
    );
  }
}
