import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/signin" element={<Login />} />
        {/* Add more routes as needed */}
      
      </Routes>
    </Router>
  );
}

export default App;