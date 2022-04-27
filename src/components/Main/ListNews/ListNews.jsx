import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
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
    const data = await resp.data;
    this.setState({
        ListNews: data.response.docs
    })
    console.log('componentDidMount');
}

  render() {
    return (
      <section>
        {
          this.state.ListNews.map((news,i) => 
          //  { for (let j = 0; j < 5; j++) {
          //     <Card key={i}>{news.abstract}</Card>
          //   }}
            <Card key={i}>{news}</Card>
          )
        }
      </section>

    )
  }
}

export default ListNews;
