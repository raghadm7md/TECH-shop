import React, { Component } from "react";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";

export default class ProdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cart: {
        ProdName: "",
        ProdPrice: "",
        quantity: "",
        id: "",
      },
    };
  }
  FoundProduct = (event) => {
    event.preventDefault();
    let quantity = this.props.quantity - 1;
    const addedProd = {
      name: this.props.name,
      price: this.props.price,
      quantitiy: quantity,
      _id: this.props.id,
    };
    this.setState({ Cart: addedProd });
    let cart = this.state.Cart;
    console.log(cart);
    this.props.AddToCart(cart);
    console.log(this.state.Cart);

    deleteProoduct = (event) => {
      event.preventDefault();
      this.props.deleteProoduct(this.props.id);
    };
  };
  render() {
    return (
      <div className="mr-3 mt-2 text-center">
        <Card
          border="dark"
          bg="light"
          style={{ width: "12rem", height: "15rem" }}
        >
          {/* this is the image of the prod will be added later */}
          {/* <Card.Img
              variant="top"
              src={elem.background_image}
              style={{ width: "100%", height: "250px" }}
            /> */}
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              <div className="price d-inline">{this.props.price}</div>{" "}
              <div className="d-inline">SR</div>
              <div>
                <div>
                  <br />
                </div>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted">?????????</small> */}
            {this.props.quantity === 0 ? (
              <Button variant="secondary" disabled>
                Out of Stock
              </Button>
            ) : (
              <Button
                variant="outline-primary"
                onClick={(event) => {
                  this.FoundProduct(event);
                }}
              >
                Add to Cart
              </Button>
            )}{" "}
            <Button
              variant="secondary"
              variant="outline-primary"
              onClick={this.deleteProoduct}
            >
              remove from Cart
            </Button>
          </Card.Footer>
        </Card>
        <br />
      </div>
    );
  }
}
