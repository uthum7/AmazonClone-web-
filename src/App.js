import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";  // Use lowercase "h" to match the file name
import Home from "./Home";      // Import the Home component
import './Header.css';          // Import any necessary CSS
import Checkout from "./Checkout";  // Import the Checkout component

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header should remain here to appear on all pages */}
        <Header />
        
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} />
          {/* Route for Checkout page */}
          <Route path="/checkout" element={<Checkout />} />
          {/* Route for Login page */}
          <Route path="/login" element={<h1>Login Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
