import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './Register/Register';
import LogIn from './LogIn/LogIn';
import { loggedIn } from 'Redux/Auth/AuthSelectors';
import LogOutBtn from './LogOutBtn/LogOutBtn';
import { refreshUser } from 'Redux/Auth/AuthOperations';
import { NavLink, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import ContactsPage from 'Pages/ContactsPage';
import Authentification from './Authentification/Authentification';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <div
      // style={{
      //   height: '100vh',
      //   display: 'block',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 20,
      //   color: '#010101',
      // }}
      >
        <NavLink to="/">Welcome to Phonebook!</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {isLoggedIn ? <LogOutBtn /> : <Authentification />}
      </div>
      <>
        <Routes>
          <Route path="/" element="Home " />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </>
    </>
  );
}
