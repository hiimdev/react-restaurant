import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './page/Home/Home';
import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
                <ScrollToTop />
            </div>
        </BrowserRouter>
    );
};
export default App;
