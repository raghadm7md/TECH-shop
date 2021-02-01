import React, { Component } from "react";
import ProdCard from "./ProdCard";
export default class Cart extends Component {
  render() {
    console.log(this.props.currentCart);
    const CartElemrnt = this.props.currentCart.map((elem, index) => {
      return (
        <ul>
          <li>
            name : {elem.ProdName} price : {elem.ProdPrice}
          </li>
        </ul>
      );
    });
    return <div>{CartElemrnt}</div>;
  }
}
