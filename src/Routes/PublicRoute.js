import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getAuthStatus } from 'redux/selectors';

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLoggedIn = useSelector(getAuthStatus);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/profile" /> : children}
    </Route>
  );
};

export default PublicRoute;
