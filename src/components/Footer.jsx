import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaInstagram, FaTwitch, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Members', to: 'members' },
    { name: 'Story', to: 'story' },
  ];

  const socialLinks = [
    { icon: <FaDiscord />, url: 'https://discord.gg/', label: 'Discord' },
    { icon: <FaTwitter />, url: 'https://twitter.com/', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com/', label: 'Instagram' },
    { icon: <FaTwitch />, url: 'https://twitch.tv/', label: 'Twitch' },
    { icon: <FaYoutube />, url: 'https://youtube.com/', label: 'YouTube' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="font-serif text-3xl font-bold mb-4">
              <span className="text-white">Warung</span>
              <span className="text-amber-500"> Babeh</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              A vibrant community of friends sharing moments, games, and memories.
              Join our Discord to be part of the family.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-blue-900 font-medium rounded-full transition-all"
            >
              <FaDiscord className="text-lg" />
              Join Our Community
            </motion.a>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4 font-serif">Quick Links</h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-2"
            >
              {footerLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-blue-100 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          {/* Connect With Us */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4 font-serif">Connect With Us</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 hover:bg-amber-500 text-white hover:text-blue-900 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-blue-800 text-center text-blue-200">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Warung Babeh. All rights reserved. Made with 
            <FaHeart className="text-amber-500" /> in the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;