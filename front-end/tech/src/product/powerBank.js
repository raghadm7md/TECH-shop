import React, { Component } from "react";
import ProdCard from "./ProdCard";
import { CardGroup } from "react-bootstrap";
import { getAllPowerBanks, deleteProductByID , DecQuantitiy} from "../api";

export default class powerBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],

    };
  }

  componentDidMount() {
    console.log("Component DID MOUNT pwr!");

    getAllPowerBanks()
      .then((response) => {
        console.log("pwr", response.data);
        // this.props.setProducts(response.data);
        // this.setState({ covers: [...this.state.covers, response.data] });
        this.props.setPowerbank(response.data);
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

        const newProductsList = this.props.powerBanks.filter((powerBanks) => {
          return powerBanks._id !== id;
        });

        this.props.setPowerbank(newProductsList);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  };

  render() {
    const PowerBanksProdcut = this.props.powerBanks.map((elem, index) => {
      //   console.log(this.state.cover[index]);

      if (this.props.powerBanks[index].type === "PowerBank") {
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
        <h1 class="display-4 ">All Power Banks</h1>
        <CardGroup> {PowerBanksProdcut} </CardGroup>
      </div>
    );
  }
}
