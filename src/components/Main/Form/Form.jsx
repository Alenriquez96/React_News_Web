import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       lastNew:{}
    }
  }

  addNew = (e) =>{
    e.preventDefault();

    const title = e.target.title.value;
    const section = e.target.section.value;
    const abstract = e.target.abstract.value;

    const newNews = {title,section,abstract};

    this.setState({lastNew:newNews});

  }

  
  routeChange = (e) =>{
    e.preventDefault();
    window.location.href = "http://localhost:3000/list"
  }


  render() {
    return ( 
      <form onSubmit={this.addNew}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" /><br />
        <label htmlFor="section">Section</label>
        <input type="text" name="section" /><br />
        <label htmlFor="abstract">Abstract</label>
        <input type="text" name="abstract" /><br />
        <input type="submit" value="Submit" onClick={this.routeChage}/>
      </form>
    )
  }
}

export default Form;
