import React from "react";


export default class SayMyName extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidUpdate(prevProps) {
        console.log(prevProps.name + "********" + this.props.name)
    }

    render() {
        return (
            <h1> {this.props.name}  <button onClick={() => this.props.handleNameChange("Kamal")}>Change me</button></h1>
        )
    }
}



// export default function SayMyName(props) {
//     return (
//         <h1> {props.name}  </h1>
//     )
// }