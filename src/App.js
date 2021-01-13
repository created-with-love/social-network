import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Container from './components/Container/Container';
import Dialogs from './components/Dialogs';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Container>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
