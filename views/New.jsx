const React = require('react');

function New() {
  return (
    <div>
      <a href="/">Home</a>
      <br />
      <a href="/pokemon">Go to Index of Pokemon</a>

      <br />
      <h1>New Pokemon</h1>
      {/*Note: action is the route; it's telling the FORM where to go  */}

      <form action="/pokemon" method="POST">
        Name of the Pokemon You're Creating:
        <br />
        <input type="text" name="name" />
        <br />
        <input type="submit" />
      </form>
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

module.exports = New;
