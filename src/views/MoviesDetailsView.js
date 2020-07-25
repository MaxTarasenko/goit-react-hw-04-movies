import React, { Component, lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import * as api from '../movies-api';

const MoviesCast = lazy(() =>
  import(
    '../components/MovieCast/MovieCast' /* webpackChunkName: "movies-cast" */
  ),
);

const MoviesReviews = lazy(() =>
  import(
    '../components/MoviesReviews/MoviesReviews' /* webpackChunkName: "movies-reviews" */
  ),
);

export default class MoviesDetailsView extends Component {
  state = {
    id: null,
    poster_path: null,
    title: null,
    overview: null,
    genres: null,
    release_date: null,
    vote_average: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await api
      .getMovieDetales(movieId)
      .catch(error => console.log(error));
    this.setState({ ...response });
  }

  handleGoBack = () => this.props.history.goBack();

  render() {
    const {
      id,
      poster_path,
      title,
      overview,
      genres,
      release_date,
      vote_average,
    } = this.state;

    return (
      <div>
        <button
          className="button-back-home"
          type="button"
          onClick={this.handleGoBack}
        >
          <span>&#8592;</span>Go back
        </button>
        <div className="movie-box">
          {id && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt=""
              />

              <div className="movie-description">
                <h1>
                  {title} ({release_date.slice(0, 4)})
                </h1>
                <p>User Score: {vote_average * 10}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(({ name }) => name + ' ')}</p>
              </div>
            </>
          )}
        </div>

        <div className="additional-information">
          <span>Additional information</span>
          <ul>
            <li>
              <Link to={{ pathname: `/movies/${id}/cast` }}>Cast</Link>
            </li>
            <li>
              <Link to={{ pathname: `/movies/${id}/reviews` }}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense>
          <Switch>
            <Route path="/movies/:movieId/cast" component={MoviesCast} />
            <Route path="/movies/:movieId/reviews" component={MoviesReviews} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
