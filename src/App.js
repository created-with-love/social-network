import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Container from './components/Container/Container';
import Dialogs from './components/Dialogs';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import store from './redux/store';

function App() {
  const appState = store.getState();

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Container>
          <Route
            path="/profile"
            render={() => <Profile state={appState.profilePage} />}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={appState.dialogsPage} />}
          />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
