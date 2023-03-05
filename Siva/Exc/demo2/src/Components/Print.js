import React, { Component } from 'react';


export default class Print extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidUpdate(prevProps){
        console.log(prevProps,this.props)
    }

    render() {
        return (
            <div className=''>
                <h1> My Name is { this.props.name }</h1>
                <button onClick={() => this.props.changeMyName("Shiva")}>Send</button>
            </div>
        )
    }
}