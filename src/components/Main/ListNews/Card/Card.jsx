import React, { Component } from "react";

class Card extends Component {


  render() {
    const abstract = this.props.children
    console.log(abstract);
    return(
      <div>
        <p>{abstract}</p>
      </div>
    )
  }
}

export default Card;
