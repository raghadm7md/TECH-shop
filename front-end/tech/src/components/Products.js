import React, { Component } from "react";
import Product from "./Product";
import { getAllProducts, getAllUsers } from "../api";

export default class Products extends Component {
  componentDidMount() {
    getAllProducts()
      .then((response) => {
        console.log("RESSSS: ", response.data);
        this.props.setProducts(response.data);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }

  render() {
    const allProducts = this.props.prods.map((elem, index) => {
      return <Product name={elem.name} price={elem.price} key={index} />;
    });

    return (
      <div>
        <h1>ALL PRODS:</h1>
        {allProducts.length ? allProducts : <h4>No Products!</h4>}
      </div>
    );
  }
}
