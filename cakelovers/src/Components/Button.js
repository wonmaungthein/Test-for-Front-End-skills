import React from 'react';

export class Button extends React.Component {


    handlefavouritecake = (e) => {

        alert ( 'Do something'  )
        // e.preventDefault();
        // const listOfFavouriteCake = this.state.favouriteCake.push(e.target.value);
        // this.setState({
        //     favouriteCake: listOfFavouriteCake,
        // })
        // console.log(listOfFavouriteCake);
    }

    render() {
        return (
            <button> Add this cake to my Favourite list </button>
        )
    }
}