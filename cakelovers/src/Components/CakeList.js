import React from 'react';
import carrotcake from '../../src/carrotcake.jpg';
import chocolate from '../../src/chocolate.jpg';

const CakeNames = {
    'one': 'Carrot Cake',
    'two': 'Chotolate Cake'
}

class CakeList extends React.Component {
    render() {
        return (
            <div>
                <h1> Here is the cake list </h1>
                <div>
                    <h3> {CakeNames.one}</h3>
                    <img src={carrotcake} width="150" height="150" alt="cake" />
                    <button> Add this cake </button>
                </div>
                <div>
                    <h3> {CakeNames.two}</h3>
                    <img src={chocolate} width="150" height="150" alt="cake" />
                    <button> Add this cake </button>
                </div>
            </div>
        )
    }
}

export default CakeList;