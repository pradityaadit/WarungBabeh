import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowDown, FaDiscord } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to <span className="text-amber-500">Warung Babeh</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A vibrant Discord community where friends gather, share experiences, and create memories together.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-amber-500 text-blue-900 font-medium rounded-full flex items-center justify-center gap-2 hover:bg-amber-400 transition-all"
            >
              <FaDiscord className="text-xl" />
              Join Our Discord
            </motion.a>
            
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full flex items-center justify-center gap-2 hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: [0, 1, 0], 
          y: [0, 10, 0] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          delay: 1.5
        }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <FaArrowDown className="text-3xl" />
        </Link>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white bg-opacity-20 rounded-full"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(20px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 20 + Math.random() * 10,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;