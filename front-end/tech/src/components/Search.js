import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { getAllProducts } from "../api";
import ProdCard from "../product/ProdCard";
import { CardGroup } from "react-bootstrap";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // SearchArr: [],
    };
  }

  render() {
    // console.log(this.props.searchValue);
    const resultsSearch =
      this.props.results.length > 0
        ? this.props.results.map((e) => <ProdCard name={e.name} price={e.price} image={e.image} quantitiy={e.quantitiy}/>)
        : null;
    return (
      <div>
        <h1 class="display-4">Search Results: </h1>
        {/* {this.props.results.length > 0
          ? this.props.results.map((e) => <ProdCard name={e.name}/>)
          : null} */}
        {/*         <h1 class="display-4">search prodcut </h1>
<CardGroup> {dynamicSearch} </CardGroup> */}
        <CardGroup>{resultsSearch}</CardGroup>
      </div>
    );
  }
}
