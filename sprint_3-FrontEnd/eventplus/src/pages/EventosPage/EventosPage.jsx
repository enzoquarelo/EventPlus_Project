import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";

import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import MainContent from "../../components/Main/MainContent";
import Titulo from "../../components/Titulo/Titulo";
import eventoImage from "../../assets/images/evento.svg";
import { Button, Input } from "../../components/FormComponents/FormComponents";
import { Select } from "../../components/FormComponents/FormComponents";
import TableEvents from "../../pages/EventosPage/TableEvents/TableEvents";
import api, {
  eventsResource,
  eventsTypeResource,
} from "../../services/service";
import Spinner from "../../components/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";

const EventosPage = () => {
  //STATES
  const [frmEdit, setFrmEdit] = useState(false); 
  const [eventos, setEventos] = useState([]);
  const [nome, setNome] = useState();
  const [optionsTipoEventos, setOptionsTipoEvento] = useState([]);
  const [editingEventType, setEditingEventType] = useState({});
  const [descricao, setDescricao] = useState();
  const [tipoEventos, setTipoEventos] = useState([]); 
  const [date, setDate] = useState();
  const [notifyUser, setNotifyUser] = useState();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    async function loadEventsType() {
      setShowSpinner(false);

      try {

        const retorno = await api.get(eventsTypeResource);
        setOptionsTipoEvento(retorno.data);
        console.log(retorno.data);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
    }

    loadEventsType();
  }, []);
  useEffect(() => {
    async function loadEvents() {
      try {
        const retorno = await api.get(eventsResource);
        setEventos(retorno.data);
        console.log(retorno);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
    }
    loadEvents();
  }, []);

  async function handleSubmit(e) {
    // e.preventDefault();
    //   try{
    //     const instituicaoEvento = await api.post(instituicaoResource);
    //     const retorno = await api.get(eventResource, {
    //     nomeEvento: nome,
    //     descricao: descricao,
    //     dataEvento: date,
    //     idTipoEvento: tipoEventos,
    //     idInstituicao: instituicaoEvento.idInstituicao,
    //   });
    // }catch(error){
    //   setNotifyUser({
    //     titleNote: "Erro",
    //     textNote: `Erro na operacao. por favor verifique a conexao`,
    //     imgIcon: "danger",
    //     imgAlt:
    //       "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
    //     showMessage: true,
    //   });
    // }
  }

  async function handleUpdate() {}


  async function showUpdateForm(elementId, elementTitle, elementDescricao, elementTipoEventos, elementDate) {
    setFrmEdit(true);
    setEditingEventType({
      id: elementId,
      setNome: elementTitle,
      setDescricao: elementDescricao,
      setTipoEventos: elementTipoEventos,
      setDate: elementDate,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  function editActionAbort() {
    setFrmEdit(false);
    setNome("");
    setEventos(null);
  }


  async function handleDelete(idElement) {
    if (window.confirm("Confirma a exclusão?")) {
      try {
        const caminho = await api.delete(`${eventsResource}/${idElement}`);

        console.log(idElement);

        if (caminho.status == 204) {
          setNotifyUser({
            titleNote: "Sucesso",
            textNote: `Excluido com sucesso`,
            imgIcon: "Success",
            imgAlt:
              "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
            showMessage: true,
          });

          const buscaEventos = await api.get(eventsResource);
          setEventos(buscaEventos.data);
        }
      } catch (error) {
        setNotifyUser({
          titleNote: "Erro",
          textNote: `Erro no delete`,
          imgIcon: "danger",
          imgAlt:
            "Imagem de ilustração de sucesso. Moça segurando um balão com simbolo d confirmação",
          showMessage: true,
        });
        console.log(error);
      }
    }
  }

  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Titulo titleText={"Cadastro de Eventos"} />
              <ImageIllustrator imageRender={eventoImage} />
              {!frmEdit ? (
                <>
                  <form className="ftipo-evento" onSubmit={handleSubmit}>
                    <Input
                      id="Nome"
                      placeholder="Nome"
                      name={"nome"}
                      type={"text"}
                      required={"required"}
                      fnManipulator={(e) => {
                        setNome(e.target.value);
                      }}
                    />
                    <Input
                      id="Descrição"
                      placeholder="Descrição"
                      name={"descrição"}
                      type={"text"}
                      required={"required"}
                      fnManipulator={(e) => {
                        setDescricao(e.target.value);
                      }}
                    />
                    <Input
                      id="Data"
                      placeholder="Data"
                      name={"data"}
                      type={"date"}
                      required={"required"}
                      fnManipulator={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                    <Select
                      id="TipoEvento"
                      name={"tipoEventos"}
                      required={"required"}
                      value={tipoEventos}
                      fnManipulator={(e) => {
                        setTipoEventos(e.target.value);
                      }}
                      options={optionsTipoEventos}
                    />
                    <Button
                      textButton="Cadastrar"
                      id="cadastrar"
                      name="cadastrar"
                      type="submit"
                    />
                  </form>
                </>
              ) : (
                <>
                  <form className="ftipo-evento" onSubmit={handleSubmit}>
                    <Input
                      id="Nome"
                      placeholder="Nome"
                      name={"nome"}
                      value={nome}
                      type={"text"}
                      required={"required"}
                      fnManipulator={(e) => {
                        setNome(e.target.value);
                      }}
                    />
                    <Input
                      id="Descrição"
                      placeholder="Descrição"
                      name={"descrição"}
                      type={"text"}
                      required={"required"}
                      fnManipulator={(e) => {
                        setDescricao(e.target.value);
                      }}
                    />
                      <Select
                        id="TipoEvento"
                        name={"tipoEventos"}
                        required={"required"}
                        value={tipoEventos}
                        fnManipulator={(e) => {
                          setTipoEventos(e.target.value);
                        }}
                        options={optionsTipoEventos}
                      />
                    <Input
                      id="Data"
                      placeholder="Data"
                      name={"data"}
                      type={"date"}
                      required={"required"}
                      fnManipulator={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                    <div className="buttons-editbox">
                      <Button
                        textButton="Atualizar"
                        name="atualizar"
                        id="atualizar"
                        additionalClassName="button-component--middle"
                      />
                      <Button
                        textButton="Cancelar"
                        name="SendButton"
                        id="SendButton"
                        handleClick={editActionAbort}
                        additionalClassName="button-component--middle"
                      />
                    </div>
                  </form>
                </>
              )}
            </div>
          </Container>

          <section className="lista-eventos-section">
            <Container>
              <Titulo titleText={"Lista de eventos"} color="white" />
              <TableEvents
                dados={eventos}
                fnUpdate={showUpdateForm}
                fnDelete={handleDelete}
              />
            </Container>
          </section>
        </section>
      </MainContent>
    </>
  );
};

export default EventosPage;
