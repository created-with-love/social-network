import DialogsContainer from 'components/Dialogs/DialogsContainer';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Container from './components/Container/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProfileContainer from './components/Profile/Profile.container';
import UsersAPIComponent from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Container>
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/users" component={UsersAPIComponent} />
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
