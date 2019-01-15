var React = require("react");
var createReactClass = require("create-react-class");
require("./css/addItem.css");

var addItem = createReactClass({
  render: function() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Add todo!" />
      </form>
    );
  },
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
});

module.exports = addItem;
