import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
// require('dotenv').config();

class ListNews extends Component {
    constructor(props) {
      super(props);
      this.state={
        ListNews: []
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

  render() {
    const newNews = this.props.data.newNews
    const allNews = [...this.state.ListNews,newNews]
    console.log(allNews);
    return (
      <section>
        {
          allNews.map((news)=> <Card news={news} key={uuidv4()} />)
        }
        {/* <Card key={uuidv4()} news={allNews}/> */}
      </section>

    )
  }
}


export default ListNews;
