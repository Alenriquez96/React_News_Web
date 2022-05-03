import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
// require('dotenv').config();

class ListNews extends Component {
    constructor(props) {
      super(props);
      this.state={
        ListNews: [],
      }
  }

  async componentDidMount(){
    // const resp = await axios(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.API_KEY}`);
    const resp = await axios('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=dPEl8ulmC9qyoMMFIpIr0uGBxezp4DMi');
    const data = await resp.data.response.docs;
    const dataSliced = data.slice(0,5)
    this.setState({
        ListNews: dataSliced
    })
  }

  removeNew = (i) =>{
    const allNews = [...this.state.ListNews, ...this.props.data.news]
    console.log(allNews);
    const remainingNews = allNews.filter((news,j)=>i!==j)
    this.setState({ListNews:remainingNews})
  }


  render() {
    const newNews = this.props.data.news
    // console.log(newNews);
    const allNews = [...this.state.ListNews,...newNews]
    console.log(allNews);
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
