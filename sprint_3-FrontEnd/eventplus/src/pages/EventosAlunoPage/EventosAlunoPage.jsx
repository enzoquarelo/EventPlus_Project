import React, { useContext, useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import Title from "../../components/Title/Title";
import Table from "./TableEvA/TableEvA";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api, {eventsResource,eventPresencesResource} from "../../services/service";

import "./EventosAlunoPage.css";
import { UserContext } from "../../context/AuthContext";

const EventosAlunoPage = () => {
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [eventos, setEventos] = useState([]);

  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, text: "Todos os eventos" },
    { value: 2, text: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState('1');
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { userData, setUserData } = useContext(UserContext);
  
  async function loadEventsType() {
    if (tipoEvento === "1") {
      try {

        const retornoEventos = await api.get(eventsResource);
        const myEventsResponse = await api.get(`${eventPresencesResource}/ListarMinhas/${userData.id}`);

        const eventosMarcados = verifyPresence(retornoEventos.data, myEventsResponse.data);
        
        setEventos(eventosMarcados)
        
        console.clear()

        console.log("Todos Eventos")
        console.log(retornoEventos.data);
        console.log("Meus Eventos")
        console.log(myEventsResponse.data);
        console.log("Eventos Marcados")
        console.log(eventosMarcados);

      } catch (error) {

        console.log("Erro na API");
        console.log(error);

      }
    } 
    else {
      try {
        
        const myEventsResponse = await api.get(`${eventPresencesResource}/ListarMinhas/${userData.id}`);
        const events = myEventsResponse.data.map((myevents) => {

          const idEvento = myevents.evento.idEvento;
          const nomeEvento = myevents.evento.nomeEvento;
          const dataEvento = myevents.evento.dataEvento;

          return {
            idEvento,
            nomeEvento,
            dataEvento,
            situacao: true,
          };

        });

        setEventos(events);

      } catch (error) {

        console.log("Erro na API");
        console.log(error);
        
      }
    }
  }


  useEffect(() => {
    loadEventsType();
  }, [tipoEvento]);

  const verifyPresence = (arrAllEvents, eventsUser) => {
    for (let x = 0; x < arrAllEvents.length; x++) {
      arrAllEvents[x].situacao = false;
      for (let i = 0; i < eventsUser.length; i++) {
        if(arrAllEvents[x].idEvento === eventsUser[i].idEvento){
          arrAllEvents[x].situacao = true;
          arrAllEvents[x].idPresencaEvento = eventsUser[i].idPresencaEvento;
          break;
        }
      }
    }

    return arrAllEvents;
  }

  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    return "????";
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  

  async function handleConnect(eventId, situacao, presenceId = null) {
    if (situacao === false) {
      try {
        const promise =  await api.post(eventPresencesResource, {
          situacao : true,
          idUsuario: userData.id,
          idEvento: eventId
        });

        loadEventsType();
      } catch (error) {
        console.log("Erro na API");
        console.log(error);
      } 
    }
    else {
      try {
        await api.delete(`${eventPresencesResource}/${presenceId}`)

        loadEventsType();
      } catch (error) {
        console.log("Erro na API");
        console.log(error);
      }
    }
  }
  return (
    <>
      <Main>
        <Container>
          <Title text={"Eventos"} className="custom-title" />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            options={quaisEventos} 
            handleChange={(e) => {
              myEvents(e.target.value);
            }}
            value={tipoEvento}
            additionalClassNmae="select-tp-evento"
          />
          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal();
            }}
          />
        </Container>
      </Main>

      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
