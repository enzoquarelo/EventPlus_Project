import React from 'react';
import './Nav.css'

import { Link } from 'react-router-dom';

//import imagens
import logMobile from '../../assets/images/logo-white.svg'
import logDesktop from '../../assets/images/logo-pink.svg'

const Nav = () => {
    return (
        <nav className='navbar'>

            <span className='navbar__close'>X</span>

            <Link href="" className='eventlogo'>
            <img 
                className='eventlogo__logo-image' 
                src={window.innerWidth >= 992 ? logDesktop : logMobile} 
                alt="Event Plus Logo" 
            />
            </Link>

            <div className='navbar__items-box'>
                <Link href="">Home</Link>
                <Link href="">Tipos de Evento</Link>
                <Link href="">Usuarios</Link>
            </div>
            
        </nav>
    );
}

export default Nav;