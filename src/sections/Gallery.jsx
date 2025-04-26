import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    {
      image: "https://images.pexels.com/photos/7915651/pexels-photo-7915651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Gaming Tournament",
      description: "Our annual gaming championship with over 30 participants from around the world."
    },
    {
      image: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Virtual Movie Night",
      description: "Weekly movie nights where we stream and discuss our favorite films together."
    },
    {
      image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Creative Showcase",
      description: "Members sharing their artistic creations, from digital art to music compositions."
    },
    {
      image: "https://images.pexels.com/photos/5082643/pexels-photo-5082643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Strategy Session",
      description: "Planning and strategizing for our team-based competitive gaming events."
    },
    {
      image: "https://images.pexels.com/photos/7915257/pexels-photo-7915257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Community Challenge",
      description: "Monthly challenges that bring everyone together for friendly competition."
    },
    {
      image: "https://images.pexels.com/photos/6699273/pexels-photo-6699273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Casual Hangout",
      description: "Relaxed voice chat sessions where members connect and share stories."
    },
    // Additional gallery items
    {
      image: "https://images.pexels.com/photos/7915559/pexels-photo-7915559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Esports Tournament",
      description: "Our competitive gaming events attract players from all skill levels."
    },
    {
      image: "https://images.pexels.com/photos/7915484/pexels-photo-7915484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Community Art Exhibition",
      description: "Showcasing the incredible artwork created by our talented members."
    },
    {
      image: "https://images.pexels.com/photos/7915478/pexels-photo-7915478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Game Development Workshop",
      description: "Learning and creating together in our game dev sessions."
    },
    {
      image: "https://images.pexels.com/photos/7915255/pexels-photo-7915255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Music Night",
      description: "Members sharing their musical talents and favorite tracks."
    }
  ];

  const displayedItems = showAll ? galleryItems : galleryItems.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-blue-900">Our <span className="text-amber-500">Gallery</span></h2>
          <p className="text-lg text-gray-700">
            Explore snapshots of memorable moments from our community events, gatherings, and activities.
          </p>
        </AnimatedSection>

        <div className="gallery-masonry">
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <AnimatedSection 
                key={index} 
                className="gallery-item" 
                delay={index * 0.1}
                distance={30}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto rounded-lg shadow-md" 
                  />
                  <div className="gallery-caption">
                    <h3 className="text-xl font-bold mb-2 font-serif">{item.title}</h3>
                    <p className="text-sm text-blue-100">{item.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </AnimatePresence>
        </div>

        {galleryItems.length > 6 && (
          <AnimatedSection className="text-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-all inline-flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'Show More Photos'}
            </motion.button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Gallery;