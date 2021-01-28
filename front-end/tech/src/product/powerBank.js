import React, { Component } from "react";

export default class powerBank extends Component {
  render() {
    // console.log(this.state.cover.name)
    // console.log(this.state.cover[1]);
    // console.log(this.props.cover)

    const PowerBanksProdcut = this.props.powerBanks.map((elem, index) => {
      //   console.log(this.state.cover[index]);
      if (this.props.powerBanks[index].type === "PowerBank") {
        console.log(this.props.powerBanks[index].type);
        return (
          <div>
            <h2>name: {elem.name}</h2>
             <h4>price: {elem.price}</h4>
          </div>
        );
      }
    });

    return <div> {PowerBanksProdcut}</div>;
  }
}
