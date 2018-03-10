import React from 'react';
// import carrotcake from '../../src/carrotcake.jpg';
// import chocolate from '../../src/chocolate.jpg';
import Cakelist from '../Components/Cakelist.css';
import UserSeletedCakes from '../Components/UserSeletedCakes';
import { Button } from './Button';
import { Fragment } from "react";
import Cakes from './cakes.json';

const cakeListstyle = {
    background: 'yellow'
    /* margin-left: 15rem; */
    /* margin-right: 15rem; */
}


class CakeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteCake: []
        }
    }


    // handlefavouritecake = (e) => {

        // alert(Cakes.cakename)
        // e.preventDefault();
        // const listOfFavouriteCake = this.state.favouriteCake.push(e.target.value);
        // this.setState({
        //     favouriteCake: listOfFavouriteCake,
        // })
        // console.log(listOfFavouriteCake);
    // }

    render() {
        return (
            <Fragment>
                <div className="cakeList" style={cakeListstyle}>
                    <h1 > Here is the cake list </h1>
                    <div>
                        {Cakes.map(cake => {
                            return (
                                <div key={cake.id}>
                                    <h2>
                                        {cake.name}
                                    </h2>
                                    <img src={cake.imageUrl} width="150" height="150" alt="cake" />
                                    <Button />
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