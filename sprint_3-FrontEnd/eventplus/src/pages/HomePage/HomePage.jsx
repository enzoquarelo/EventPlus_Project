import React from 'react';
import Titulo from '../../components/Titulo/Titulo';

const HomePage = () => {
    return (
        <div>
            <Titulo 
                titleText={"Página Home"}
                color="/"
                additionalClass="margim-acima"
            />
        </div>
    );
};

export default HomePage;