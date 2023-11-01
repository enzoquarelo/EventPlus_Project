import React from 'react';
import './Titulo.css'

const Titulo = (props) => {
    return (
        <div>
            <h1 className='titulo'>Bem-vindo à {props.nomePage}</h1>
        </div>
    );
};

export default Titulo;