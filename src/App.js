import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Booking from './components/BookingPage.js';
import Home from './components/Home.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BookingPage" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
