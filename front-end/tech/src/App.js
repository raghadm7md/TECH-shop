import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { getAllProducts, getAllUsers } from "../api";
import Cover from "./product/cover";
import PowerBanks from "./product/powerBank";
import Cables from "./product/cable";
import Login from "./components/Login";
import HomePage from "./components/HomePage";



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  funcSetProducts = (newProd) => {
    this.setState({ products: newProd });
  };


  render() {
    console.log(this.state.products);

    return (
      <Router>

      //////////////////prod branch
        <div className="App">
          <nav class="navbar">
            <Link to="/cover">
              <button class="ButtonStyleSec"> covers </button>{" "}
            </Link>
            <Link to="/powerBank">
              <button class="ButtonStyleSec"> power Banks</button>
            </Link>
            <Link to="/cable">
              <button class="ButtonStyleSec"> Cables </button>{" "}
            </Link>
          </nav>

          <Route
            exact
            path="/cover"
            render={(props) => (
              <Cover {...props} covers={this.state.products} />
            )}
          />

          <Route exact path="/powerBank"  render={(props) => (
              <PowerBanks {...props} powerBanks={this.state.products} />
            )}/>
          <Route exact path="/cable" render={(props) => (
              <Cables {...props} cables={this.state.products} />
            )}/>

          <h1>WELCOME</h1>
          <Products
            prods={this.state.products}
            setProducts={this.funcSetProducts}
          />
/////////////////HALF
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/allproducts">
                All Products
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary" className="mr-2">Search</Button>
              <Link to="/login">
                <Button variant="outline-primary" onClick="">
                  Sing in
                </Button>
              </Link>
            </Form>
          </Navbar>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage/>}
            ></Route>
            <Route path="/allproducts" component={() => <Products
              prods={this.state.products}
              setProducts={this.funcSetProducts}
            />}></Route>

            <Route path="/login" component={() => <Login />}></Route>
            
          </Switch>
/////////////MASTER
        </div>
      </Router>
    );
  }
}
