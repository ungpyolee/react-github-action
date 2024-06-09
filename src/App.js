import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './features/cart/Cart';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<div>Home Page</div>} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default App;
