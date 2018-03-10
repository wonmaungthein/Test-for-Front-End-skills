import React from 'react';
import Cakelist from '../Components/Cakelist.css';
import UserSeletedCakes from '../Components/UserSeletedCakes';
import { Button } from './Button';
import { Fragment } from "react";


const cakeListstyle = {
    background: 'yellow' 
}


class CakeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cakes: []
        }
        // this.cakehandler = this.cakehandler.bind(this);
    }

    componentDidMount (){
        fetch('http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes')
        .then(resp => resp.json())
        .then(cakes => this.setState({cakes}));
    }

    firstCake = (cakes) => {
        this.state.cake[0]

    }

    render() {
        return (
            <Fragment>
                <div className="cakeList" style={cakeListstyle}>
                    <h1 > Here is the cake list </h1>
                    <div>
                        {this.state.cakes.map(cake => {
                            return (
                                <div key={cake.id}>
                                    <h2>
                                        {cake.name}
                                    </h2>
                                    <img src={cake.imageUrl} width="250" height="250" alt="cake" />
                                    <Button onClick ={this.props.firstCake}/>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }

}


export default CakeList;