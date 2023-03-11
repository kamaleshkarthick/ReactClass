import React, { Component, useReducer } from 'react';
import './App.css';

const foodItem = [
    { "name": "Pizza", "price": 230, "isAvailable": false },
    { "name": "Burger", "price": 300, "isAvailable": true },
    { "name": "Rotti", "Price": 200, "isAvailable": true },
    { "name": "Stuffed Rotti", "Price": 200, "isAvailable": true }
]
const marks = [76, 35, 86, 13, 87]


export default class ArrayMothods extends Component {

    renderFoodItem() {
        const listofFood = foodItem.map((currentVal, CurrentIndex) => {
            const { name } = currentVal;
            return (
                <li key={`prod-${CurrentIndex}`}>{name}</li>
            )
        });
        return listofFood;
    }

    renderAvailableFoodItem() {

        const avaProd = foodItem.filter(el => {
            if (el.isAvailable) {
                return el;
            }
        });

        const isPrordAvaiF = foodItem.find(el => el.Price === 200)
        console.log(isPrordAvaiF, '=> Find')

        const isPrordAvai = foodItem.filter(el => el.Price === 200)
        console.log(isPrordAvai, '=> Filter')

        const listofFood = avaProd.map((currentVal, CurrentIndex) => {
            const { name, isAvailable } = currentVal;
            return (
                <li key={`avl-item${CurrentIndex}`}>{name}</li>
            )

        });
        return listofFood;
    }

    renderTotalValue = () => {
        /*const total =  marks.reduce((totalMark,currentVal) => {
            return totalMark +=currentVal;
        },0)
        return total;*/

        let totalMark = 0;
        marks.forEach(currentVal => {
            totalMark += currentVal;
        })
        return totalMark;
    }

    render() {



        return (
            <div className='destruct-clas'>
                <h1>Array Methods</h1>
                <ul>
                    {this.renderFoodItem()}
                </ul>

                <ul>
                    {this.renderAvailableFoodItem()}
                </ul>

                <p>Total Value is => {this.renderTotalValue()}</p>

            </div>
        )
    }

}

