import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import React from 'react';
import withData from '../../../lib/withData';

import { GET_ALL_MOVIES } from '../../../querys';

const Movie = ({ name, rate, year, id }) => (
  <div className="container">
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
      <Movie key={movie.id} {...movie} />
    ));
  }
};

export default compose(withData, graphql(GET_ALL_MOVIES))(MoviesContainer);
