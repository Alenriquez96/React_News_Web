import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return(
      <nav>
        <Link to="/home" >Home</Link><br/>
        <Link to="/form" >Form</Link><br/>
        <Link to="/list" >List</Link>
      </nav>
    )
  }
}

export default Nav;
