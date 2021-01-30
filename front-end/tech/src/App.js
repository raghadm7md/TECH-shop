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
import Profile from "./components/Profile"

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
        {/* //////////////////prod branch */}
        <div className="">
          {/* /////////////////HALF */}
          <div>
            <Navbar bg="light" variant="light" sticky="top">
              <Navbar.Brand href="#home">TECH</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="mr-5"as={Link} to="/allproducts">
                  All Products 
                </Nav.Link> 
                <Nav.Link className="ml-3"as={Link} to="/powerbanks">
                  Power Banks
                </Nav.Link>
                <Nav.Link as={Link} to="/covers">
                  Covers
                </Nav.Link>
                <Nav.Link as={Link} to="/cables">
                  Cables
                </Nav.Link>
                 {/* ######################## profile ##################### */}
                <Nav.Link as={Link} to="/profile">
                  My Account
                </Nav.Link>
              </Nav>
              
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-primary" className="mr-2">
                  Search
                </Button>
                <Link to="/login">
                  <Button variant="outline-primary" onClick="">
                    Sing in
                  </Button>
                </Link>
              </Form>
            </Navbar>
            <Switch>
            <div  className="container"> 
              <Route exact path="/" render={() => <HomePage />}></Route>
              
              <Route
                path="/allproducts"
                render={() => (
                  <Products
                    prods={this.state.products}
                    setProducts={this.funcSetProducts}
                  />
                )}
              ></Route>

              <Route
                exact
                path="/covers"
                render={(props) => (
                  <Cover {...props} covers={this.state.products} />
                )}
              />

              <Route
                exact
                path="/powerbanks"
                render={(props) => (
                  <PowerBanks {...props} powerBanks={this.state.products} />
                )}
              />
              <Route
                exact
                path="/cables"
                render={(props) => (
                  <Cables {...props} cables={this.state.products} />
                )}
              />
              {/* ######################## profile ##################### */}
               <Route
                exact
                path="/profile"
                component={Profile}
              />
              <Route path="/login" component={() => <Login />}></Route>
              </div>
            </Switch>
            {/* /////////////MASTER */}
          </div>
        </div>
      </Router>
    );
  }
}
