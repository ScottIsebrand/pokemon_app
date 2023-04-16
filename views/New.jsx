const React = require('react');

function New() {
  return (
    <div>
      <h1>New Pokemon</h1>
      {/*Note: action is the route; it's telling the FORM where to go  */}
      <form action="/pokemon" method="POST">
        Name of the Pokemon You're Creating:
        <br />
        <input type="text" name="name" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

module.exports = New;
