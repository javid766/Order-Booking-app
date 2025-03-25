import React from "react";
import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Offers from "../pages/Offers";

function Navigation(){
    return (

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/offers" element={<Offers/>} />
        </Routes>
    )
}

export default Navigation;