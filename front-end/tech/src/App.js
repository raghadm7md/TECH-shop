import React, { Component } from 'react'
import './App.css';
import Products from './components/Products'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products: []
    }
  }

  funcSetProducts = (newProd) => {
    this.setState({ products: newProd });
  };
 
  render() {
    return (
      <div className="App">
        <h1>WELCOME</h1>
        <Products
          prods={this.state.products}
          setProducts={this.funcSetProducts}
        />
      </div>
    )
  }
}
