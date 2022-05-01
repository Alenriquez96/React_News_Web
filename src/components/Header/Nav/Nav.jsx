import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return(
      <nav className="nav">
        <Link to="/home" className="nav__element">HOME</Link><br/>
        <Link to="/form" className="nav__element">FORM</Link><br/>
        <Link to="/list" className="nav__element">LIST</Link>
      </nav>
    )
  }
}

export default Nav;
