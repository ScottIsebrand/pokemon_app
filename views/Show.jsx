const React = require('react');

function Show(props) {
  const { pokemon } = props;

  return (
    <div>
      <a href="/">Home</a>
      <br />
      <a href="/logs">Go to Index of All the Pokemon</a>
      <br />
      <h1>Gotta Catch 'Em All!</h1>
      <h2>{pokemon.name}</h2>
      {/* <img src={pokemon.img + '.jpg'} /> */}
      {/* <img src={`${pokemon.img}.jpg`} */}
    </div>
  );
}
module.exports = Show;
