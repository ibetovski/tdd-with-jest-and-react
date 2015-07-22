var React = require('react');

var List = React.createClass({
  getInitialState: function() {
    return {
      items: this.props.data.getItems()
    };
  },
  // componentDidMount: function() {

  // },
  render: function() {
    var items = this.state.items.map(function(item) {
      return (
          <li key={item.id}>{item.text}</li>
        )
    });
    return (
      <div className="main">{items}</div>
      );
  }
});

module.exports = List;