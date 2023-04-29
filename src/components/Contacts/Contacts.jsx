import OneContact from 'components/OneContact/OneContact';

export default function Contacts({ contacts }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contacts => (
          <OneContact key={contacts.id} contacts={contacts} />
        ))}
      </ul>
    </>
  );
}
