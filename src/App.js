import React from 'react';
import Footer from './pages/footer/Footer';
import Navbar from './pages/header/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Service } from './pages/services/Service';
import { Blog } from './pages/blog/Blog';
import { Contact } from './pages/contact/Contact';
import { CaseStudie } from './pages/caseStu/CaseStudie';
import { Career } from './pages/career/Career';
import { Location } from './pages/location/Location';
import { ErrorPage } from './pages/404/ErrorPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/caseStudie" element={<CaseStudie />} />
        <Route path="/career" element={<Career />} />
        <Route path="/location" element={<Location />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
