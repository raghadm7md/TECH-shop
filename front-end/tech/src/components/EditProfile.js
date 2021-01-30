import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      phone: "",
      password: "",
      country:"",
      city:""
    };
  }

  submitInfo = (event) => {
    event.preventDefault();
    // this.props.Update(this.state.username);
    this.props.hide();
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="Username"
              placeholder="Username"
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ username: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="you@example.com"
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ email: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="966000000000"
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ phone: e.target.value });
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
          <h3>Address</h3>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Saudi Arabia"
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ country: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="makkah"
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ city: e.target.value });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.submitInfo}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
