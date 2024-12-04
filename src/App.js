import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter'; // Importa el componente Newsletter


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />  {/* LandingPage */}
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/quienesomos" element={<AboutUs />} />
        <Route path="/contactos" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} /> {/* Añade la ruta de Newsletter */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
