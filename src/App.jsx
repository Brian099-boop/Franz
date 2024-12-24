import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import
import Header from './components/Header';
import Footer from './components/Footer';
import Feedback from './pages/Feedback'; // Correct import for Feedback page
import Contact from './pages/Contact';
import Content from './components/Content';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
