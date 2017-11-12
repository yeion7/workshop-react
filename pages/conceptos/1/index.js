// Puedes declarar un componente como una función,que recibe *props*, los props son un objeto con los valores que se le pasan al componente.

const Component = ({ name, rate, year }) => (
  <div>
    <h2>{name.toLocaleUpperCase()}</h2>
    <div>
      <span>Rate: {rate}</span>
      <span>Año: {year}</span>
    </div>
  </div>
);

export default () => (
  <div>
    <Component name="harry potter" rate={2} year={2001} />
    <Component name="harry potter 2" rate={3} year={2007} />
    <Component name="harry potter 3" rate={4} year={2010} />
  </div>
);
