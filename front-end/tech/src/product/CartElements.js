import React, { Component } from "react";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";
import { CartQuntity } from "../api";

export default class CartElements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      element: {
        id: this.props.id,
        name: this.props.name,
        price: this.props.price,
        quantity: this.props.quantity,
      },
    };
  }

  IncQuatity = () => {
    console.log(this.props.id);
    let num = this.state.count;
    num++;
    this.setState({ count: num });

    const newCount = {
      count: num,
    };

    CartQuntity(this.props.id, newCount)
      .then((response) => {
        console.log("count: ", response.data.count);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });

    this.props.getElement(num)
  };


  decQuatity = () => {
    let num = this.state.count;
    num--;
    if (num >= 1) {
      this.setState({ count: num });

      const newCount = {
        count: num,
      };

      CartQuntity(this.props.id, newCount)
        .then((response) => {
          console.log("count : ", response.data.count);
        })
        .catch((error) => {
          console.log("API ERROR:", error);
        });

      this.props.getElement(num)
    }
  };


  removeFromCart = (event) =>{
    event.preventDefault();

 this.props.remove(this.props.id)
  }



  
  render() {
    return (
      <div>
        <div className="row">
          <div class="col-xs-6 col-md-4">
            <h3>{this.props.name}</h3>
          </div>
          <div class="col-xs-6 col-md-4">
            <h3>{this.props.price}</h3>
          </div>
          <div class="col-xs-6 col-md-4">
            <Button onClick={this.IncQuatity}>+</Button>
            <h3>{this.state.count}</h3>
            <Button onClick={this.decQuatity}>-</Button>

            <Button onClick={this.removeFromCart}> remove Product from cart </Button>
          </div>
        </div>
      </div>
    );
  }
}
