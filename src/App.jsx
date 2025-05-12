import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Members from "./sections/Members";
import Story from "./sections/Story";
import CustomCursor from "./components/CustomCursor";
import oreoGila from "../src/img/members/oreoGila.png";
import CircularGallery from "./components/CircularGallery";

import { SlArrowDown } from "react-icons/sl";
import { IoMdChatboxes } from "react-icons/io";

function App() {
  const [loading, setLoading] = useState(true);
  const [showChatbox, setShowChatbox] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${oreoGila})` }}
      >
        <motion.div
          className="text-4xl md:text-6xl font-serif font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome to
          </motion.span>{" "}
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-amber-400"
          >
            Warung Babeh
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

      <Element name="members" className="element mb-5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-blue-900">
            Meet Our <span className="text-amber-500">Members</span>
          </h2>
          <p className="text-lg text-gray-700">
            The dedicated individuals who keep our community thriving and create
            amazing experiences for all members.
          </p>
        </div>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery bend={3} textColor="black" borderRadius={0.05} />
        </div>
      </Element>

      {/* <Element name="story" className="element">
        <Story />
      </Element> */}

      <Footer />

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
        {/* Chatbox muncul saat showChatbox = true */}
        {showChatbox && (
          <div className="w-[350px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/VjG2wSvV03rNik17OCbEF"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Chatbot"
            ></iframe>
          </div>
        )}

        {/* Tombol toggle + teks di atasnya kalau chatbox aktif */}
        <div className="flex flex-col items-center">
          {showChatbox && <div className="mb-1 text-sm text-gray-700"></div>}
          <button
            onClick={() => setShowChatbox(!showChatbox)}
            className={`flex items-center justify-center p-3 rounded-full shadow-md transition-all
            ${
              showChatbox
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {showChatbox ? (
              <SlArrowDown className="w-8 h-8 text-white" />
            ) : (
              <IoMdChatboxes className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
