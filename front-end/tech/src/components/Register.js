import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import axios from 'axios';
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name:"",
      email: "",
      password: "",
    };
  }


//   submitLogin = () => {
//     console.log("INSIDE THE SUBMITLOGIN");
//     //if this.state.password == the password that this.state.email have => SUCCESS
//   }


  render() {
    register=(e)=>{
      e.preventDefulte();
      let req={
        name:Name,
        Email:email , 
        pass:password 
      }
      axios.post('htpp://localhost:3000/register',req)
      .then(resp=>{
        alert(resp.data.message);
      })
      .catch(err=> {
        console.log(err)
      })

    }
    return (
      <div>
        <Form >
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
          <Button variant="primary" type="submit" onSubmit={(e)=>{register(e)}}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
