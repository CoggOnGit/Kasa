import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Nav from '../Nav/Nav.jsx'; 
import Banner from '../Banner/Banner.jsx'; 
import Footer from '../Footer/Footer.jsx'; 

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <Banner/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;