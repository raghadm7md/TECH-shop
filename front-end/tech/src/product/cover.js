import React, { Component } from "react";
import { getAllProducts, getAllUsers } from "../api";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";
import { getAllCovers, deleteProductByID } from "../api";
import ProdCard from "./ProdCard";

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
        this.props.setCvr(response.data);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }

  addToCart = (eve) => {
    console.log("unfinished addtocart");
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
    // console.log(this.state.cover.name)
    // console.log(this.state.cover[1]);
    // console.log(this.props.cover)

    const coverProdcut = this.props.covers.map((elem, index) => {
      if (elem.type === "cover") {
        return (
          <ProdCard
            name={elem.name}
            price={elem.price}
            quantity={elem.quantitiy}
            id={elem._id}
            deleteProoduct={this.deleteProoduct}
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
