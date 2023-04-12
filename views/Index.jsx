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
        {pokemon.map((pokemon, index) => {
          return (
            <li key={pokemon._id}>
              <a href={`/pokemon/${index}`}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
