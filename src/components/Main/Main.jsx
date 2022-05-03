import React, { Component } from "react";
import Home from "./Home"
import Form from "./Form"
import ListNews from "./ListNews"
import { Route, Routes } from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       news:[]
    }
  }

  createNew(New)
  {
    // this.setState({news:New})//También se puede hacer así, y después en props poner el .bind.
    this.setState({news: [...this.state.news, New]})
  }

  render() {
    return (
      <main>
        <h1>News React</h1>
        <Routes>
          <Route element={<Home/> }path="/"></Route>
          {/* <Route element={<Form data={this.createNew.bind(this)}/>}path="/form"></Route> */ /*Esta sería otra forma de pasarle la función callback al hijo form*/}
          <Route element={<Form data={(New)=>this.createNew(New)}/>} path="/form"></Route>
          <Route element={<ListNews data={this.state}/>}path="/list"></Route>
        </Routes>
      </main>
    )
  }
}

export default Main;
