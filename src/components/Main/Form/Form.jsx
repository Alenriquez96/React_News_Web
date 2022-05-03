import React, { Component } from "react";
import { Navigate } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       redirect:false
    }
  }


  addNew = (e) =>{
    e.preventDefault();

    const lead_paragraph = e.target.title.value;
    const section_name = e.target.section.value;
    const abstract = e.target.abstract.value;


    // let newNewsList = []

    // console.log(multimedia);
    let newNews = {abstract,lead_paragraph,section_name};

    // newNewsList.push(newNews);
    this.props.data(newNews)
    this.setState({redirect:true})
  }



  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to="/list"/>
    }

    return ( 
      <form onSubmit={this.addNew}>
        <label className="form__label" htmlFor="section">Section</label>
        <input className="form__input" type="text" name="section" /><br />
        <label className="form__label" htmlFor="title">Lead paragraph</label>
        <input className="form__input"  type="text" name="title" /><br />
        <label className="form__label" htmlFor="abstract">Abstract</label>
        <input className="form__input"  type="text" name="abstract" /><br />
        {/* <label className="form__label" htmlFor="mult">Picture url</label>
        <input className="form__input"  type="text" name="mult" /><br /> */}
        <button className="btn" type="submit">Enviar</button>
      </form>
    )
  }
}

export default Form;