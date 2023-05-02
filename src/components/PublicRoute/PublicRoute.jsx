import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { loggedIn } from 'Redux/Auth/AuthSelectors';

export default function PublicRoute({
  component: Component,
  redirectedTo = '/',
}) {
  const { state } = useLocation();

  const isLoggedIn = useSelector(loggedIn);
  return isLoggedIn ? (
    <Navigate to={state ? state : redirectedTo} />
  ) : (
    <Component />
  );
}
