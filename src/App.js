import DialogsContainer from 'components/Dialogs/DialogsContainer';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Container from './components/Container/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Container>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/users" component={Users} />
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
