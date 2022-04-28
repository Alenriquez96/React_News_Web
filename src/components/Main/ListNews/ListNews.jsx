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
  }

  render() {
    return (
      <section>
        {
          this.state.ListNews.map((news,i) => 
            {if (i<5) {
           return <Card key={i} news={news}/>
          }}
          )
        }
        <div id="ownNews">
        </div>
      </section>

    )
  }
}


export default ListNews;
