import React, { useEffect, useState } from "react";
import "./MaisSobreEventosPage.css";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import TableEvent from "./TableEvent/TableEvent";
import Container from "../../components/Container/Container";
import api, { comentaryEventResource } from "../../services/service";
import Spinner from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";

const MaisSobreEventosPage = () => {
  const [eventos, setEventos] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const { idEvent } = useParams();

  const [nomeDoEvento, setNomeDoEvento] = useState(""); // Adicionado estado para armazenar o nome do evento

  useEffect(() => {
    async function loadEvents() {
      setShowSpinner(true);

      try {
        const response = await api.get(`${comentaryEventResource}/${idEvent}`);
        const eventosData = response.data;
        setEventos(eventosData);

        // Adicionado a atualização do nome do evento
        if (eventosData.length > 0) {
          setNomeDoEvento(eventosData[0].nomeEvento);
        }
      } catch (error) {
        console.error("Erro na API", error);
      }

      setShowSpinner(false);
    }

    loadEvents();
  }, [idEvent]);

  return (
    <MainContent>
      <Container>
        <Title titleText={"Mais Sobre Eventos"} additionalClass="custom-title" />
        {showSpinner ? (
          <Spinner />
        ) : (
          <TableEvent dados={eventos} />
        )}
      </Container>
    </MainContent>
  );
};

export default MaisSobreEventosPage;