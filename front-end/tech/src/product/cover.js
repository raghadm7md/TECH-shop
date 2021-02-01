import React, { Component } from "react";
import { getAllProducts, getAllUsers } from "../api";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";
import { getAllCovers } from "../api";
import ProdCard from './ProdCard'


export default class cover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      covers: [],
    };
  }

  componentDidMount() {
    console.log("Component DID MOUNT COVERSSSSSS!");

    getAllCovers()
      .then((response) => {
        console.log("RESSSS cvr: ", response.data);
        // this.props.setProducts(response.data);
        // this.setState({ covers: [...this.state.covers, response.data] });
        this.props.setCvr(response.data)
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }

  AddToCart = (prodcut) => {

    this.props.AddToCart(prodcut)
    console.log("hhiiii from cover")

  };

  render() {
    // console.log(this.state.cover.name)
    // console.log(this.state.cover[1]);
    // console.log(this.props.cover)

    const coverProdcut = this.props.covers.map((elem, index) => {
      if (elem.type === "cover") {
        return (
         <ProdCard name={elem.name} price={elem.price} quantity={elem.quantitiy}
         AddToCart={this.AddToCart}/>
        );
      }
    });
    return (
      <div>
        <h1 class="display-4">All Covers</h1>
        <CardGroup> {coverProdcut} </CardGroup>
      </div>
    );
  }
}
