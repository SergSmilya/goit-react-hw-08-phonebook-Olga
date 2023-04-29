import { useEffect } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Input from './Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'Redux/Contacts/ContactsOperations';
import Auth from './Register/Register';
import LogIn from './LogIn/LogIn';
import { loggedIn } from 'Redux/Selectors';
import LogOutBtn from './LogOutBtn/LogOutBtn';

export function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedIn);

  useEffect(() => {
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
