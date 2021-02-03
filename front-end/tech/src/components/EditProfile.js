import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {EditUser} from "../api";


export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      city: "",
      houseNumber: "",
    };
  }

  submitInfo = (event) => {
    event.preventDefault();
    let info = {
      name: this.state.name,
      email: this.state.email,
      Address: {
        country: this.state.country,
        city: this.state.city,
        houseNumber: this.state.houseNumber,
            }
    };


    //////CHANGED ID TO DYN
    EditUser(this.props.token,info)
      .then((response) => {
        console.log("user: ", response.data);

      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });

      this.props.EditInfo(info);
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
                this.setState({ name: e.target.value });
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
            <Form.Label>House Number</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Ex: 1 "
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ houseNumber: e.target.value });
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
