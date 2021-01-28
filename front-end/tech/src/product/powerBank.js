import React, { Component } from "react";

export default class powerBank extends Component {
  render() {
    // console.log(this.state.cover.name)
    // console.log(this.state.cover[1]);
    // console.log(this.props.cover)

    const PowerBanksProdcut = this.props.powerBanks.map((elem, index) => {
      //   console.log(this.state.cover[index]);
      if (this.props.powerBanks[index].type === "power Bank") {
        console.log(this.props.powerBanks[index].type);
        return (
          <h1>
            {" "}
            name={elem.name} price={elem.price}{" "}
          </h1>
        );
      }
    });

    return <div> {PowerBanksProdcut}</div>;
  }
}
