import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import kenny from "../img/members/kenny.png";
import fahrul from "../img/members/fahrul.png";
import oliver from "../img/members/oliver.png";
import adit from "../img/members/adit.png";
import apin from "../img/members/apin.png";
import awe from "../img/members/awe.png";
import fex from "../img/members/fex.png";
import loey from "../img/members/loey.png";
import oreo from "../img/members/oreo.png";
import kev from "../img/members/kev.png";
import winter from "../img/members/winter.jpg";
import queen from "../img/members/queenshaa.png";
import lupy from "../img/members/lupy.png";

const Members = () => {
  const [showAll, setShowAll] = useState(false);

  const members = [
    {
      name: "Kenny",
      role: "Kage",
      image: kenny,
      bio: "Gaming enthusiast and community builder who created Warung Babeh to bring people together.",
      social: {
        discord: "#",
        instagram: "https://www.instagram.com/kenyyze",
        twitch: "#",
      },
    },
    {
      name: "Fahrul",
      role: "Sub Kage",
      image: fahrul,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },
    {
      name: "OliverSmith",
      role: "Sub Kage",
      image: oliver,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },
    {
      name: "Adit",
      role: "Sub Kage",
      image: adit,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },
    {
      name: "Apin",
      role: "Sub Kage",
      image: apin,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },

    {
      name: "Fexxx",
      role: "Brother",
      image: fex,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },

    {
      name: "Kavien",
      role: "Brother",
      image: kev,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },

    {
      name: "Oreoo",
      role: "Sub Kage",
      image: oreo,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },
    // Additional members
    {
      name: "Aweee",
      role: "Girls",
      image: awe,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },

    {
      name: "Loey",
      role: "Girls",
      image: loey,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },
    {
      name: "Winter",
      role: "Girls",
      image: winter,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },
    {
      name: "QueenShaa",
      role: "Girls",
      image: queen,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
    },
    {
      name: "Lupy",
      role: "Girls",
      image: lupy,
      bio: "Creative mind behind our most memorable community events and gatherings.",
      social: {
        discord: "#",
        instagram: "#",
        twitch: "#",
      },
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
        type: "spring",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-blue-900">
            Meet Our <span className="text-amber-500">Members</span>
          </h2>
          <p className="text-lg text-gray-700">
            The dedicated individuals who keep our community thriving and create
            amazing experiences for all members.
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
                <div className="relative overflow-hidden group h-[500px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_10%] transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl text-amber-500 font-bold font-serif">
                      {member.name}
                    </h3>
                    <p className="text-blue-100">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex items-center space-x-4">
                    <a
                      href={
                        member.social?.discord
                          ? `https://discord.com/users/${member.social.discord}`
                          : "#"
                      }
                      className="text-gray-500 hover:text-blue-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDiscord className="text-lg" />
                    </a>
                    <a
                      href={member.social?.instagram || "#"}
                      className="text-gray-500 hover:text-blue-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                    <a
                      href={
                        member.social?.twitter
                          ? `https://twitter.com/${member.social.twitter}`
                          : "#"
                      }
                      className="text-gray-500 hover:text-blue-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-lg" />
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
              {showAll ? "Show Less" : "Show More Members"}
            </motion.button>
          </AnimatedSection>
        )}

        <AnimatedSection className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-8">
            Interested in being part of our vibrant community? Join our Discord
            and become a member today!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/HDvdwgkvdD"
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
