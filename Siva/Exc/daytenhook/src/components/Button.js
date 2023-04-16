import React from "react";

export default function Button (props){
    //console.log("Button Component renders")
    return(
        <button onClick={props.handleclick}>Submit</button>
    )
}