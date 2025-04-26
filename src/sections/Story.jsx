import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Story = () => {
  const timelineEvents = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Warung Babeh was founded by a small group of friends who wanted to create a welcoming space for gamers and content creators.",
      image: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      year: "2022",
      title: "Growing Community",
      description: "Our community expanded rapidly as word spread about our friendly atmosphere and engaging events. We reached 500 members!",
      image: "https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      year: "2023",
      title: "First Annual Tournament",
      description: "We hosted our first major gaming tournament with participants from around the world, strengthening our global connections.",
      image: "https://images.pexels.com/photos/8107903/pexels-photo-8107903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      year: "2024",
      title: "Digital Expansion",
      description: "Launching our official website and expanding our online presence to reach even more like-minded individuals.",
      image: "https://images.pexels.com/photos/7915541/pexels-photo-7915541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      year: "2025",
      title: "The Future",
      description: "Looking ahead, we plan to organize our first in-person meetup and continue growing our vibrant community.",
      image: "https://images.pexels.com/photos/8131576/pexels-photo-8131576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="story">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-blue-900">Our <span className="text-amber-500">Journey</span></h2>
          <p className="text-lg text-gray-700">
            From humble beginnings to a thriving community, explore the story of Warung Babeh's evolution over the years.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform md:translate-x-[-0.5px] hidden md:block"></div>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <AnimatedSection
              key={index}
              className="mb-12 md:mb-24 relative"
              delay={index * 0.2}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className="md:w-1/2 mb-6 md:mb-0 px-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`bg-white p-6 rounded-xl shadow-lg ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="inline-block px-4 py-2 bg-blue-900 text-white rounded-full mb-4 font-bold">
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-serif text-blue-900">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </motion.div>
                </div>
                
                <div className="md:w-1/2 px-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="rounded-xl overflow-hidden shadow-lg"
                  >
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-auto object-cover" 
                    />
                  </motion.div>
                </div>
                
                {/* Timeline Dot - only visible on md screens and up */}
                <div className="absolute left-0 md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 hidden md:block">
                  <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-white"></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We're proud of how far we've come, and excited about where we're going. 
            The story of Warung Babeh continues to be written by every member who joins our community.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-900 text-white font-medium px-8 py-4 rounded-full hover:bg-blue-800 transition-all cursor-pointer"
          >
            Be Part of Our Story
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Story;