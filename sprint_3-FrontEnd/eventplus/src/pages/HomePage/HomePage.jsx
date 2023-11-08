import React from 'react';
import './HomePage.css'

import MainContent from '../../components/Main/MainContent';
import Banner from '../../components/Banner/Banner'
import VisionSection from '../../components/VisionSection/VisionSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import Titulo from '../../components/Titulo/Titulo';
import NextEvent from '../../components/NextEvent/NextEvent';
import Container from '../../components/Container/Container';

const HomePage = () => {
    return (
        <MainContent>
            <Banner/>
            <section className='proximos-eventos'>
                <Container>
                    <Titulo titleText={'Próximos Eventos'} />

                    <div className='events-box'>
                        <NextEvent/>
                        <NextEvent/>
                        <NextEvent/>
                    </div>
                </Container>
            </section>

            <VisionSection/>
            <ContactSection/>
        </MainContent>
    );
};

export default HomePage;