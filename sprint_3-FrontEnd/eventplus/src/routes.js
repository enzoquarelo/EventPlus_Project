import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import TiposEventoPage from './pages/TiposEventoPage/TiposEventoPage'
import EventosPage from './pages/EventosPage/EventosPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import TestePage from './pages/TestePage/TestPage';
import Footer from './components/Footer/Footer';

const RouteView = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route element={ <HomePage/> } path="/" exact/>
                <Route element={ <EventosPage/> } path="/eventos"/>
                <Route element={ <TiposEventoPage/> } path="/tipo-eventos"/>
                <Route element={ <LoginPage/> } path="/login"/>
                <Route element={ <TestePage/> } path="/testes"/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default RouteView;