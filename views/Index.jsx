const React = require('react');

const myStyle = {
  color: '#000123',
  backgroundColor: '#ffffe0',
};

function Index(props) {
  const { pokemon } = props;

  return (
    <div style={myStyle}>
      <h1>See All The Pokemon!</h1>
      <ul>
        {pokemon.map((apokemon, index) => {
          return (
            <li key={apokemon._id}>
              <a href={`/apokemon.name/${apokemon._id}`}>
                {apokemon.name.charAt(0).toUpperCase() + apokemon.name.slice(1)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
