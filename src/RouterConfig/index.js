import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeContainer from '../Container/Home';
import LoginContainer from '../Container/Login';
import UserContainer from '../Container/User';

import HeaderComponents from '../Components/Header';
import FooterComponents from '../Components/Footer';
const RouterConfigCompo = ()=>{
    return (
        <>
        
            <BrowserRouter>
            <HeaderComponents />
                <Routes>
                    <Route path="/" element={<HomeContainer />} />
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/user" element={<UserContainer />} />
                </Routes>
                <FooterComponents />
            </BrowserRouter>
        </>
    )
}
export default RouterConfigCompo;