import React from 'react';
import { Component, Fragment } from "react";
import CakeList  from "./CakeList";

export class Button extends Component {
    render() {
        return (
            <Fragment>
                <button> Add this cake to my Favourite list </button>
                <CakeList/>
            </Fragment>
        )
    }
}

