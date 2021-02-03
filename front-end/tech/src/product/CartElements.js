import React, { Component } from 'react'
import { Button, CardGroup, Card, Collapse } from "react-bootstrap";


export default class CartElements extends Component {
    constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

   IncQuatity = () => {
    let num = this.state.count;
    num++;
    this.setState({ count: num });
    // send the Q
    this.props.getCount(num,this.props.id)
  };
  
   decQuatity = () => {
    let num = this.state.count;
    num--;
    if(num>=1){
    this.setState({ count: num });
    // send the Q
    this.props.getCount(num,this.props.id)
    
    }
  };
    render() {
        return (
          <div>
              <div className="row">
              <div class="col-xs-6 col-md-4">
                <h3>{this.props.name}</h3>
              </div>
              <div class="col-xs-6 col-md-4">
                <h3>{this.props.price}</h3>
              </div>
              <div class="col-xs-6 col-md-4">
                <Button onClick={this.IncQuatity}>+</Button>
                <h3>{this.state.count}</h3>
                <Button onClick={this.decQuatity}>-</Button>
              </div>
           </div>
          </div>
        );
      }
}
