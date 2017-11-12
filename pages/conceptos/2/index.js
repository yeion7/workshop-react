// Desde react 16 se debe usar una librería independiente
import PropTypes from 'prop-types';

const Component = ({ name, rate, year }) => (
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

// Defino los tipos de datos que va a aceptar el componente
Component.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};

// Los estilos también pueden ser un objeto
const style = { display: 'flex', flexWrap: 'wrap' };

// exporto el componente de la página
export default () => (
  <div style={style}>
    <Component name="harry potter" rate={2} year={2001} />
    <Component name="harry potter 2" rate={3} year={2007} />
    <Component name="harry potter 3" rate={4} year={2010} />
  </div>
);
