const React = require('react');

// The function below could be structured as an arrow function, as on the line before
// const Index = ({pokemon}) => {}

function Index(props) {
  const { pokemon } = props;

  return (
    <div>
      <a href="/">Home</a>
      <br />
      <a href="/pokemon/new">Create a Pokemon</a>
      <h1>See All The Pokemon!</h1>
      <ul>
        {pokemon.map((pokemon, index) => {
          return (
            <li key={pokemon._id}>
              <a href={`/pokemon/${pokemon._id}`}>
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
