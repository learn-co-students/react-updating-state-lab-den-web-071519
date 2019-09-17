import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick(num) {
        this.setState({
            timesClicked: num + 1
        })
    }

    render() {
        return (
            <button onClick={() => this.handleClick(this.state.timesClicked)}>
                {this.state.timesClicked}
            </button>
        )
    }
}

