import Authentification from 'components/Authentification/Authentification';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { loggedIn } from 'Redux/Auth/AuthSelectors';

export default function SharedLayout() {
  const isLoggedIn = useSelector(loggedIn);
  return (
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
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          {isLoggedIn ? <UserMenu /> : <Authentification />}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
