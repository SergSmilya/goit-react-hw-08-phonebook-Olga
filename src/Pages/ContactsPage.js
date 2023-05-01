import { viewContacts } from 'Redux/Contacts/ContactsSelectors';
import { filterValue } from 'Redux/Filter/FilterSelectors';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Input from 'components/Input/Input';
import { useSelector } from 'react-redux';

export default function ContactsPage() {
  const contacts = useSelector(viewContacts);
  const filter = useSelector(filterValue);
  function onFilter() {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }
  return (
    <>
      <h2>Contacts</h2>
      <Input />
      <Filter />
      <Contacts contacts={onFilter()} />
    </>
  );
}
