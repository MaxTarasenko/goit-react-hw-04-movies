import React, { Component } from 'react';
import * as api from '../../movies-api';

export default class MovieCast extends Component {
  state = { cast: [] };

  componentDidMount() {
    api
      .getMovieCast(this.props.match.params.movieId)
      .then(({ cast }) => {
        this.setState({
          cast: [...cast],
        });
        console.log(cast);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        <ul>
          {cast &&
            cast.map(({ credit_id, profile_path, character, name }) => (
              <li key={credit_id}>
                {profile_path && (
                  <img src={api.imgPath + profile_path} alt={name} />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
