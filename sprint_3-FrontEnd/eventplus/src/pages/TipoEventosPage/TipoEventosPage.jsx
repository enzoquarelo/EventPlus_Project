import React, { useEffect, useState } from "react";
import "./TipoEventosPage.css";

// Importando componentes
import Titulo from "../../components/Titulo/Titulo";
import MainContent from "../../components/Main/MainContent";
import Container from "../../components/Container/Container";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import { Button, Input } from "../../components/FormComponents/FormComponents";
import api, { eventsTypeResource } from "../../services/service";
import TableTp from "./TableTp/TableTp";
import Notification from "../../components/Notification/Notification";

import tipoEventoImage from "../../assets/images/tipo-evento.svg";

const TipoEventosPage = () => {
  // states
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [tipoEventos, setTipoEventos] = useState([]);
  const [notifyUser, setNotifyUser] = useState([]);

  useEffect(() => {
    // define a chamada em nossa api
    async function loadEventsType() {
      try {
        const retorno = await api.get(eventsTypeResource);
        setTipoEventos(retorno.data);
        console.log(retorno.data);
      } catch (error) {
        console.log("Erro na api");
        console.log(error);
      }
    }
    // chama a função/api no carregamento da página/componente
    loadEventsType();
  }, []);

  function notificationAlert() {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote: `Avento excluido com sucesso`,
      imgIcon: "success",
      imgAlt:
        "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação",
      showMessage: true,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault(); //evita o submit do formulário
    if (titulo.trim().length < 3) {
      alert("O título deve ter pelo menos 3 caracteres");
    }

    try {
      const retorno = await api.post(eventsTypeResource, {
        titulo: titulo,
      });

      setTitulo("");

      alert("Cadastrado com sucesso");
      console.log(retorno);
    } catch (error) {
      alert("Deu ruim no submit");
    }
  }

  /********************* EDITAR CADASTRO *********************/
  // mostra o formulário de edição
  function showUpdateForm() {
    alert("Vamos mostrar o formulário de edição");
  }
  // cancela a tela/ação de edição (volta para o form de cadastro)
  function editActionAbort() {
    alert("Cancelar a tela de edição de dados");
  }
  // cadastrar a atualização na api
  async function handleUpdate() {
    try {
      const promise = await api.delete(`${eventsTypeResource}/${idElement}`);
      if (promise.status == 204) {
        alert("Cadastro apagado com sucesso!");

        const buscaEventos = await api.get(eventsTypeResource);

        setTipoEventos(buscaEventos.data);
      }
    } catch (error) {
      console.log("Problemas ao apagar o elemento!");
    }
  }

  // apaga o tipo de evento na api
  async function handleDelete(idElement) {
    try {
      const promise = await api.delete(`${eventsTypeResource}/${idElement}`);
      if (promise.status == 204) {
        alert("Cadastro apagado com sucesso!");

        const buscaEventos = await api.get(eventsTypeResource);

        setTipoEventos(buscaEventos.data);
      }
    } catch (error) {
      console.log("Problemas ao apagar o elemento!");
    }
  }
  return (
    <>
      <MainContent>
        {/* formulário de cadastro do tipo do evento */}
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Titulo titleText={"Cadastro Tipo de Eventos"} />

              <ImageIllustrator imageRender={tipoEventoImage} />

              <form
                className="ftipo-evento"
                onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {/* cadastrar ou editar? */}
                {!frmEdit ? (
                  // Cadastrar
                  <>
                    <Input
                      id="Titulo"
                      placeholder="Título"
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      fnManipulator={(e) => {
                        setTitulo(e.target.value);
                      }}
                    />
                    <Button
                      textButton="Cadastrar"
                      id="cadastrar"
                      name="cadastrar"
                      type="submit"
                    />

                    <Button
                      textButton="Notify"
                      id="notify"
                      name=""
                      type="submit"
                      fnManipulator={notificationAlert}
                    />
                  </>
                ) : (
                  // Editar
                  <p>Tela de Edição</p>
                )}
              </form>
            </div>
          </Container>
        </section>

        {/* Listagem de tipo de eventos */}
        <section className="lista-eventos-section">
          <Container>
            <Titulo titleText={"Lista Tipo de Eventos"} color="white" />

            <TableTp
              dados={tipoEventos}
              fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </MainContent>

      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
    </>
  );
};

export default TipoEventosPage;
