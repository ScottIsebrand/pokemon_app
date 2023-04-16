const React = require('react');

function Home() {
  return (
    <div>
      <h1>Welcome to the Pokemon App!</h1>

      <a href="/pokemon">Go to Index of Pokemon</a>
      <br />
      <br />
      <a href="/pokemon/new">Create a Pokemon!</a>
      <br />
      <br />
      <a
        href="https://www.fantasynamegenerators.com/pokemon-names.php"
        target="_blank"
      >
        Pokemon Name Generator to Help You!
      </a>
    </div>
  );
}

module.exports = Home;
