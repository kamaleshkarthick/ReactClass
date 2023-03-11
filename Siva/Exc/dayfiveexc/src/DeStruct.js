import React, { Component, useReducer } from 'react';
import './App.css';

const foodItem = [
    { "name": "Pizzz", "price": 230 },
    { "name": "Burger", "price": "300" },
    { "name": "Rotti", "Price": "200" }
]
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9]



const arrayData = ["Honda city", "Yamaha Fz", "Eicher"];

const objectData = {

    fullName: {
        firstName: "Siva",
        lastName: "Prakash"
    }
}



export default class DeStruct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isloggin: false,
            name: ""
        }
    }

    componentDidUpdate(prevProps,prevState) {
        console.log(prevState.name)
        console.log(this.state.name)

        if(prevState.name !==  this.state.name && this.state.name == "admin"){
            this.setState({isloggin:true})
        }
    }


    render() {
        const { isloggin } = this.state;
        //console.log(isloggin,"isloggin")
        let a = 5;
        let b = 6;
        [a, b] = [b, a];
 

        const [car, ...restOfValue] = arrayData;
        //const {fullName,firstName,secondNAme } = objectData;

        const { fullName: {
            firstName, lastName
        }
        } = objectData

        return (
            <div className='destruct-clas'>
                {isloggin && <p>You are Logged in!!!</p>}
                <h1>De-Structure Example</h1>
                <p>Car => {car}</p>
                {/* <p>Bike => {bike}</p>
                <p>Heavy => {heavy}</p> */}


                <p>First Name => {firstName}</p>
                <p>Last NAme => {lastName}</p>
                {/*<p>NAme => {fullName}</p> */}



                <input 
                onChange={(e) => this.setState({ name: e.target.value })} 
                type="text" value={this.state.name} />

            </div>
        )
    }

}

