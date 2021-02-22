import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthFetching } from 'redux/selectors';

import './App.scss';
import Container from './components/Container/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeaderContainer from './components/Header';
import PublicRoute from 'Routes/PublicRoute';
import PrivateRoute from 'Routes/PrivateRoute';
import Loader from 'components/Loader/Loader';
import { getCurrentUserThunk } from 'redux/reducers/authReducer';

const ProfileContainer = lazy(() =>
  import('./components/Profile/Profile.container'),
);
const UsersAPIComponent = lazy(() => import('./components/Users'));

const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer'),
);

const SignUp = lazy(() => import('components/SignUp'));
const Login = lazy(() => import('components/Login'));

function App() {
  const dispatch = useDispatch();
  const isUserDataFetching = useSelector(getAuthFetching);

  React.useEffect(() => {
    dispatch(getCurrentUserThunk);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        {isUserDataFetching ? (
          <Loader />
        ) : (
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
        )}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
