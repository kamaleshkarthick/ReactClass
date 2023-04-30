import React from "react";

function Button (props){
    console.log("Button Component renders")
    return(
        <button onClick={props.handleclick}>Submit</button>
    )
}
export default React.memo(Button)