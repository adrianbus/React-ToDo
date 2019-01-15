var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require("create-react-class");
require("./css/index.css");
import { Router, Route, browserHistory, Link } from "react-router";

var TodoItem = require("./todoItem");
var AddItem = require("./addItem");
var About = require("./about");

var App = createReactClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={TodoComponent} />
        <Route path={"/about"} component={About} />
      </Router>
    );
  }
});

var TodoComponent = createReactClass({
  getInitialState: function() {
    return {
      todos: ["wash up", "eat breakfest", "buy flowers"]
    };
  },
  render: function() {
    var todos = this.state.todos;
    todos = todos.map(
      function(item, index) {
        return <TodoItem item={item} key={index} onDelete={this.onDelete} />;
      }.bind(this)
    );
    return (
      <div id="todo-list">
        <p>The busiest people have the most leisure..</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  },

  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  onAdd: function(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }
});

ReactDOM.render(<App />, document.getElementById("todo-wrapper"));
