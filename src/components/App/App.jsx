import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import Footer from '../Footer/Footer.jsx'; 
import Accueil from '../../pages/Accueil/Accueil.jsx';
import About from '../../pages/About/About.jsx';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      </BrowserRouter>
  );
}

export default App;


