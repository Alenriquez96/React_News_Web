import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

class ListNews extends Component {
    constructor(props) {
      super(props);
      this.state={
        ListNews: [],
      }
  }

  async componentDidMount(){
    const resp = await axios(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.REACT_APP_API_KEY}`);
    const data = await resp.data.response.docs;
    const dataSliced = data.slice(0,5)
    const allNews = [...dataSliced, ...this.props.data.news]
    this.setState({
        ListNews: allNews
    })

  }

  removeNew = (i) =>{
    const remainingNews = this.state.ListNews.filter((news,j)=>i!==j)
    console.log(remainingNews);
    this.setState({ListNews:remainingNews})
  }


  render() {
    const allNews = this.state.ListNews
    return (
      <section className="list">
        {
          allNews.map((news,i)=> <Card news={news} remove={()=>this.removeNew(i)} key={uuidv4()} />)
        }
      </section>

    )
  }
}


export default ListNews;
