import React, { Component } from "react";
import Home from "./Home"
import Form from "./Form"
import ListNews from "./ListNews"
import { Route, Routes } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <main>
        <h1>News React</h1>
        <Routes>
          <Route element={<Home></Home> }path="/home"></Route>
          <Route element={<Form></Form>}path="/form"></Route>
          <Route element={<ListNews></ListNews>}path="/list"></Route>
        </Routes>
      </main>
    )
  }
}

export default Main;
