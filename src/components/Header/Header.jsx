import React, { Component } from "react";
import Nav from "./Nav";
import {userContext} from "../../context/userContext"

class Header extends Component {
  render() {
    return (
      <header>
        <Nav/>
        <userContext.Consumer>
          {({user}) =>
            user?
            <>
              <p>Hola {user}</p>
            </>:""
          }
        </userContext.Consumer>
      </header>
    )
  }
}

export default Header;
