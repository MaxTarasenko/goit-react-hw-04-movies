import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import * as api from '../movies-api';
import { Link } from 'react-router-dom';

export default class SearchMovie extends Component {
  state = {
    movies: [],
    pageNumber: '',
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get('query');
    if (!query) {
      return;
    }

    api
      .searchMovies(query)
      .then(movies => {
        this.setState({
          movies: movies,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );

    if (prevQuery === nextQuery) {
      return;
    }

    api
      .searchMovies(nextQuery)
      .then(movies => {
        this.setState({
          movies: movies,
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <div>
        <Searchbar onSearch={this.setSearchQuery} />

        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={{ pathname: `/movies/${id}` }}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
