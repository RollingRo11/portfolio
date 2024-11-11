import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Work from './pages/Work';
import Skills from './pages/Skills';
import './App.css';

function HeaderController() {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/portfolio' || location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isLandingPage) {
        if (window.scrollY > 100) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLandingPage]);

  return <Header className={showHeader ? 'visible' : 'hidden'} />;
}

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <HeaderController />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
