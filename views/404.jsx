const React = require('react');

function NotFound() {
  return (
    <div>
      <a href="/">Home</a>
      <br />
      <a href="/pokemon">Go to Index of Pokemon</a>
      <br />
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

module.exports = NotFound;
