import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/Login.js';
import Dashboard from '../components/Dashboard.js';
import styled from '@emotion/styled';

const AppContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const AppHeader = styled.h1({
  display: 'flex',
  alignSelf: 'center'
});

const isLoggedIn = () => {
  const token = localStorage.getItem('x-auth')
  //return if else
  return false;
}

const App = function () {
  return (
  <BrowserRouter>
    <AppContainer>
      <AppHeader>
        NextEra Calculations
      </AppHeader>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AppContainer>
  </BrowserRouter>
    );
};

export default App;
