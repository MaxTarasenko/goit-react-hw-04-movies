import React, { Component } from 'react';
import * as api from '../../movies-api';

export default class MoviesReviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    api
      .getMovieReviews(this.props.match.params.movieId)
      .then(reviews => {
        this.setState({
          reviews: [...reviews],
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}

        <ul>
          {reviews.length !== 0 &&
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
