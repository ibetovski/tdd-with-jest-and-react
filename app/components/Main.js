var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main">{this.props.text}</div>
      );
  }
});

// React.render(<Main />, document.getElementById('my-app'));
module.exports = Main;