// Puedes declarar un componente como una función,que recibe *props*, los props son un objeto con los valores que se le pasan al componente.

const Component = ({ name, rate, year }) => (
  <div className="container">
    <h2 className="title">{name.toLocaleUpperCase()}</h2>
    <div className="info">
      <span>Rate: {rate}</span>
      <span>Año: {year}</span>
    </div>
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

// Para utilizar el componente debes exportarlo
export default Component;
