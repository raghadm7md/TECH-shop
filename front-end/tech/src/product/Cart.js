import React, { Component } from "react";
export default class Cart extends Component {
  
  render() {
    console.log(this.props.currentCart);
    const CartElemrnt = this.props.currentCart.map((elem, index) => {
      return (
        <div className="row">
          <div class="col-xs-6 col-md-4"><h3>{elem.name}</h3></div>
          <div class="col-xs-6 col-md-4"><h3>{elem.price}</h3></div>
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
