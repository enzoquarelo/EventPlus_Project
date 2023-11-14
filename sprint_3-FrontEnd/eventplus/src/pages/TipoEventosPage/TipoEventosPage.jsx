import React, {useState } from "react";
import api, {eventsTypeResource} from "../../services/service";
import "./TipoEventosPage.css";

import MainContent from "../../components/Main/MainContent";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator"
import tipoEventoImage from "../../assets/images/tipo-evento.svg"
import Titulo from "../../components/Titulo/Titulo";
import Container from "../../components/Container/Container";

import { Button, Input } from '../../components/FormComponents/FormComponents'

const TipoEventosPage = () => {
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo, setTitulo] = useState(""); //está em edição?

  function handleUpdate() {
    alert("Bora editar");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (titulo.trim().length < 3) {
      alert("Digite mais que 3 caracteres")
    }

    try {
      const retorno = await api.post(eventsTypeResource, {
        titulo:titulo
      })
      
      alert('Deu bom')
    } catch (error) {
      alert('Deu ruim no submit')
    }
  }

  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento__box">
              <Titulo titleText={"Cadastro tipo de eventos"} />
              <ImageIllustrator imageRender={tipoEventoImage} />
              <form
                className="ftipo-evento"
                onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {!frmEdit ? (
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

                    <Button textButton="Cadastrar" id={"cadastrar"} name={"cadastrar"} type="submit" />
                  </>
                ) : (
                  <p> Tela de Edição</p>
                )}
              </form>
            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventosPage;
