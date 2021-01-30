import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import EditProfile from './EditProfile'

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showComponent: false,
    };
  }

  EditProfile = () => {
    this.setState({ showComponent: true });
    console.log(this.state.showComponent);
  };
  hide = () => {
    this.setState({ showComponent: false });
    console.log(this.state.showComponent);
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <p>raghad</p>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <p>you@example.com</p>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone number</Form.Label>
            <p>966000000000</p>
          </Form.Group>
          <h3>Address</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            <p>Saudi Arabia</p>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <p>Makkah</p>
          </Form.Group>
          <Button onClick={this.EditProfile} class="btn btn-secondary">
            Edit
          </Button>
        </Form>
        {this.state.showComponent ? (
            <EditProfile hide={this.hide} />
          ) : null}

      </div>
    );
  }
}
