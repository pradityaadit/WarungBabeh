import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { FaDiscord, FaTwitter, FaTwitch } from 'react-icons/fa';

const Members = () => {
  const [showAll, setShowAll] = useState(false);

  const members = [
    {
      name: "Alex Johnson",
      role: "Community Founder",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Gaming enthusiast and community builder who created Warung Babeh to bring people together.",
      social: {
        discord: "#alex1234",
        twitter: "alexj",
        twitch: "alexplays"
      }
    },
    {
      name: "Sarah Chen",
      role: "Event Coordinator",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#sarahc",
        twitter: "sarahchen",
        twitch: "sarahgames"
      }
    },
    {
      name: "Marcus Williams",
      role: "Gaming Admin",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Competitive gamer who manages our tournaments and gaming events.",
      social: {
        discord: "#marcgamer",
        twitter: "marcwilliams",
        twitch: "marcgaming"
      }
    },
    {
      name: "Priya Patel",
      role: "Content Creator",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Digital artist and streamer who creates amazing content for our community.",
      social: {
        discord: "#priyap",
        twitter: "priyaart",
        twitch: "priyacreates"
      }
    },
    {
      name: "David Kim",
      role: "Tech Support",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Our go-to person for all technical issues and server management.",
      social: {
        discord: "#davidtech",
        twitter: "davidkim",
        twitch: "davidtech"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Community Moderator",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Dedicated to keeping our community welcoming and respectful for everyone.",
      social: {
        discord: "#emmarodz",
        twitter: "emmarod",
        twitch: "emmagames"
      }
    },
    // Additional members
    {
      name: "Michael Chang",
      role: "Event Host",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Enthusiastic event host who brings energy and excitement to our community gatherings.",
      social: {
        discord: "#michaelc",
        twitter: "michaelchang",
        twitch: "michaelstreams"
      }
    },
    {
      name: "Lisa Anderson",
      role: "Art Curator",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Talented artist who manages our creative showcases and art events.",
      social: {
        discord: "#lisaart",
        twitter: "lisaanderson",
        twitch: "lisacreates"
      }
    },
    // Add more members as needed...
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const displayedMembers = showAll ? members : members.slice(0, 6);

  return (
    <section className="py-20 bg-white" id="members">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-blue-900">Meet Our <span className="text-amber-500">Team</span></h2>
          <p className="text-lg text-gray-700">
            The dedicated individuals who keep our community thriving and create amazing experiences for all members.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden group h-64">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold font-serif">{member.name}</h3>
                    <p className="text-blue-100">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                      <FaDiscord className="text-lg" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                      <FaTwitter className="text-lg" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                      <FaTwitch className="text-lg" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {members.length > 6 && (
          <AnimatedSection className="text-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-all inline-flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'Show More Members'}
            </motion.button>
          </AnimatedSection>
        )}

        <AnimatedSection className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-8">
            Interested in being part of our vibrant community? Join our Discord and become a member today!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-all"
          >
            <FaDiscord className="text-xl" />
            Join Our Community
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Members;