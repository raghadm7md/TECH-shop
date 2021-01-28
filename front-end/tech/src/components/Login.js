import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }


  submitLogin = () => {
    console.log("INSIDE THE SUBMITLOGIN");
    //if this.state.password == the password that this.state.email have => SUCCESS
  }


  render() {
    return (
      <div>
        <Form>
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
          <Button variant="primary" type="submit" onClick={this.submitLogin}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
