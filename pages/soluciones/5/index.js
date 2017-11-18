import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import React from 'react';
import withData from '../../../lib/withData';

import { GET_ALL_MOVIES } from '../../../querys';

const withSelectMovies = Wrap => {
  return class SelectedMovies extends React.Component {
    state = {
      selectedMovies: {}
    };

    selectMovie = id => {
      this.setState(state => ({
        ...state,
        selectedMovies: {
          ...state.selectedMovies,
          [id]: !state.selectedMovies[id]
        }
      }));
    };

    render() {
      return (
        <Wrap
          {...this.props}
          selectMovie={this.selectMovie}
          selectedMovies={this.state.selectedMovies}
        />
      );
    }
  };
};

const Movie = ({ name, rate, year, isSelected, selectMovie, id }) => (
  <div
    onClick={() => selectMovie(id)}
    className="container"
    style={{
      border: `1px solid ${isSelected ? 'red' : 'black'}`,
      cursor: 'pointer'
    }}
  >
    <h2 className="title">{name.toLocaleUpperCase()}</h2>
    <div className="info">
      <span>Rate: {rate}</span>
      <span>Año: {year}</span>
    </div>
    {/* CSSinJS */}
    <style jsx>{`
      .container {
        border: 1px solid #ccc;
        border-radius: 4px;
        max-width: 320px;
        margin: 5px;
        padding: 10px;
        text-align: center;
      }

      .info {
        padding: 10px;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

const MoviesContainer = props => {
  if (props.data.loading) {
    return <div>loading...</div>;
  } else {
    return props.data.allMovies.map(movie => (
      <Movie
        key={movie.id}
        {...movie}
        selectMovie={props.selectMovie}
        selectedMovies={props.selectedMovies}
        isSelected={props.selectedMovies[movie.id]}
      />
    ));
  }
};

export default compose(withData, withSelectMovies, graphql(GET_ALL_MOVIES))(
  MoviesContainer
);
