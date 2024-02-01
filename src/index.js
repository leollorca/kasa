import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.sass';

import Home from './pages/Home';
import About from './pages/About';
import Rent from './pages/Rent';

import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/rent/:id" element={<Rent />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
