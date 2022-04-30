import React, { Component } from "react";
import Nav from "./Nav";
import {userContext} from "../../context/userContext"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Nav/>
          <div className="user">
            <userContext.Consumer>
              {({user}) =>
                user?
                <>
                  <p>Hola, {user}</p>
                </>:""
              }
            </userContext.Consumer>
          </div>
      </header>
    )
  }
}

export default Header;
