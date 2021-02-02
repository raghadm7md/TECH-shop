import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { getAllProducts } from "../api";
import ProdCard from "../product/ProdCard";
import { CardGroup } from "react-bootstrap";

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {	
      SearchArr: [],	
    };
  }

  

  render() {
    console.log(this.props.searchValue);

    const searchProdcut = this.props.searchProduct.map((elem, index) => {
      console.log(this.props.searchValue);
      console.log(this.props.searchProduct)

      if (this.props.searchProduct[index].name == this.props.searchValue) {
        
        return <ProdCard name={elem.name} price={elem.price} />;
      }
    });

    return (
      <div>
       <h1 class="display-4">search prodcut </h1>
{this.props.results.length > 0 ? this.props.results.map((e) => <h5>{e}</h5>) : "Empty"}
        {/*         <h1 class="display-4">search prodcut </h1>
<CardGroup> {dynamicSearch} </CardGroup> */}

      </div>
    );
  }
}

