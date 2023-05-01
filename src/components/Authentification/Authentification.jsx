import { NavLink } from 'react-router-dom';

export default function Authentification() {
  return (
    <ul>
      <li>
        <NavLink to="/login">LogIn</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  );
}
