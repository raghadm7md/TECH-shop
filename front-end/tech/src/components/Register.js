import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {registeration} from "../api.js"

import Login from "./Login";
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      redirectReg: false
    };
  }
  register = (e) =>{
    e.preventDefault();
    let req = {
      name: this.state.name,
      email:this.state.email,
      password: this.state.password,
    };
    console.log("TTTTTTTTTTTTTTTTT")
    registeration(req)
      .then((resp) => {
        alert(resp.data.message);

       console.log(resp.data)

      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if(this.state.redirectLogin) {
      return <Login to={'/login'}/>
  }
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your full name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ email: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ password: e.target.value });
              }}
            />
          </Form.Group>
          
        </Form>
        <Button
      
            variant="primary"
            type="submit"
            onClick={(e) => {
              this.register(e);
            }}
          >
            Submit
          </Button>
      </div>
    );
  }
}
