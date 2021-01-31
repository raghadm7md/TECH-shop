import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {


        const searchProdcut = this.props.search.map((elem, index) => {
        console.log(this.state.searchValue);
          if (this.state.searchValue === this.props.search[index].type ) {
            return (
              <h1>
                {" "}
                name={elem.name} price={elem.price}{" "}
              </h1>
            );
          }
        });
    
        return <div>{searchProdcut}
        <h1> hi</h1></div>;
      }
}

