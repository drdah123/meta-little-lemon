import Specials from './Specials.js';
import Booking from './BookingPage.js';
import BookingForm from './BookingForm.js';
import pizza from './pizza.png';
import { Route, Routes, Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <section className="main">
        <div className="main-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link to="/BookingPage">
            <button id="button" to="/BookingPage">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div className="featured">
          <img src={pizza} alt="pizza" height={420} />
        </div>
      </section>
    </>
  );
}

export default Main;
