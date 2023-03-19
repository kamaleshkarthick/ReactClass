import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from './App';
import UserView from './UserView';

const TabOne = props => `Tab One for ${users[props.userId].name}`;
const TabTwo = props => `Tab Two for ${users[props.userId].name}`;
const TabThree = props => `Tab Three for ${users[props.userId].name}`;

const users = {
    0: { name: "Donald Duck" },
    1: { name: "Mickey Mouse" },
    2: { name: "Goofy" }
};

export default function Routers(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <App>
                        <Route path="/" component={App} exact />
                        <Route
                            path="/user/:id"
                            render={userProps => (
                                <UserView
                                    match={userProps.match}
                                    userId={userProps.match.params.id}
                                >
                                    <Route
                                        path={`${userProps.match.url}/one`}
                                        render={props => <TabOne userId={userProps.match.params.id} />}
                                    />
                                    <Route
                                        path={`${userProps.match.url}/two`}
                                        render={props => <TabTwo userId={userProps.match.params.id} />}
                                    />
                                    <Route
                                        path={`${userProps.match.url}/three`}
                                        render={props => (
                                            <TabThree userId={userProps.match.params.id} />
                                        )}
                                    />
                                </UserView>
                            )}
                        />
                    </App>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}