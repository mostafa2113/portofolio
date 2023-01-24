import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Header />} />
      </Routes>
      <Routes>
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/services"
          element={
            <>
              <Services />
              <Footer />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
