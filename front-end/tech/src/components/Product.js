import React, { Component } from "react";


export default class Product extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Title & Content & Author */}
          <h2>{this.props.name}</h2>
          <h4>{this.props.price}</h4>
          {/* <p>{this.props.content}</p> */}
          
        </div>
      </div>
    );
  }
}
