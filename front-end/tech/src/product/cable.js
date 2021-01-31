import React, { Component } from "react";
import ProdCard from './ProdCard'
import { CardGroup } from "react-bootstrap";
import { getAllCables } from "../api";



export default class cable extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  componentDidMount() {
    console.log("Component DID MOUNT pwr!");

    getAllCables()
      .then((response) => {
        console.log("cbl", response.data);
        // this.props.setProducts(response.data);
        // this.setState({ covers: [...this.state.covers, response.data] });
        this.props.setCables(response.data)
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }

  render() {
    const cableProdcut = this.props.cables.map((elem, index) => {
      console.log(this.props.cables[index]);
      if (this.props.cables[index].type === "cable") {
        return (
         <ProdCard name={elem.name} price={elem.price}/>
        );
      }
    });

    return (
      <div>
        <h1 class="display-4">All Cables</h1>
        <CardGroup> {cableProdcut} </CardGroup>
      </div>
    );
  }
}