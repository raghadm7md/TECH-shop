import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import axios from 'axios';
//import login from '../api'
// import axios from 'axios';
import { login } from "../api";
import { SingIn, LogOut } from "../api";
import HomePage from './HomePage'
import { Redirect } from "react-router-dom";
import {
  setInStorage,
  getFromStorage,
} from '../utils/storage';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirectLogin: false,
      redirect: false,
      status:"NOT SIGNED IN",
      token:"",
      rtoken:"",
      isLoading:"",
      signInError: '',
      signInEmail: '',
      signInPassword: '',

    };
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }
  onTextboxChangeSignInEmail(event) {
  this.setState({
    signInEmail: event.target.value,
  });
}
onTextboxChangeSignInPassword(event) {
  this.setState({
    signInPassword: event.target.value,
  });
}

  // submitLogin = () => {
  //   console.log("INSIDE THE SUBMITLOGIN");
  //   //if this.state.password == the password that this.state.email have => SUCCESS
  // }


  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });


    // Post request to backend
    SingIn(signInEmail, signInPassword)
      .then((response) => {
    console.log("ENTERED THE FUNC");

        console.log('json', response);
        if (response.data.success) {
          setInStorage('the_main_app', { token: response.data.token });
          console.log("YEEEEEEEES");
          this.setState({
            signInError: response.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: '',
            token: response.data.token,
            rtoken: response.data.rtoken,
            status:"SIGNED IN",
            redirect:true,
          });
          
          this.renderRedirect();
          this.props.LogToken(response.data.token,response.data.name,signInEmail,signInPassword,response.data.rtoken,response.data.admin)

        } else {
          console.log("NO");
          this.setState({
            signInError: response.message,
            status:"NOT SIGNED IN",
            isLoading: false,
          });
        }
      })
      .catch(err=> {
        console.log(err)
      });
  }



  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({redirect:false})
      return <Redirect to='/allproducts' />
    }
  }



  render() {

    if (this.state.redirect) {
      return <Redirect to="/allproducts" />
    }
    return (
      <div >
        {this.renderRedirect()}
        <h1 className="display-4 App">Sign in</h1>
        <br/>
<div className="App center"> 
        <div className="w-50"> 
        <Form  >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{width: "100%"}}
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                console.log("CHANGE: ", e.target.value);
                this.setState({ signInEmail: e.target.value });
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
                this.setState({ signInPassword: e.target.value });
              }}
            />
          </Form.Group>
        </Form>
        </div> </div>
        <div className="App"> 
        <Button onClick={this.onSignIn}>Sign In</Button>
        
        </div>
        <br/>
        <br/>

        <h4 className="App">You dont have account? <a href='./Register'> register now </a></h4>

      </div>
    );
  }
}
