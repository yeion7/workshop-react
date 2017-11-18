// Desde react 16 se debe usar una librería independiente
import PropTypes from 'prop-types';
import React from 'react';
const style = { display: 'flex', flexWrap: 'wrap' };

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

// Este componente permite filtrar peliculas
class MovieContainer extends React.Component {
  render() {
    if (this.props.rate > 1) {
      return <Movie {...this.props} />;
    }
    return null;
  }
}

// Este componente permite seleccionar peliculas
class SelectedMovies extends React.Component {
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
      <div style={style}>
        <MovieContainer
          name="harry potter"
          rate={5}
          year={2001}
          id={1}
          selectMovie={this.selectMovie}
          isSelected={this.state.selectedMovies[1]}
        />
        <MovieContainer
          name="harry potter 2"
          rate={3}
          year={2007}
          id={2}
          selectMovie={this.selectMovie}
          isSelected={this.state.selectedMovies[2]}
        />
        <MovieContainer
          name="harry potter 3"
          rate={4}
          year={2010}
          id={3}
          selectMovie={this.selectMovie}
          isSelected={this.state.selectedMovies[3]}
        />
      </div>
    );
  }
}

export default () => <SelectedMovies />;
