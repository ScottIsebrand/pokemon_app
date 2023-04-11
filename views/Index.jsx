const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#345678',
};

function Index(props) {
  const { pokemon } = props;

  return (
    <div style={myStyle}>
      <h1>See All The Pokemon!</h1>
    </div>
  );
}
module.exports = Index;
