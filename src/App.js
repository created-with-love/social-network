import DialogsContainer from 'components/Dialogs/DialogsContainer';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';
import Container from './components/Container/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeaderContainer from './components/Header';
import PublicRoute from 'Routes/PublicRoute';
import PrivateRoute from 'Routes/PrivateRoute';
import Loader from 'components/Loader/Loader';
import { getCurrentUserThunk } from 'redux/reducers/authReducer';
import SignUp from 'components/SignUp';
import Login from 'components/Login';

const ProfileContainer = lazy(() =>
  import('./components/Profile/Profile.container'),
);
const UsersAPIComponent = lazy(() => import('./components/Users'));

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCurrentUserThunk);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <Container>
            <PrivateRoute path="/profile/:userId?">
              <ProfileContainer />
            </PrivateRoute>

            <PrivateRoute path="/dialogs">
              <DialogsContainer />
            </PrivateRoute>

            <PrivateRoute path="/users">
              <UsersAPIComponent />
            </PrivateRoute>

            <PublicRoute path="/signup" restricted>
              <SignUp />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <Login />
            </PublicRoute>
          </Container>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
