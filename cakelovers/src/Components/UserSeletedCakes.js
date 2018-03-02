import React from 'react';


// const selectedCakes = {};

// const UserSeletedCakes = (props) => (
//     <div>

//         {selectedCakes.map(cake => {
//             return (
//                 <div>
//                     <img src={props.src} alt={props.alt} />
//                 </div>
//             )
//         })}
//     </div>
// )


class UserSeletedCakes extends React.Component {
    render(props) {
        return (
            <div>
                <h1> This is the list where the user will store favourite cakes </h1>
                <img src={this.props.src} alt={this.props.alt} />
            </div>

        )
    }
}

export default UserSeletedCakes;