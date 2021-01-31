import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { getAllProducts } from "../api";
import ProdCard from "../product/ProdCard";
import { CardGroup } from "react-bootstrap";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchArr: [],
    };
  }

  render() {
    console.log(this.props.result);
    console.log(this.props.searchProduct);

    console.log(this.props.result);

    const searchProdcut = this.props.searchProduct.map((elem, index) => {
      console.log(this.props.result);
      if (this.props.searchProduct[index].name === this.props.result) {
        return <ProdCard name={elem.name} price={elem.price} />;
      }
    });

    return (
      <div>
        <h1 class="display-4">search prodcut </h1>
        <CardGroup> {searchProdcut} </CardGroup>
      </div>
    );
  }
}

