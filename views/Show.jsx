const React = require('react');

function Show(props) {
  const { pokemon } = props;

  return (
    <div>
      <h1>Gotta Catch 'Em All!</h1>
      <h2>{pokemon.name}</h2>
      {/* <img src={pokemon.img + '.jpg'} /> */}
    </div>
  );
}
module.exports = Show;
