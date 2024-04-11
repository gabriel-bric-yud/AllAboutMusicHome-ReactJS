import React from 'react';
import {Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import ContactUs from './ContactUs.js';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
