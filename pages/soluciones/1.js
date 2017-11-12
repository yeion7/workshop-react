const Component = ({ name, rate, year, trailer, imagen }) => (
  <div>
    <a href={`https://www.youtube.com/watch?v=${trailer}`}>
      <img src={imagen} alt={`imagen de ${name}`} width="320px" />
    </a>
    <h2>{name.toLocaleUpperCase()}</h2>
    <div>
      <span>Rate: {rate}</span>
      <span>Año: {year}</span>
    </div>
  </div>
);

export default () => (
  <div>
    <Component
      name="harry potter"
      rate={2}
      year={2001}
      trailer="uGt_KbjQa_g"
      imagen="https://metrouk2.files.wordpress.com/2017/11/harry-potter-wizarding-world-weekly.jpg"
    />
  </div>
);
