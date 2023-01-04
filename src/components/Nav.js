import { Route, Routes, Link } from 'react-router-dom';
import Booking from './BookingPage';
// import Dropdown from 'react-bootstrap/Dropdown';

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link id="nav" to="/">
            Home
          </Link>{' '}
        </li>
        <li>
          <a id="nav" href="#">
            About
          </a>
        </li>
        <li>
          <a id="nav" href="#">
            Menu
          </a>
        </li>
        <li>
          {' '}
          <Link id="nav" to="/BookingPage">
            Reservations
          </Link>{' '}
        </li>
        <li>
          <a id="nav" href="#">
            Order Online
          </a>
        </li>
        <li>
          <a id="nav" href="#">
            Login
          </a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
