import React, { Component } from "react";

const Navbar = ({ totalItems }) => { //! { totalItems } = props.totalItems
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <span className="badge bg-secondary"> {totalItems}</span>
      </div>
    </nav>
  );
};

export default Navbar;
