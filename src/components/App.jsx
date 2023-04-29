import { useEffect } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Input from './Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'Redux/Contacts/ContactsOperations';
import Auth from './Register/Register';
import LogIn from './LogIn/LogIn';
import { loggedIn } from 'Redux/Auth/AuthSelectors';
import LogOutBtn from './LogOutBtn/LogOutBtn';
import { filterValue } from 'Redux/Filter/FilterSelectors';
import { viewContacts } from 'Redux/Contacts/ContactsSelectors';
import { refreshUser } from 'Redux/Auth/AuthOperations';

export function App() {
  const contacts = useSelector(viewContacts);
  const filter = useSelector(filterValue);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedIn);

  useEffect(() => {
    dispatch(refreshUser());
    isLoggedIn && dispatch(fetchAllContacts());
  }, [dispatch, isLoggedIn]);

  function onFilter() {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Auth />
      {isLoggedIn ? <LogOutBtn /> : <LogIn />}
      <h1>Phonebook</h1>

      <Input />

      <Filter />

      <Contacts contacts={onFilter()} />
    </div>
  );
}
