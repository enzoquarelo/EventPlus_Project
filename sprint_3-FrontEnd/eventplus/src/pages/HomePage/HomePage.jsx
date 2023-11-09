import React, { useState } from "react";
import axios from "axios";
import "./HomePage.css";

import MainContent from "../../components/Main/MainContent";
import Banner from "../../components/Banner/Banner";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Titulo from "../../components/Titulo/Titulo";
import NextEvent from "../../components/NextEvent/NextEvent";
import Container from "../../components/Container/Container";

const HomePage = () => {
  const [nextEvents, setNextEvents] = useState([
    {idEvent: 1,title: "SQL Server",description: "Evento legal com o Carlão", eventDate: "10/11/2023",},
    {idEvent: 1,title: "React.js",description: "Evento desafiador com o Edu", eventDate: "12/11/2023",}
  ]); //dados mocados

  return (
    <MainContent>
      <Banner />

      {/* PRÓXIMOS EVENTOS */}
      <section className="proximos-eventos">
        <Container>
          <Titulo titleText={"Próximos Eventos"} />

          <div className="events-box">
            {
                nextEvents.map((event) => {
                    return(
                        <NextEvent
                        title={event.title}
                        description={event.description}
                        eventDate={event.eventDate}
                        idEvent={event.idEvent}
                        />
                    );
                })
            }
          </div>
        </Container>
      </section>

      <VisionSection />
      <ContactSection />
    </MainContent>
  );
};

export default HomePage;
