import React, { Component } from "react";
import ProdCard from "./ProdCard";
import { CardGroup } from "react-bootstrap";
import { getAllCables, deleteProductByID , DecQuantitiy } from "../api";

export default class cable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart:[],
    };
  }

  componentDidMount() {
    console.log("Component DID MOUNT pwr!");

    getAllCables()
      .then((response) => {
        console.log("cbl", response.data);
        // this.props.setProducts(response.data);
        // this.setState({ covers: [...this.state.covers, response.data] });
        this.props.setCables(response.data);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }

  AddToCart = (prodcut) => {
    this.setState({ cart: [...this.state.cart, prodcut] });
    if (this.state.cart.includes(prodcut._id, 0)) {
      alert("You Already added to cart!!");
    } else {

      console.log(prodcut)
      console.log(prodcut.name)
      console.log(prodcut.price)
      console.log(prodcut.quantitiy);
      this.props.AddToCart(prodcut);
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

        const newProductsList = this.props.cables.filter((cables) => {
          return cables._id !== id;
        });

        this.props.setCables(newProductsList);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  };

  render() {
    const cableProdcut = this.props.cables.map((elem, index) => {
      console.log(this.props.cables[index]);
      if (this.props.cables[index].type === "cable") {
        return (
          <ProdCard
          id={elem._id}
          name={elem.name}
          price={elem.price}
          image={elem.image}
          admin={this.props.isAdmin}
          quantity={elem.quantitiy}
          count={elem.count}
          deleteProoduct={this.deleteProoduct}
          AddToCart={this.AddToCart}
          />
        );
      }
    });

    return (
      <div>
        <h1 class="display-4">All Cables</h1>
        <CardGroup> {cableProdcut} </CardGroup>
      </div>
    );
  }
}
