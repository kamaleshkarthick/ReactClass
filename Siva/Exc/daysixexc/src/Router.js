import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ManageList from './CRUD/ManageList';
import CreatItem from './CRUD/CreateList';
import DeleteItem from './CRUD/DeleteItem';


export default function RouterCont(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ManageList />} />
                <Route path='/create' element={<CreatItem />} />
                <Route path='/delete' element={<DeleteItem />} />
            </Routes>
        </BrowserRouter>
    )
}