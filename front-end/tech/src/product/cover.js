import React, { Component } from "react";
import { getAllProducts, getAllUsers } from "../api";

export default class cover extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    // console.log(this.state.cover.name)
    // console.log(this.state.cover[1]);
    // console.log(this.props.cover)

    const coverProdcut = this.props.covers.map((elem, index) => {
    //   console.log(this.state.cover[index]);
      if (this.props.covers[index].type === "cover") {
          console.log(this.props.covers[index].type)
        return (
          <h1>
            {" "}
            name={elem.name} price={elem.price}{" "} 
          </h1>
        );
      }
    });

    return <div>      {coverProdcut}
    </div> 
  }
}
