import React from "react";

export default function Count (props){
    //console.log("Count Component renders")
    return(
        <h1>{props.title} =>  {props.value}</h1>
    )
}