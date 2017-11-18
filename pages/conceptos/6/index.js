import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import React from 'react';
import withData from '../../../lib/withData';

import { GET_ALL_MOVIES } from '../../../querys';
import { UPDATE_DATE_MOVIE } from '../../../mutations';

const Movie = ({ name, rate, year, id, setRate }) => (
  <div className="container">
    <h2 className="title">{name.toLocaleUpperCase()}</h2>
    <div className="info">
      <span>
        Rate:
        <select onChange={e => setRate(e.target.value)} defaultValue={rate}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </span>
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
        setRate={rate => props.setRate(movie.id, rate)}
      />
    ));
  }
};

export default compose(
  withData,
  graphql(GET_ALL_MOVIES),
  graphql(UPDATE_DATE_MOVIE, {
    props: ({ mutate }) => ({
      setRate: (id, rate) => mutate({ variables: { id, rate: Number(rate) } })
    })
  })
)(MoviesContainer);
