import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from 'Redux/Auth/AuthSelectors';
import { refreshUser } from 'Redux/Auth/AuthOperations';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'Pages/ContactsPage';
import LogIn from 'Pages/LoginPage';
import Register from 'Pages/RegisterPage';
import HomePage from 'Pages/HomePage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<PublicRoute component={LogIn} />} />

          <Route
            path="/register"
            element={<PublicRoute component={Register} />}
          />

          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
        </Route>
      </Routes>
    </>
  );
}
