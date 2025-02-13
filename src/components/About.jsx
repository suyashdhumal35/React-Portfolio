import { useEffect, useState } from "react";
import manimg from "../assets/suyash1.jpg"; // Make sure the image path is correct
import { Git, Resume } from "../data/link";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className={`py-20 bg-gray-50 min-h-[70vh] flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-[30vh] opacity-0"
      }`}
    >
      <div className="container md:pt-40 mx-auto px-4 flex flex-col justify-between md:flex-row items-center space-y-8 md:space-y-0">
        {/* Left Section: Photo */}
        <div className="w-full md:w-[30%] md:max-w-[30%] max-w-[80%]">
          {" "}
          {/* Adjusted mobile and desktop sizes */}
          <img
            src={manimg}
            alt="Suyash Dhumal"
            className="w-full max-h-[60vh] object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Right Section: About Text */}
        <div className="w-full md:w-[60%] text-center md:text-left mt-6 md:mt-0 md:pl-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Suyash Dhumal
          </h3>
          <h4 className="text-lg md:text-xl text-gray-600 mt-2">
            Software Developer | Web Developer
          </h4>
          <p className="text-base md:text-lg text-gray-700 mt-4">
            Passionate about crafting dynamic and responsive web applications, I
            have built multiple projects showcasing my expertise in JavaScript,
            React, and modern frontend frameworks. Some of my best work is
            featured in my resume and GitHub repository.
          </p>
          <p className="text-base md:text-lg text-gray-700 mt-4">
            I have hands-on experience with real-world projects, implementing
            interactive user interfaces and optimizing code for performance. I
            constantly refine my skills by working on React-based projects and
            staying up-to-date with the latest web technologies.
          </p>
          <p className="text-base md:text-lg text-gray-700 mt-4">
            <strong>✨ Key Highlights:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>✔ Developed HexaShop, a responsive e-commerce website.</li>
              <li>
                ✔ Built an interactive personal portfolio with auto-typing
                effects.
              </li>
              <li>
                ✔ Created Cryptop, a modern cryptocurrency website with
                real-time updates.
              </li>
              <li>
                ✔ Three-month internship at Codingness, where I worked on
                frontend development and UI enhancements.
              </li>
              <li>
                ✔ Skilled in HTML, CSS, JavaScript, React, Tailwind, Bootstrap,
                MySQL, Git, Python & more!
              </li>
            </ul>
          </p>
          <p className="text-base md:text-lg text-gray-700 mt-4">
            I am excited to collaborate and create impactful digital
            experiences! 🚀
          </p>
          <p className="text-base md:text-lg text-gray-700 mt-4">
            Feel free to check out my work on GitHub:{" "}
            <a href={Git} className="text-blue-500">
              GitHub Profile
            </a>
          </p>

          {/* Download CV Button */}
          <div className="mt-6">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 focus:outline-none transition duration-300 font-serif"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
