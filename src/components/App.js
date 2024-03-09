import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom';

import Menu from './Menu';
import TNTT from './TNTT';
import FC from './FC';
import Footer from './Footer';

export default function App() {
    return (
        <div className='XCAgeCalculator'>
            <Menu />
            <Routes>
                <Route path='' element={<Navigate to='Age-Calculator/tntt' />} />
                <Route path='Age-Calculator/tntt' element={<TNTT />} />
                <Route path='Age-Calculator/fc' element={<FC />} />
                <Route path='*' element={<Navigate to='Age-Calculator/tntt' />} />
            </Routes>
            <Footer />
        </div>
    );
}