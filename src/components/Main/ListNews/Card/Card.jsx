import React, { Component } from "react";

class Card extends Component {


  render() {
    const news = this.props.news
    return(
      <div>
        <h4>{news.section_name}</h4>
        <h3>{news.abstract}</h3>
        {/* {
          news.multimedia[0].url?<img src={img}/>:""
        } */}
        <p>{news.lead_paragraph}</p>
        <button className="btn" onClick={this.props.remove}>Remove</button>
      </div>
    )
  }
}

export default Card;
