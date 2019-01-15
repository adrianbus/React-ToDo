var React = require("react");
var createReactClass = require("create-react-class");

import { Link } from "react-router-dom";

var about = createReactClass({
  render: function () {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>App made by Adrian Bus</h1>
      </div>
    )
  }
});

module.exports = about;
