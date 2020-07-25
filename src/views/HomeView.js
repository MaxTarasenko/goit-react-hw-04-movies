import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../movies-api';

export default class HomeView extends Component {
  state = {
    trending: [],
  };

  async componentDidMount() {
    api
      .getTrending()
      .then(movies =>
        this.setState({
          trending: movies,
        }),
      )
      .catch(error => console.log(error));
  }

  render() {
    const { trending } = this.state;

    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {trending.map(({ id, title }) => (
            <li key={id}>
              <Link to={{ pathname: `/movies/${id}` }}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
