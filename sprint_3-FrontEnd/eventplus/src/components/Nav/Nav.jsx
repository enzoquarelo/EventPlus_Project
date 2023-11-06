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

            <Link to="/" className='eventlogo'>
            <img 
                className='eventlogo__logo-image' 
                src={window.innerWidth >= 992 ? logDesktop : logMobile} 
                alt="Event Plus Logo" 
            />
            </Link>

            <div className='navbar__items-box'>
                <Link to="/">Home</Link>
                <Link to="/eventos">Eventos</Link>
                <Link to="/tiposeventos">Tipos de Evento</Link>
                <Link to="/login">Login</Link>
                <Link to="/teste">Teste</Link>
            </div>
            
        </nav>
    );
}

export default Nav;