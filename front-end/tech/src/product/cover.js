import React, { Component } from "react";
import { getAllProducts, getAllUsers } from "../api";
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";
import { getAllCovers } from "../api";

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
        console.log("RESSSS: ", response.data);
        // this.props.setProducts(response.data);
        this.setState({ covers: response.data });
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }

  addToCart = (eve) => {
    console.log("unfinished addtocart");
  };

  render() {
    // console.log(this.state.cover.name)
    // console.log(this.state.cover[1]);
    // console.log(this.props.cover)

    const coverProdcut = this.props.covers.map((elem, index) => {
      //   console.log(this.state.cover[index]);
      if (this.props.covers[index].type === "cover") {
        console.log(this.props.covers[index].type);
        return (
          <div className="mr-3 mt-2 text-center">
            <Card border="dark" bg="light">
              {/* this is the image of the prod will be added later */}
              {/* <Card.Img
              variant="top"
              src={elem.background_image}
              style={{ width: "100%", height: "250px" }}
            /> */}

              <Card.Body>
                <Card.Title>{elem.name}</Card.Title>
                <Card.Text>
                  <div>{elem.price} SR</div>

                  <div>
                    <div>
                      <br/>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                {/* <small className="text-muted">?????????</small> */}
                <Button
                  variant="outline-primary"
                  onClick={(eve) => {
                    this.addToCart(eve);
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
            <br />
          </div>
        );
      }
    });
    // <h1>{this.state.covers[0].name}</h1>
    return (
      <div>
        <br />
        <CardGroup> {coverProdcut}</CardGroup>
      </div>
    );
  }
}
