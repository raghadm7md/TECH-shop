import React, { Component } from "react";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";

import CartElements from "./CartElements";

import { DecQuantitiy } from "../api";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      id: "",
      totalPrice: 0,
      priceProduct: 0,
      prodInfo: this.props.currentCart,
      orderNew: this.props.currentCart,
    };
  }

  // create new component and move the code from here to the new one, then call the new component here

  // add function for buy button (add to order and edit the quantity in DB )
  // add function that sum the prices and give the total
  getElement = (count) => {


    console.log("count >>", this.state.count);
    console.log("prodInfo >>", this.state.prodInfo);

    console.log("Total Price: ", this.state.totalPrice);

    console.log("order info", this.props.orderInfo);
  };

  removeFromCart = (id) => {
    
    const newProducts = this.state.orderNew.filter((orderNew) => {
      return orderNew.id !== id;
    });

    this.setState({ orderNew: newProducts });
  };

  BuyProductd = () => {
    let newQ = {
      quantitiy: this.state.count,
    };
    console.log(newQ.quantitiy);


    this.props.orderInfo(this.state.orderNew);
  };



  render() {


    console.log(this.state.totalPrice);

    const CartElemrnt = this.state.orderNew.map((element, index) => {
      console.log(element.name);
      return (
        <CartElements
          id={element.id}
          name={element.name}
          price={element.price}
          quantity={element.quantitiy}
          getElement={this.getElement}
          remove={this.removeFromCart}
        />
      );
    });
    return (
      <div>
        {CartElemrnt}

        <div class="col-xs-6 col-md-4">
        </div>
        <Button onClick={this.BuyProductd}>Buy</Button>

      </div>
    );
  }
}
