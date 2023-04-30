import React from "react";

 function SalaryCount (props){
    console.log(props.title+" Component renders")
    return(
        <h1>{props.title} =>  {props.value}</h1>
    )
}
//export default SalaryCount;
export default React.memo(SalaryCount)