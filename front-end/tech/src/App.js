import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { getAllProducts, getAllUsers } from "../api";
import Cover from "./product/Cover";
import PowerBanks from "./product/powerBank";
import Cables from "./product/cable";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Cart from "./product/Cart";
import AddProd from "./components/AddProd";
import ProdCard from "./product/ProdCard";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cart: [],
      searchValue: "",
      isLoggedIn: false,
      covers: [],
      powerbanks: [],
      cables: [],
    };

    this.AddToCart = this.AddToCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  funcSetProducts = (newProd) => {
    this.setState({ products: newProd });
  };

  //search meshal
  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  funcSetCvr = (newCvr) => {
    this.setState({ covers: newCvr });
  };

  funcSetPowerBank = (newPwr) => {
    this.setState({ powerbanks: newPwr });
  };

  funcSetCable = (newCbl) => {
    this.setState({ cables: newCbl });
  };

  logFunc = () => {};

  AddToCart=(info)=>{
    this.setState({ cart: [...this.state.cart, info] });
    console.log("hi from App")
  }
  render() {
    console.log(this.state.products);

    return (
      <Router>
        <div className="">
          <div>
            <Navbar bg="light" variant="light" sticky="top">
              <Navbar.Brand href="#home">TECH</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="mr-5" as={Link} to="/allproducts">
                  All Products
                </Nav.Link>
                <Nav.Link className="ml-3" as={Link} to="/powerbanks">
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
                <Nav.Link as={Link} to="/addprod">
                  ADD PROD
                </Nav.Link>
              </Nav>

              <Form inline>
                <FormControl
                  type="text"
                  placeholder="search"
                  className="mr-sm-2"
                  value={this.state.searchValue}
                  onChange={(eve) => {
                    this.handleChange(eve);
                  }}
                />
                <Link to="Search">
                  <Button variant="outline-primary" className="mr-2">
                    Search
                  </Button>
                </Link>

                <Link to="/login">
                  <Button variant="outline-primary" onClick="">
                    Sing in
                  </Button>
                </Link>

                <Link to="/cart">
                  <Button variant="outline-primary" onClick="">
                    <img
                      src="https://www.flaticon.com//vstatic/svg/833/833314.svg?token=exp=1612176439~hmac=2cfcee3809abe403d5864ff08b494741"
                      width="20px"
                    ></img>
                  </Button>
                </Link>
              </Form>
            </Navbar>
            <Switch>
              <div className="container">
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
                  path="/search"
                  render={(props) => (
                    <Search {...props} searchProduct={this.state.products} />
                  )}
                ></Route>

                {/* <Route path="/Search" component={() => <Search />}></Route> */}

                <Route
                  exact
                  path="/covers"
                  render={(props) => (
                    <Cover
                      {...props}
                      covers={this.state.covers}
                      setCvr={this.funcSetCvr}
                      AddToCart={this.AddToCart}
                    />
                  )}
                />

                <Route
                  exact
                  path="/powerbanks"
                  render={(props) => (
                    <PowerBanks
                      {...props}
                      powerBanks={this.state.powerbanks}
                      setPowerbank={this.funcSetPowerBank}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cables"
                  render={(props) => (
                    <Cables
                      {...props}
                      cables={this.state.cables}
                      setCables={this.funcSetCable}
                    />
                  )}
                />
                {/* ######################## profile ##################### */}
                <Route exact path="/profile" component={Profile} />
                <Route
                  path="/login"
                  component={() => <Login isLoggedIn={this.state.isLoggedIn} />}
                ></Route>

                <Route exact path="/addprod" render={() => <AddProd />} />
             {/* ######################## Cart ##################### */}
                <Route
                  exact
                  path="/cart"
                  render={() => (
                    <Cart
                      // {...props}
                      currentCart={this.state.cart}
                    />
                  )}
                />
              </div>
            </Switch>
            {/* /////////////MASTER */}
          </div>
        </div>
      </Router>
    );
  }
}
