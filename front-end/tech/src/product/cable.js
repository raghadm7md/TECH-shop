import React, { Component } from "react";

export default class cable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cable: [
        {
          name: this.props.name,
          price: this.props.price,
          type: this.props.type,
        },
      ],
    };
  }

  render() {
    // console.log(this.state.cover.name)
    // console.log(this.state.name);

    const cableProdcut = this.props.cables.map((elem, index) => {
      console.log(this.props.cables[index]);
      if (this.props.cables[index].type === "cable") {
        return (
          <h1>
            {" "}
            name={elem.name} price={elem.price}{" "}
          </h1>
        );
      }
    });

    return <div>{cableProdcut}</div>;
  }
}