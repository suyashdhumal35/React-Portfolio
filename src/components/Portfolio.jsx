import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "HexaShop",
    description:
      "A modern e-commerce site built with HTML, CSS, and Bootstrap.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://e-commerece-hexashop.netlify.app/",
  },
  {
    id: 2,
    title: "Cryptop",
    description:
      "A cryptocurrency tracking website displaying real-time updates.",
    image:
      "https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://suyash-cryptop.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://suyash-resume.netlify.app/",
  },
];

const Portfolio = () => {
  const [scrollHeight, setScrollHeight] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(
        Math.min(window.scrollY * 0.5 + 100, window.innerHeight - 100)
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="portfolio"
      className="relative flex justify-center py-20 bg-gray-900 text-white w-full"
    >
      <div className="relative w-full max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Glowing Line - Hidden on Mobile */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 shadow-lg hidden md:block"
          animate={{ height: scrollHeight }}
        />

        {/* Portfolio Projects */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`relative flex justify-between items-center w-full mb-16 flex-col sm:flex-row ${
              index % 2 === 0 ? "" : "sm:flex-row-reverse"
            }`}
          >
            {/* Empty div for spacing on one side */}
            <div className="w-full sm:w-5/12"></div>

            {/* Project Card */}
            <div className="w-full sm:w-5/12 flex justify-center">
              <motion.div
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative transition-all w-full sm:w-80 group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 20px rgba(147, 51, 234, 0.8)",
                }}
              >
                {/* Project Image with Blur/Whiten Effect on Hover */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-all duration-300 group-hover:blur-md group-hover:brightness-75"
                />

                {/* Project Details   (Appears on Hover) */}
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
