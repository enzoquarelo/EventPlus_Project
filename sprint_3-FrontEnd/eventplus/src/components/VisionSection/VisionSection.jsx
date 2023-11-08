import React from 'react';
import './VisionSection.css';
import Titulo from '../Titulo/Titulo';

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className='vision__box'>
                <Titulo titleText={"Visão"} color='white' />
                <p className='vision__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque, aperiam nihil maiores perspiciatis illum facere atque dolores asperiores ab iure nemo blanditiis quo. Culpa ut ducimus vel molestiae temporibus!</p>
            </div>
        </section>
    );
};

export default VisionSection;