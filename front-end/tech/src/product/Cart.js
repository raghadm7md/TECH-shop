import React, { Component } from "react";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";
import CartElements from "./CartElements"
import { DecQuantitiy } from "../api";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      id:""
    };
  }

  
// create new component and move the code from here to the new one, then call the new component here


  // add function for buy button (add to order and edit the quantity in DB )
  // add function that sum the prices and give the total
  getCount=(count,id)=>{
    this.setState({count:count})
    this.setState({id:id})

    console.log(this.state.count)

  }
  
  BuyProductd=()=>{
    let newQ={
        quantitiy: this.state.count,
    }
    console.log(newQ.quantitiy)
    DecQuantitiy(this.state.id, newQ)
        .then((response) => {
          console.log("DecQuantitiy: ", response.data);
        })
        .catch((error) => {
          console.log("API ERROR:", error);
        });
}

  render() {
    console.log(this.props.currentCart)
    const CartElemrnt = this.props.currentCart.map((element, index) => {
      console.log(element.name)
      return(
        <CartElements
        id={element.id}
        name={element.name}
        price={element.price}
        quantity={element.quantitiy}
        getCount={this.getCount}
        gitId={this.BuyProductd}
        />
      )
    })
    return (
      <div>
      {CartElemrnt}
      <Button onClick={this.BuyProductd}>Buy</Button>
      </div>
    );
  }
}
