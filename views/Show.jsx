const React = require('react');

const myStyle = {
  color: '#000123',
  backgroundColor: '#ffffe0',
};

function Show(props) {
  const { pokemon } = props;

  return (
    <div style={myStyle}>
      <h1>Gotta Catch 'Em All!</h1>
      <h2>{pokemon.name}</h2>
      <img />
    </div>
  );
}
module.exports = Show;
