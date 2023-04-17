const React = require('react');

function NotFound() {
  return (
    <div>
      <a href="/">Home</a>
      <br />
      <a href="/logs">Go to Index of All the Pokemon</a>
      <br />
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

module.exports = NotFound;
