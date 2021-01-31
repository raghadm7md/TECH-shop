import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { getAllProducts, getAllUsers } from "../api";
import EditProfile from "./EditProfile";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      user: {
        name: "",
        email: "",
        country: "",
        city: "",
        HouseNumber: 0,
      },
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

  componentDidMount() {
    getAllUsers()
      .then((response) => {
        console.log("RESSSS: ", response.data);
        this.setState({ user: response.data[2] });

        let user = this.state.user;
        this.setState({ name: user.name });
        this.setState({ email: user.email });
        this.setState({ country: user.Address.country });
        this.setState({ city: user.Address.city });
        this.setState({ HouseNumber: user.Address.houseNumber });
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }
  
  EditInfo = (info) => {
    console.log(info);
    this.setState({ name: info.name });
    this.setState({ email: info.email });
    this.setState({ country: info.Address.country });
    this.setState({ city: info.Address.city });
    this.setState({ HouseNumber: info.Address.houseNumber });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <p>{this.state.name}</p>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <p>{this.state.email}</p>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <h3>Address</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Country</Form.Label>
              <p>{this.state.country}</p>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <p>{this.state.city}</p>
            </Form.Group>
            <Form.Label>House number</Form.Label>
            <p>{this.state.HouseNumber}</p>
          </Form.Group>
          <Button onClick={this.EditProfile} class="btn btn-secondary">
            Edit
          </Button>
        </Form>
        {this.state.showComponent ? (
          <EditProfile hide={this.hide} EditInfo={this.EditInfo} />
        ) : null}
      </div>
    );
  }
}
