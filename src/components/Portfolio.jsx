import { useEffect, useState, lazy, Suspense, memo, useMemo } from "react";
import { motion } from "framer-motion";

// Lazy load Particles component
const Particles = lazy(() => import("./Particles"));

import { projects } from "../data/projectsData";

const Portfolio = () => {
  const [scrollHeight, setScrollHeight] = useState(100);
  const [isInViewport, setIsInViewport] = useState(false);

  // Handle scroll event to adjust midline height and detect viewport visibility
  useEffect(() => {
    const handleScroll = () => {
      // Set scroll height for midline animation
      setScrollHeight(
        Math.min(window.scrollY * 0.5 + 100, window.innerHeight - 100)
      );

      // Check if the section is in the viewport for animation trigger
      const section = document.getElementById("portfolio");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsInViewport(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize the project list to avoid unnecessary re-renders
  const projectList = useMemo(() => {
    return projects.map((project, index) => (
      <motion.div
        key={project.id}
        className={`relative flex justify-between items-center w-full mb-16 flex-col sm:flex-row ${
          index % 2 === 0 ? "" : "sm:flex-row-reverse"
        }`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 400 : -400 }} // Start off-screen
        animate={{ opacity: 1, x: 0 }} // Move to center
        transition={{ duration: 1 }} // Smooth transition
      >
        {/* Empty div for spacing on one side */}
        <div className="w-full sm:w-5/12"></div>

        {/* Project Card */}
        <div className="w-full sm:w-5/12 flex justify-center">
          <motion.div
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative transition-all w-2/3 sm:w-80 md:w-96 group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(147, 51, 234, 0.8)",
            }}
          >
            {/* Project Image with increased height */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-all duration-300 group-hover:blur-md group-hover:brightness-75"
              loading="lazy" // Lazy load images for better performance
            />

            {/* Project Details (Appears on Hover) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
              <h3 className="md:text-2xl text-xl font-bold">{project.title}</h3>
              <p className="md:text-base text-sm text-gray-300 mt-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-indigo-400 hover:text-indigo-300 "
              >
                View Project →
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    ));
  }, []);

  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <motion.section
        id="portfolio"
        className="zindex-10 relative flex justify-center py-20 bg-gray-900 text-white w-full"
        initial={{ opacity: 0 }} // Initial state for opacity (fade effect)
        animate={{ opacity: isInViewport ? 1 : 0 }} // Animate opacity when section comes into view
        transition={{ duration: 1 }} // Smooth fade-in transition
      >
        {/* Particles Background */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={250}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Portfolio Container */}
        <div className="relative w-full max-w-6xl px-6 sm:px-8 md:px-10">
          {/* Glowing Line - Hidden on Mobile */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 shadow-lg hidden md:block"
            animate={{ height: scrollHeight }}
            transition={{ duration: 0.1 }} // Add a transition for smooth height change
          />
          
          {/* Render memoized project list */}
          {projectList}
        </div>
      </motion.section>
    </Suspense>
  );
};

// Wrap the component with memo to prevent unnecessary re-renders
export default memo(Portfolio);
