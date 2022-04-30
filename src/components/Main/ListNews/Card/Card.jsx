import React, { Component } from "react";

class Card extends Component {


  render() {
    const news = this.props.news
    return(
      <div>
        <h4>{news.section_name}</h4>
        <h3>{news.abstract}</h3>
        <p>{news.lead_paragraph}</p>
        <button onClick={this.props.remove}>Remove New</button>
      </div>
    )
  }
}

export default Card;
