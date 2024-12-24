import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Feedback from './pages/Feedback';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Content from './components/Content';
import BlogDetail from './pages/BlogDetail'; // Add BlogDetail page

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} /> {/* New route for individual blog */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
