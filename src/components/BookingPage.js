import { createRef, useEffect, useRef } from 'react';
import BookingForm from './BookingForm';
import { Route, Routes, Link } from 'react-router-dom';

function Booking() {
  const refForm = createRef();

  return (
    <>
      <div className="form-container">
        <h3>Reserve a Table</h3>
      </div>
      <BookingForm ref={refForm} />
    </>
  );
}

export default Booking;
