import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ManageList from './CRUD/ManageList';
import CreatItem from './CRUD/CreateList';
import DeleteItem from './CRUD/DeleteItem';


export default function RouterCont(props) {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path='/' element={<ManageList />} exact />
                <Route path='/details/:action' element={<CreatItem />} />
                <Route path='/delete' element={<DeleteItem />} /> */}
                <Route exact path="/" component={ManageList} />
                <Route path="/details/:action" component={CreatItem} />
                <Route path="/delete" component={DeleteItem} />
            </Switch>
        </BrowserRouter>
    )
}