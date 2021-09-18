
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import HomeScreen from './pages/HomeScreen';
import Navbar from './components/Navbar';
import CartState from './context/CartState';

function App() {
  return (
    <Router>
      <CartState>
      <Navbar />
      <div className="app-wrapper">
        <HomeScreen />
      </div>
      </CartState>
    </Router>
  );
}

export default App;
