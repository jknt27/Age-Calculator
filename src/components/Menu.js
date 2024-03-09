import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu () {
    // Opening Nav [Later problem :D]
    // const [isOpen, openIt] = useState(false);

    // const openOrClose = () => {
    //     openIt(!isOpen);
    // };

    return (
        <nav className='main-nav navbar'>
            <div className="dropdown">
                <li><img src={require('./img/favicon.png')} alt='A picture of the website logo.' /></li>
                <li><NavLink to='/tntt' className='link'><span className='material-symbols-outlined'>TNTT</span></NavLink></li>
                <li><NavLink to='/fc' className='link'>FC</NavLink></li>
            </div>
        </nav>
    )
}