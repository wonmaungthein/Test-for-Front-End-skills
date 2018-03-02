import React from 'react';
// import carrotcake from '../../src/carrotcake.jpg';
// import chocolate from '../../src/chocolate.jpg';
import Cakelist from '../Components/Cakelist.css';
import UserSeletedCakes from '../Components/UserSeletedCakes';

const Cakes = [
    {
        cakename: 'Carrot cake',
        cakeimg: '/carrotcake.jpg'
    },
    {
        cakename: 'Chocolate Cake',
        cakeimg: '/chocolate.jpg'
    },

]

class CakeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteCake: [,]
        }
    }

    handlefavouritecake = (e) => {
        e.preventDefault();
        const listOfFavouriteCake = this.state.favouriteCake.push(e.target.value);
        // this.setState({
        //     favouriteCake: listOfFavouriteCake,
        // })
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="cakeList">
                <h1 > Here is the cake list </h1>
                <div>
                    {Cakes.map(cake => {
                        return (
                            <div>
                                <h2>
                                    {cake.cakename}
                                </h2>
                                <img src={cake.cakeimg} width="150" height="150" alt="cake" />
                                <button onClick={this.handlefavouritecake} value={cake.cakename} > Add this cake </button>
                            </div>
                        )
                    })}


                    <UserSeletedCakes />
                </div>
            </div>
        )
    }

}


export default CakeList;