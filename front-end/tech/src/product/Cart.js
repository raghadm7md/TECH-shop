import React, { Component } from "react";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
// create new component and move the code from here to the new one, then call the new component here

  // add function for buy button (add to order and edit the quantity in DB )
  // add function that sum the prices and give the total

  render() {
    console.log(this.props.currentCart);
    const CartElemrnt = this.props.currentCart.map((element, index) => {

     const IncQuatity = () => {
        let num = this.state.count;
        num++;
        this.setState({ count: num });
        console.log(num);
      };
      const decQuatity = () => {
        let num=this.state.count
        if (num>1){
          num--;
          this.setState({ count: num });
          console.log(num);
        }
      };
      return (
        <div className="row">
          <div class="col-xs-6 col-md-4">
            <h3>{element.name}</h3>
          </div>
          <div class="col-xs-6 col-md-4">
            <h3>{element.price}</h3>
          </div>
          <div class="col-xs-6 col-md-4">
            <Button onClick={IncQuatity}>+</Button>
            <h3>{this.state.count}</h3>
            <Button onClick={decQuatity}>-</Button>
          </div>
        </div>
      );
    });
    return (
      <div>
        {CartElemrnt}
        <Button>Buy</Button>
      </div>
    );
  }
}
