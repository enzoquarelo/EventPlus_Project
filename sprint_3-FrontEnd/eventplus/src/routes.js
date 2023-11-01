import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import EventosPage from "./Pages/EventosPage/EventosPage";
import HomePage from "./Pages/HomePage/HomePage";
import TipoEventosPage from "./Pages/TipoEventosPage/TipoEventosPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import TestePage from "./Pages/TestePage/TestePage";

import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";


const Rotas = () => {
  return (
    <BrowserRouter>
        <Header />
            <Routes>
                <Route element={<HomePage/>} path={"/"} exact/>
                <Route element={<EventosPage/>} path={"/eventos"}/>
                <Route element={<TipoEventosPage/>} path={"/tiposeventos"}/>
                <Route element={<LoginPage/>} path={"/login"}/>
                <Route element={<TestePage/>} path={"/teste"}/>
            </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
