import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import axios from 'axios';
//import login from '../api'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }


  // submitLogin = () => {
  //   console.log("INSIDE THE SUBMITLOGIN");
  //   //if this.state.password == the password that this.state.email have => SUCCESS
  // }

  login=(e)=>{
    e.preventDefault();
    console.log("EENTEREREREREAED");
    let req={
      Email:this.state.email , 
      pass:this.state.password 
    }
    axios.post('http://localhost:3000/login',req)
    .then(resp=>{
      alert(resp.data.message);
    })
    .catch(err=> {
      console.log(err)
    })
  }

  funcccc = () =>{
    console.log("aaaaaaaaaa");
  }

  render() {
    
    return (
      <div>
        <Form >
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
        <Button onClick={(e)=>{this.login(e)}}>Submit</Button>

      </div>
    );
  }
}
