import React, { Component } from "react";
import ProdCard from "./ProdCard";
import { CardGroup } from "react-bootstrap";
import { getAllPowerBanks, deleteProductByID } from "../api";

export default class powerBank extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
            name={elem.name}
            price={elem.price}
            id={elem._id}
            deleteProoduct={this.deleteProoduct}
          />
        );
      }
    });

    return (
      <div>
        <h1 class="display-4">All Power Banks</h1>
        <CardGroup> {PowerBanksProdcut} </CardGroup>
      </div>
    );
  }
}
