import React, { Component } from "react";
import { userContext } from "../../../context/userContext";


class Home extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props)
  
    this.state = {
       user:""
    }
  }

  login = (e) =>{
    e.preventDefault();

    const name = e.target.name.value;
    this.setState({user:name});

    const loginUser = this.context.login;

    loginUser(name)
  }

  render() {
    return (
      <form onSubmit={this.login} className="home">
        <label className="form__label" htmlFor="name">Introduce tu nombre:</label>
        <input className="form__input"  type="text" name="name"/>
        <input className="btn" type="submit" value="Login"/>
      </form>
    )
  }
}

export default Home;
