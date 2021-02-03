import React, { Component } from "react";
import Product from "./Product";
import { getAllProducts, deleteProductByID } from "../api";
import ProdCard from "../product/ProdCard";
import { CardGroup } from "react-bootstrap";

export default class Products extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      testt:"2",
    }
  }
  

  
  componentDidMount() {
    console.log("Component DID MOUNT!");

    getAllProducts()
      .then((response) => {
        console.log("RESSSS: ", response.data);
        this.props.setProducts(response.data);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
   }

   deleteProoduct = (id) => {
    console.log("The Product ID to Delete", id);

    deleteProductByID(id)
      .then((response) => {
        console.log(`The Product with the ID ${id} has been deleted.`);

        const newProductsList = this.props.prods.filter((prods) => {
          return prods._id !== id;
        });

        this.props.setProducts(newProductsList);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  };


  render() {
    


    const allProducts = this.props.prods.map((elem, index) => {
      return (
        <ProdCard
            id={elem._id}
            name={elem.name}
            price={elem.price}
            image={elem.image}
            admin={this.props.isAdmin}
            quantity={elem.quantitiy}
            deleteProoduct={this.deleteProoduct}
          />
      )
    });

  
    return (
      <div>
        <h1 class="display-4 ">Welcome, {this.props.name}</h1>
        
        <h1 class="display-4 ">All Products</h1>
        {allProducts.length ? <CardGroup> {allProducts} </CardGroup> : <h4>No products!</h4>}


      </div>
    );
  }
}
