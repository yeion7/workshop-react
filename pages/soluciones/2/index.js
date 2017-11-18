import PropTypes from 'prop-types';

const Movie = ({ name, rate, year, image }) => (
  <div className="container">
    <img src={image} alt={`imagen de ${name}`} className="imagen" />
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

      .imagen {
        width: 320px;
        height: 320px;
      }

      .title {
        font-family: sans-serif;
      }
      .info {
        padding: 10px;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

// Defino los tipos de datos que va a aceptar el componente
Movie.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

const style = { display: 'flex', flexWrap: 'wrap' };

export default () => (
  <div style={style}>
    <Movie
      name="harry potter"
      rate={2}
      year={2001}
      image="https://upload.wikimedia.org/wikipedia/sh/4/44/HarryPotter5poster.jpg"
    />
    <Movie
      name="harry potter 2"
      rate={2}
      year={2001}
      image="https://upload.wikimedia.org/wikipedia/sh/4/44/HarryPotter5poster.jpg"
    />
    <Movie
      name="harry potter 3"
      rate={2}
      year={2001}
      image="https://upload.wikimedia.org/wikipedia/sh/4/44/HarryPotter5poster.jpg"
    />
  </div>
);
