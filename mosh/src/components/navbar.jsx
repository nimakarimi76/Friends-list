import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <span className="badge bg-secondary"> {this.props.totalItems}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
