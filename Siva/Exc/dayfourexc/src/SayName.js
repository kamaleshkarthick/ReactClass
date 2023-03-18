import React from 'react';


export default function SayName(props) {
    console.log(props.name)
    return (
        <div className='fsfs'>
            <h1>My Name is {props.fullName}</h1>
            {props.name &&
                <div>
                    <p>First Name is {props.name.fistName}</p>
                    <p>Last Name is {props.name.lastName}</p>
                </div>}
        </div>
    )
}

SayName.defaultProps = {
    fullName: "XXX YYYYY",
    name: {
        lastName: "XXXX",
        fistName: "YYYYY"
    }
}
