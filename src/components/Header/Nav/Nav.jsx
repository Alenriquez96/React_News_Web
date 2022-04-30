import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return(
      <nav className="nav">
        <Link to="/home" className="nav__element">Home</Link><br/>
        <Link to="/form" className="nav__element">Form</Link><br/>
        <Link to="/list" className="nav__element">List</Link>
      </nav>
    )
  }
}

export default Nav;
