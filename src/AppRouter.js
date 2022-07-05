import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home>Hello Grommet!</Home>} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default AppRouter