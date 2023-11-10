import React from 'react';
import './VisionSection.css';
import Titulo from '../Titulo/Titulo';

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className='vision__box'>
                <Titulo titleText={"Visão"} color='white' />
                <p className='vision__text'>A escola, além de ser um ambiente educacional, também dispõe eventos para os alunos com diversos temas relacionados à área de TI. Para se adequar ao mercado e agilizar seus processos internos, a empresa deseja implantar sistemas em seus procedimentos.</p>
            </div>
        </section>
    );
};

export default VisionSection;