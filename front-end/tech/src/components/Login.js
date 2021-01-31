import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import axios from 'axios';
import { login } from "../api";
import HomePage from './HomePage'
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirectLogin: false
    };
  }


  // submitLogin = () => {
  //   console.log("INSIDE THE SUBMITLOGIN");
  //   //if this.state.password == the password that this.state.email have => SUCCESS
  // }

  loginFunc=(e)=>{
    e.preventDefault();
    console.log("EENTEREREREREAED");
    let reqq={
      email:this.state.email , 
      password:this.state.password 
    }
    console.log("pppppp ",reqq);


    login(reqq)
    .then((response)=>{
      alert(response.data.message);
      if(response.data.success){

        this.setState({redirectLogin:true})

      }else{
        
      }
    })
    .catch(err=> {
      console.log(err)
    })


    
  }

  funcccc = () =>{
    console.log("aaaaaaaaaa");
  }

  render() {
    if(this.state.redirectLogin) {
        return <HomePage to={'/allproducts'}/>
    }
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
        <Button onClick={(e)=>{this.loginFunc(e)}}>Submit</Button>

      </div>
    );
  }
}
