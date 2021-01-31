import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {addProduct} from "../api";


export default class AddProd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      type: "",
      description: "",
      quantitiy: "",
    };
  }

  AddToStock = (event) => {
    event.preventDefault();
    let productInfo = {
      name: this.state.name,
      price: this.state.price,
      type: this.state.type,
      description: this.state.description,
      quantitiy: this.state.quantitiy,
    };
    console.log(productInfo)
    addProduct(productInfo)
      .then((response) => {
        console.log("Product: ", response.data);

      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });

  };
  render() {
    return (
      <div>
        <h2>Add new product to Stock</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              type="text"
                onChange={(e) => {
                  console.log("CHANGE: ", e.target.value);
                  this.setState({ name: e.target.value });
                }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Price </Form.Label>
            <Form.Control
              type="Number"
                onChange={(e) => {
                  console.log("CHANGE: ", e.target.value);
                  this.setState({ price: e.target.value });
                }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Type </Form.Label>
            <select id="inputState" class="form-control" onChange={(e) => {
                  console.log("CHANGE: ", e.target.value);
                  this.setState({ type: e.target.value });
                }}>
              <option selected>Choose...</option>
              <option value="cover">Covers</option>
              <option value="cable">Cables</option>
              <option value="PowerBank" >Power Banks</option>
            </select>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="Text"
                onChange={(e) => {
                  console.log("CHANGE: ", e.target.value);
                  this.setState({ description: e.target.value });
                }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Quantitiy </Form.Label>
            <Form.Control
              type="Number"
                onChange={(e) => {
                  console.log("CHANGE: ", e.target.value);
                  this.setState({ quantitiy: e.target.value });
                }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.AddToStock}>
            Add to the Stock
          </Button>
        </Form>
      </div>
    );
  }
}
