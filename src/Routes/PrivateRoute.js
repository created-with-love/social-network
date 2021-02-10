import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getAuthStatus } from 'redux/selectors';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(getAuthStatus);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
