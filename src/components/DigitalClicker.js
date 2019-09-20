import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(){
        super()
        this.state={
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState({
            timesClicked:this.state.timesClicked + 1
        })

    }
    render() {
        return (
            <div>
                <button value="button" onClick={this.handleClick}>
                <label for="button">{this.state.timesClicked}</label>

                </button>

            </div>
        )
    }
}

