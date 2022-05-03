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
              {({user, logout}) =>
                user?
                <>
                  <p>Hola, {user}</p>
                  <button className="btnLogout" onClick={logout}>Logout</button>
                </>:""
              }
            </userContext.Consumer>
          </div>
      </header>
    )
  }
}

export default Header;
