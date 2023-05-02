import { loggedIn } from 'Redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const isLoggedIn = useSelector(loggedIn);

  return (
    <>
      <h1>Hi! Welcome to the Phonebook!</h1>
      {isLoggedIn ? (
        <p>
          You are successfuly logged in!
          <br />
          Enjoy your <b>Phonebook</b>!
        </p>
      ) : (
        <p>Please, log in!</p>
      )}
    </>
  );
}
