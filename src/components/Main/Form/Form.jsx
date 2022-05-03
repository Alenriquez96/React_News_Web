import React, { Component } from "react";

class Form extends Component {

  addNew = (e) =>{
    e.preventDefault();

    const lead_paragraph = e.target.title.value;
    const section_name = e.target.section.value;
    const abstract = e.target.abstract.value;

    // let newNewsList = []
    let newNews = {abstract,lead_paragraph,section_name};

    // newNewsList.push(newNews);
    this.props.data(newNews)
  }

  
  routeChange = (e) =>{
    e.preventDefault();
    window.location.href = "http://localhost:3000/list"
  }


  render() {
    return ( 
      <form onSubmit={this.addNew}>
        <label className="form__label" htmlFor="section">Section</label>
        <input className="form__input" type="text" name="section" /><br />
        <label className="form__label" htmlFor="title">Lead paragraph</label>
        <input className="form__input"  type="text" name="title" /><br />
        <label className="form__label" htmlFor="abstract">Abstract</label>
        <input className="form__input"  type="text" name="abstract" /><br />
        {/* <input type="submit" value="Submit" onClick={this.routeChage}/> */}
        <button className="btn" type="submit">Enviar</button>
      </form>
    )
  }
}

export default Form;