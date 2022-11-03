import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Profile from './components/Profile'

import React from 'react'
import Nav from "./components/Nav";

function RouteSwitch() {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch