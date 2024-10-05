import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import from react-router-dom
import Header from "./header";
import './Header.css';
import Home from "./Home";



function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<h1>Checkout</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/" element={<h1>Home Page</h1>} /> {/* Default or Home route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
