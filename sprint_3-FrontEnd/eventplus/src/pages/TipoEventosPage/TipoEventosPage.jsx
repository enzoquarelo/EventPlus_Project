import React, { useEffect, useState } from "react";
import "./TipoEventosPage.css";

import MainContent from "../../components/Main/MainContent";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator"
import tipoEventoImage from "../../assets/images/tipo-evento.svg"
import Titulo from "../../components/Titulo/Titulo";
import Container from "../../components/Container/Container";

const TipoEventosPage = () => {
  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
              <div className="cadastro-evento__box">
                <Titulo titleText={"Cadastro Tipo de Eventos"} />

                <ImageIllustrator imageRender={tipoEventoImage}/>

                <form action="ftipo-evento">
                  <p>Formulário será criado aqui</p>
                </form>
              </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TipoEventosPage;
