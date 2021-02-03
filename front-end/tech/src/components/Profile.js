import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { getAllProducts, getAllUsers ,getUserbyID} from "../api";
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
    this.setState({ showComponent: !this.state.showComponent });
    console.log(this.state.showComponent);
  };
  hide = () => {
    this.setState({ showComponent: false });
    console.log(this.state.showComponent);
  };

  componentDidMount() {
    getUserbyID(this.props.token)
      .then((response) => {
        console.log("res: ", response.data);
        this.setState({ user: response.data[2] });

        let user = this.state.user;
        this.setState({ name: response.data.name });
        this.setState({ email: response.data.email });
        this.setState({ country: response.data.Address.country });
        this.setState({ city: response.data.Address.city });
        this.setState({ HouseNumber: response.data.Address.houseNumber });
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
      <div className ="profile">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username: {this.state.name}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address: {this.state.email}</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <h3>Address: </h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Country: {this.state.country}</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>City: {this.state.city}</Form.Label>
            </Form.Group>
            <Form.Label>House number: {this.state.HouseNumber}</Form.Label>
          </Form.Group>
          <Button onClick={this.EditProfile} class="btn btn-secondary">
            Edit
          </Button>
        </Form>
        {this.state.showComponent ? (
          <EditProfile hide={this.hide} EditInfo={this.EditInfo} token={this.props.token}/>
        ) : null }
      </div>
    );
  }
}
