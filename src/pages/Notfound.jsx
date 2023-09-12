import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Notfound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>Notfound</h1>
        <Link className="found" to="/debts">Click Me</Link>
      </div>
    );
  }
}

export default Notfound;
