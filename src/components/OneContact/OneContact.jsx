import { deleteContacts } from 'Redux/Contacts/ContactsOperations';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';

export default function OneContact({ contacts }) {
  const dispatch = useDispatch();

  const { id, name, number } = contacts;
  return (
    <li>
      <div>
        {name}: {number}
      </div>
      <Button
        colorScheme="purple"
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </Button>
    </li>
  );
}
