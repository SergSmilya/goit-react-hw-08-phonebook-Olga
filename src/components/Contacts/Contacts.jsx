import { loggedIn } from 'Redux/Auth/AuthSelectors';
import { fetchAllContacts } from 'Redux/Contacts/ContactsOperations';
import OneContact from 'components/OneContact/OneContact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Contacts({ contacts }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedIn);
  useEffect(() => {
    isLoggedIn && dispatch(fetchAllContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <ul>
      {contacts.map(contacts => (
        <OneContact key={contacts.id} contacts={contacts} />
      ))}
    </ul>
  );
}
