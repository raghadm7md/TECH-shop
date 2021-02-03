import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <h1 class="display-4 ">Welcome, {this.props.name}</h1>
                <h2>Check the sales going on:</h2>
            </div>
        )
    }
}
