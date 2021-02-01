import React, { Component } from "react";
export default class Cart extends Component {
  
  render() {
    console.log(this.props.currentCart);
    const CartElemrnt = this.props.currentCart.map((elem, index) => {
      return (
        <div class="row">
          <div class="col-xs-6 col-md-4">{elem.name}</div>
          <div class="col-xs-6 col-md-4">{elem.price}</div>
        </div>
      );
    });
    return (
      <div>
        {CartElemrnt}
      </div>
    );
  }
}
