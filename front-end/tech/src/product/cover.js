import React, { Component } from "react";
import { getAllProducts, getAllUsers } from "../api";

export default class cover extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // console.log(this.state.cover.name)
    // console.log(this.state.cover[1]);
    // console.log(this.props.cover)

    const coverProdcut = this.props.covers.map((elem, index) => {
      //   console.log(this.state.cover[index]);
      if (this.props.covers[index].type === "cover") {
        console.log(this.props.covers[index].type);
        return (
          <div>
            <h2>name: {elem.name}</h2>
             <h4>price: {elem.price}</h4>
          </div>
        );
      }
    });

    return <div> {coverProdcut}</div>;
  }
}
