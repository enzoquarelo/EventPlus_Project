import React, { useContext, useEffect, useState } from "react";
import "./MaisSobreEventosPage.css";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import Table from "./TableEvent/TableEvent";
import Container from "../../components/Container/Container";
import api, { previousEventResource } from "../../services/service";
import Notification from "../../components/Notification/Notification";
import Spinner from "../../components/Spinner/Spinner";

const EventosAlunoPage = () => {
  const [eventos, setEventos] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    async function loadEvents() {
      setShowSpinner(true);
  
      try {
        const response = await api.get(previousEventResource);
        
        const eventosData = response.data; 
        setEventos(eventosData);
      } catch (error) {
        console.log("Erro na API");
        console.log(error);
      }
  
      setShowSpinner(false);
    }
  
    loadEvents();
  }, []);

  return (
    <>
      <MainContent>
        <Container>
          <Title
            titleText={"Mais Sobre Eventos"}
            additionalClass="custom-title"
          />

          <Table dados={eventos} />
        </Container>
      </MainContent>

      {showSpinner ? <Spinner /> : null}
    </>
  );
};

export default EventosAlunoPage;
