import React from "react";
import { Link } from "react-router-dom";
const users = {
    0: { name: "Donald Duck" },
    1: { name: "Mickey Mouse" },
    2: { name: "Goofy" }
  };
export default function UserView(props) {
    return (
        <React.Fragment>
            <Link to="/">Back to user list</Link>
            <h2>{users[props.userId].name}</h2>
            <Link to={`${props.match.url}/one`}>Tab 1</Link>
            <Link to={`${props.match.url}/two`}>Tab 2</Link>
            <Link to={`${props.match.url}/three`}>Tab 3</Link>
            <div>{props.children}</div>
        </React.Fragment>
    );
};