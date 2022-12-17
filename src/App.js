import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Lander from './pages/Lander/Lander';
import Offers from './pages/Offers/Offers';
import Sale from './pages/Sale/Sale';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Lander />} />
        <Route exact path="/offers" element={<Offers />} />
        <Route exact path="/sale" element={<Sale />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/checkout" element={<Cart />} />
      </Routes>
    </Router>

  )
}

