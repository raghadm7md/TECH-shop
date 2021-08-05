import React, { Component } from "react";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";

export default class ProdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cart: {
        name: this.props.name,
        price: this.props.price,
        quantitiy: this.props.quantity,
        id: this.props.id,
        count: this.props.count

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
      count: this.props.count
    };
    this.setState({ Cart: addedProd });
    console.log(this.state.Cart);
    let cart = this.state.Cart;
    console.log(cart);
    this.props.AddToCart(cart);
 
    console.log(this.state.Cart);
  };

  deleteProoduct = (event) => {
    event.preventDefault();
    this.props.deleteProoduct(this.props.id);
  };

  render() {
    return (
      <div className="mr-3 mt-2 text-center">
        <Card
          border="dark"
          bg="light"
          style={{ width: "15rem", height: "350px" }}
        >

          {/* this is the image of the prod will be added later */}
          <Card.Img
              variant="top"
              src={this.props.image}
              style={{ width: "100%", height: "150px" }}
            />
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

            {this.props.admin ? (
              <Button
              className="mt-1"
              variant="danger"
              onClick={this.deleteProoduct}
            >
              REMOVE
            </Button>
            ) : (
              [
                this.props.quantity === 0 ? (
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
                ),
              ]
            )}
          </Card.Footer>
        </Card>
        <br />
      </div>
    );
  }
}
