import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import pic1 from "../img/galery/pic1.png";
import pic2 from "../img/galery/pic2.png";
import pic3 from "../img/galery/pic3.png";
import pic4 from "../img/galery/pic4.jpg";
import pic5 from "../img/galery/pic5.jpg";
import pic6 from "../img/galery/pic6.jpg";
import pic7 from "../img/galery/pic7.jpg";
import pic8 from "../img/galery/pic8.png";
import pic9 from "../img/galery/pic9.png";
import pic10 from "../img/galery/pic10.png";
import pic11 from "../img/galery/pic11.png";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    {
      image: pic1,
      title: "Indo Voice",
      description: "Katanya biar ala-ala romance titanic gituuu.",
    },
    {
      image: pic2,
      title: "Indo Voice",
      description: "Kenny Hitam Legam bangetttt.",
    },
    {
      image: pic3,
      title: "Sungai Nil",
      description: "Anak Petualang lagi dipimpin sama panji petualang",
    },
    {
      image: pic8,
      title: "Desa Indo",
      description: "Keluarga Besar Warbeh Ceunaahh. ✌️",
    },
    {
      image: pic5,
      title: "Photoboth",
      description: "Sayyy Cheeeshhhhhhhhhhh. ✌️",
    },
    {
      image: pic6,
      title: "Photoboth",
      description: "Sayyy Cheeeshhhhhhhhhhh. ✌️",
    },
    {
      image: pic7,
      title: "Photoboth",
      description: "Sayyy Cheeeshhhhhhhhhhh. ✌️",
    },
    // Additional gallery items
    {
      image: pic4,
      title: "Photoboth",
      description: "Sayyy Cheeeshhhhhhhhhhh. ✌️",
    },
    {
      image: pic9,
      title: "Hutan Indoo",
      description: "Adit Dan Fahrul, sama kuntilanak deng 1 nyelip.",
    },

    {
      image: pic10,
      title: "Photoboth",
      description: "Duluuuu kitaaa masihh remajaaa -Oliver1995.",
    },
    {
      image: pic11,
      title: "Apart BSD",
      description: "Capek Bet Mabuk dulu ga sihhh.",
    },
  ];

  const displayedItems = showAll ? galleryItems : galleryItems.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-blue-900">
            Our <span className="text-amber-500">Gallery</span>
          </h2>
          <p className="text-lg text-gray-700">
            Explore snapshots of memorable moments from our community events,
            gatherings, and activities.
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
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="gallery-caption">
                    <h3 className="text-xl font-bold mb-2 font-serif">
                      {item.title}
                    </h3>
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
              {showAll ? "Show Less" : "Show More Photos"}
            </motion.button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Gallery;
