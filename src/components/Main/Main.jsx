import React, { Component } from "react";
import Home from "./Home"
import Form from "./Form"
import ListNews from "./ListNews"
import { Route, Routes } from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       newNews:{}
    }
  }

  createNew(New)
  {
    this.setState({newNews:New})
  }

  render() {
    return (
      <main>
        <h1>News React</h1>
        <Routes>
          <Route element={<Home/> }path="/home"></Route>
          <Route element={<Form data={this.createNew.bind(this)}/>}path="/form"></Route>
          <Route element={<ListNews data={this.state}/>}path="/list"></Route>
        </Routes>
      </main>
    )
  }
}

export default Main;
