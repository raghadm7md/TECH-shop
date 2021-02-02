import React, { Component } from "react";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";
import { getAllCovers, deleteProductByID, DecQuantitiy } from "../api";
import ProdCard from "./ProdCard";

export default class cover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    console.log("Component DID MOUNT COVERSSSSSS!");

    getAllCovers()
      .then((response) => {
        console.log("RESSSS cvr: ", response.data);
        // this.props.setProducts(response.data);
        // this.setState({ covers: [...this.state.covers, response.data] });
        this.props.setCvr(response.data);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }
  /* ######################## Cart ##################### */
  AddToCart = (prodcut) => {
    this.setState({ cart: [...this.state.cart, prodcut] });
    if (this.state.cart.includes(prodcut._id, 0)) {
      alert("You Already added to cart!!");
    } else {
      this.props.AddToCart(prodcut);
      console.log(prodcut.quantitiy);
      console.log("hi from cover");

      DecQuantitiy(prodcut._id, prodcut)
        .then((response) => {
          console.log("DecQuantitiy: ", response.data);
        })
        .catch((error) => {
          console.log("API ERROR:", error);
        });
    }
  };

  deleteProoduct = (id) => {
    console.log("The Product ID to Delete", id);

    deleteProductByID(id)
      .then((response) => {
        console.log(`The Product with the ID ${id} has been deleted.`);

        const newProductsList = this.props.covers.filter((covers) => {
          return covers._id !== id;
        });

        this.props.setCvr(newProductsList);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  };

  render() {
    const coverProdcut = this.props.covers.map((elem, index) => {
      if (elem.type === "cover") {
        return (
          <ProdCard
            id={elem._id}
            name={elem.name}
            price={elem.price}
            quantity={elem.quantitiy}
            deleteProoduct={this.deleteProoduct}
            AddToCart={this.AddToCart}
          />
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
