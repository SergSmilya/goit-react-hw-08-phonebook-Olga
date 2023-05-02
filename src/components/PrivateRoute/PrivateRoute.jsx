import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { loggedIn, refreshing } from 'Redux/Auth/AuthSelectors';

export default function PrivateRoute({
  component: Component,
  redirectedTo = '/',
}) {
  const location = useLocation();
  const isLoggedIn = useSelector(loggedIn);
  const isRefreshing = useSelector(refreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={redirectedTo} state={location} />
  ) : (
    <Component />
  );
}
