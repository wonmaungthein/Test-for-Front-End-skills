import React from 'react';
import { Component, Fragment } from "react";


export class Button extends Component {

    cakehandler = (e) => {
       alert ("the button is clicked")
    }


    firstCake = (cakes) => {
        this.state.cake[0]

    }


    render() {
        return (
            <Fragment>
                <button onClick={this.firstCake}> Add this cake to my Favourite list </button>
            </Fragment>
        )
    }
}

