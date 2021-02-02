import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { getAllProducts, getAllUsers } from "../api";
import Cover from "./product/cover";
import PowerBanks from "./product/powerBank";
import Cables from "./product/cable";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Register from "./components/Register";
import AddProd from "./components/AddProd";
import { LogOut } from "./api";
import { getFromStorage } from "./utils/storage";
import Cart from "./product/Cart";
import ProdCard from "./product/ProdCard";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      searchValue: "",
      searchResult: [],
      isLoggedIn: false,
      covers: [],
      powerbanks: [],
      cables: [],
      redirect: false,
      testt: "1",
      isLoading: true,
      token: "",
      rtoken: "",
      name: "",
      signInEmail: "",
      signInPassword: "",
      cart: [],
    };
    this.AddToCart = this.AddToCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.LogToken = this.LogToken.bind(this);
    this.onlogout = this.onlogout.bind(this);
    this.dynamicSearch = this.dynamicSearch.bind(this);
  }

  funcSetProducts = (newProd) => {
    this.setState({ products: newProd });
  };
  dynamicSearch = (searchValue = this.state.searchValue) => {
    return this.state.products.filter((name) =>
      name.includes(searchValue)
    );
  };

  handleChange(event) {
    console.log(this.dynamicSearch());
    let result = this.dynamicSearch();
    this.setState({ searchValue: event.target.value, searchResult: result });
    console.log(this.state.searchValue);
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

  LogToken = (token, name, signInEmail, signInPassword, rtoken) => {
    console.log("in app from login, ", name);
    this.setState({
      isLoggedIn: true,
      token: token,
      name: name,
      signInEmail: signInEmail,
      signInPassword: signInPassword,
      rtoken: rtoken,
    });
  };

  logoutFunc = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  onlogout() {
    const obj = getFromStorage("the_main_app");
    console.log("AAA", obj);
    // const {
    //   signInEmail,
    //   signInPassword,
    // } = this.state;
    const signInEmail = this.state.signInEmail;
    const signInPassword = this.state.signInPassword;
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      LogOut(signInEmail, signInPassword, token).then((response) => {
        if (response.data.success) {
          this.setState({
            token: "",
            isLoggedIn: false,
            redirect: true,
          });

          this.renderRedirect();
        } else {
          this.setState({
            isLoading: false,
          });
        }
      });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  renderRedirect = () => {
    console.log("itsssssss");
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Redirect to="/login" />;
    }
  };

  AddToCart = (info) => {
    this.setState({ cart: [...this.state.cart, info] });
    console.log("hi from App");
  };
  render() {
    return (
      <Router>
        {this.renderRedirect()}
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

                <Nav.Link as={Link} to="/addprod">
                  ADD PROD
                </Nav.Link>
              </Nav>
              <Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="search"
                    className="mr-sm-2"
                    value={this.state.searchValue}
                    onChange={
                      this.handleChange
                    }
                  />
                  <Link to="/search">
                    <Button variant="outline-primary" className="mr-2">
                      Search
                    </Button>
                  </Link>

                  {this.state.isLoggedIn ? (
                    <div className="myacc">
                      <Nav.Link
                        className="d-inline mr-2"
                        as={Link}
                        to="/profile"
                      >
                        My Account: {this.state.name}
                      </Nav.Link>
                      <Button variant="secondary" onClick={this.onlogout}>
                        Log Out
                      </Button>
                    </div>
                  ) : (
                    <Link to="/login">
                      <Button variant="outline-primary" onClick="">
                        Sing in
                      </Button>
                    </Link>
                  )}

                  <Link to="/cart">
                    <Button variant="outline-primary" onClick="">
                      <img
                        src="https://www.flaticon.com//vstatic/svg/833/833314.svg?token=exp=1612176439~hmac=2cfcee3809abe403d5864ff08b494741"
                        width="20px"
                      ></img>
                    </Button>
                  </Link>
                </Form>
              </Nav>

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
                      isLoggedIn={this.state.isLoggedIn}
                    />
                  )}
                ></Route>

                <Route path="/search">
                  <Search  results={this.state.searchResult} />
                  {/*  render={(props) => <Search {...props}  searchValue={this.state.searchValue} searchProduct={this.state.products}/>}> */}
                </Route>

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
                  component={() => (
                    <Login
                      isLoggedIn={this.state.isLoggedIn}
                      LogToken={this.LogToken}
                      logout={this.logoutFunc}
                    />
                  )}
                ></Route>

                <Route exact path="/addprod" render={() => <AddProd />} />

                <Route
                  exact
                  path="/Register"
                  render={(props) => <Register {...props} />}
                />

                <Route exact path="/addprod" render={() => <AddProd />} />
                {/* ######################## Cart ##################### */}
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <Cart
                      {...props}
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
