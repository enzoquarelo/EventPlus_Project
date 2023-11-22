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

import Spinner from '../../components/Spinner/Spinner';

import tipoEventoImage from "../../assets/images/tipo-evento.svg";

const TipoEventosPage = () => {
  // states
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [tipoEventos, setTipoEventos] = useState([]);
  const [editingEventType, setEditingEventType] = useState({})
  const [notifyUser, setNotifyUser] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  function scrollToTable() {
    const table = document.querySelector('table');
    table.scrollIntoView({behavior: 'smooth', block: 'start'});
}

async function loadEventTypes() {
    setShowSpinner(true);

    try {
        const response = await api.get(eventsTypeResource);
        setTipoEventos(response.data);
    } catch(error) {
        notifyError('Houve um error no carregamento de informações. Verifique a sua conexão com a internet!');
    }

    setShowSpinner(false);
}

useEffect(() => {
    loadEventTypes();
}, []);

  function notificationAlert() {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote: `Evento cadastrado com sucesso`,
      imgIcon: "success",
      imgAlt:
        "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação",
      showMessage: true,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault(); //evita o submit do formulário

    setShowSpinner(true);

    if (titulo.trim().length < 3) {
      notifyWarning('O título deve conter ao menos 3 caractéres');
      return;
    }

    try {
      const retorno = await api.post(eventsTypeResource, {
        titulo: titulo,
      });

      setTitulo("");

      console.log(retorno);
    } catch (error) {
      alert("Deu ruim no submit");
    }

    setTitulo('');

    setShowSpinner(false);
  }

  /********************* EDITAR CADASTRO *********************/

  // cadastrar a atualização na api
  async function handleUpdate(e) {
    e.preventDefault();

    setShowSpinner(true);
    
    if (titulo.trim().length < 3) {
        alert('O título deve conter ao menos 3 caractéres')
        return;
    }

    async function update() {
        try {
            await api.put(`${eventsTypeResource}/${editingEventType.id}`, {
                titulo: editingEventType.title
            });

            loadEventTypes();
            notifySuccess('Evento atualizado com sucesso');
            editActionAbort();
            scrollToTable();
        } catch(error) {
            notifyError('Houve um error ao atualizar. Verifique a sua conexão com a internet!');
        }
    }

    update();

    setShowSpinner(false);
  }

  // apaga o tipo de evento na api
  async function handleDelete(idElement) {
    if(!window.confirm("Deseja realmente excluir esse tipo de evento?"))
        return;

        setShowSpinner(true);

    try {
        const promise = await api.delete(`${eventsTypeResource}/${idElement}`)
        setTipoEventos(tipoEventos.filter(type => type.idTipoEvento !== idElement))
        notifySuccess('Evento excluído com sucesso')
        // setEventTypes([]);
    } catch(error) {
        notifyError('Houve um error ao remover um tipo de evento. Verifique a sua conexão com a internet!');
    }

    setShowSpinner(false);
}

function showUpdateForm(elementId, elementTitle) {
  console.log(elementId, elementTitle);
  setFrmEdit(true);
  setTitulo(elementTitle);
  setEditingEventType({
      id: elementId,
      title: elementTitle
  })
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
* Cancela as alterações feitas
*/
function editActionAbort() {
  setFrmEdit(false);
  setTitulo('');
}

function notifySuccess(textNote) {
  setNotifyUser({
      titleNote: "Sucesso",
      textNote,
      imgIcon: 'success',
      imgAlt: 'Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.',
      showMessage: true
  });
}

function notifyError(textNote) {
  setNotifyUser({
      titleNote: "Erro",
      textNote,
      imgIcon: 'danger',
      imgAlt: 'Imagem de ilustração de erro. Homem segurando um balão com símbolo de X.',
      showMessage: true
  });
}

function notifyWarning(textNote) {
  setNotifyUser({
      titleNote: "Aviso",
      textNote,
      imgIcon: 'warning',
      imgAlt: 'Imagem de ilustração de aviso. Mulher em frente a um grande ponto de exclamação.',
      showMessage: true
  });
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

              <form className="ftipo-evento" onSubmit={setFrmEdit ? handleUpdate : handleSubmit}>
                                {
                                    !frmEdit ? 
                                    (
                                        <>
                                            <Input 
                                                id='TitleCreate'
                                                placeholder='Título'
                                                name='titleCreate'
                                                type='text'
                                                value={titulo}
                                                required='required'
                                                fnManipulator={event => {
                                                    setTitulo(event.target.value);
                                                }}
                                            />
                                            <Button
                                                textButton='Cadastrar'
                                                name='SendButton'
                                                id='SendButton'
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <Input 
                                                id='TitleUpdate'
                                                placeholder='Título'
                                                name='titleUpdate'
                                                type='text'
                                                value={titulo}
                                                required='required'
                                                fnManipulator={event => {
                                                    setTitulo(event.target.value);
                                                    setEditingEventType({
                                                        id: editingEventType.id,
                                                        title: event.target.value
                                                    })
                                                }}
                                            />
                                            <div className="buttons-editbox">
                                                <Button
                                                    textButton='Atualizar'
                                                    name='atualizar'
                                                    id='atualizar'
                                                    additionalClassName='button-component--middle'
                                                />
                                                <Button
                                                    textButton='Cancelar'
                                                    name='SendButton'
                                                    id='SendButton'
                                                    handleClick={editActionAbort}
                                                    additionalClassName='button-component--middle'
                                                />
                                            </div>

                                        </>
                                    )
                                }
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
