import React from "react";

 function Count (props){
    console.log(props.title+" Component renders")
    return(
        <h1>{props.title} =>  {props.value}</h1>
    )
}

export default React.memo(Count)