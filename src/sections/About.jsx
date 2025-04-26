import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { FaUsers, FaGamepad, FaComments, FaHeart } from "react-icons/fa";
import about from "../img/members/about.png";

const About = () => {
  const features = [
    {
      icon: <FaUsers className="text-4xl text-amber-500" />,
      title: "Vibrant Community",
      description:
        "Join a diverse group of friendly individuals who share common interests and passions.",
    },
    {
      icon: <FaGamepad className="text-4xl text-amber-500" />,
      title: "Gaming Sessions",
      description:
        "Participate in regular gaming events, tournaments, and casual gameplay with community members.",
    },
    {
      icon: <FaComments className="text-4xl text-amber-500" />,
      title: "Active Discussions",
      description:
        "Engage in lively conversations about games, technology, art, music, and more.",
    },
    {
      icon: <FaHeart className="text-4xl text-amber-500" />,
      title: "Lasting Friendships",
      description:
        "Build meaningful connections that extend beyond the digital realm.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-blue-900">
            About <span className="text-amber-500">Warung Babeh</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Warung Babeh is more than just a Discord community—it's a virtual
            home where friends from around the world connect, share experiences,
            and create lasting memories together.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <AnimatedSection
            className="flex items-center justify-center"
            delay={0.2}
          >
            <motion.img
              src={about}
              alt="Community gathering"
              className="rounded-lg shadow-xl max-w-full h-[600px] object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </AnimatedSection>

          <AnimatedSection className="flex flex-col justify-center" delay={0.4}>
            <h3 className="text-2xl font-bold mb-4 font-serif text-blue-900">
              Our Story
            </h3>
            <p className="text-gray-700 mb-6">
              Founded in 2021, Warung Babeh began as a small group of friends
              who shared a passion for gaming. As word spread about our
              welcoming atmosphere and engaging activities, our community
              quickly grew into the vibrant hub it is today.
            </p>
            <p className="text-gray-700 mb-6">
              The name "Warung Babeh" reflects our community's spirit: "Warung"
              being a small, friendly gathering place, and "Babeh" an endearing
              term for "father" – together representing a familial space where
              everyone is welcome.
            </p>
            <p className="text-gray-700">
              Today, we host regular events, game nights, watch parties, and
              casual hangouts for members from diverse backgrounds and
              interests, united by friendship and mutual respect.
            </p>
          </AnimatedSection>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-50 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center font-serif text-blue-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
