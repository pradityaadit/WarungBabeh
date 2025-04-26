import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Members from './sections/Members';
import Story from './sections/Story';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-blue-900 text-white">
        <motion.div
          className="text-4xl md:text-6xl font-serif font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Warung
          </motion.span>{" "}
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-amber-400"
          >
            Babeh
          </motion.span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      <Element name="home" className="element">
        <Home />
      </Element>
      
      <Element name="about" className="element">
        <About />
      </Element>
      
      <Element name="gallery" className="element">
        <Gallery />
      </Element>
      
      <Element name="members" className="element">
        <Members />
      </Element>
      
      <Element name="story" className="element">
        <Story />
      </Element>
      
      <Footer />
    </div>
  );
}

export default App;