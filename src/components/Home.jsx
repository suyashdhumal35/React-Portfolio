import { useState, useEffect } from "react";
import TypingEffect from "react-typing-effect";
import manimg from "../assets/man.jpg"; // Adjusted image path if necessary
import { email_ID, FaceBook, Git, Insta, Linkedin, Resume } from "../data/link";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="py-20 bg-gray-50 md:h-[80vh] h-auto pt-[80px] md:pt-80" // Different height and padding for mobile and laptop
    >
      {/* Adjust height and padding for better spacing */}
      <div className="container md:mt-0 mt-20 mx-auto px-4 flex flex-col-reverse md:flex-row items-center h-full">
        <div
          className={`md:w-1/2 flex flex-col items-start space-y-4 transform transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[-5rem]"
          }`}
        >
          <h5 className="text-xl text-gray-600">Hi, it's me</h5>
          <h1 className="text-4xl font-semibold text-gray-900">
            I'm Suyash Dhumal
          </h1>
          <p className="text-xl text-gray-700">
            I am passionate about frontend development with <br />
            expertise in :{" "}
            <span className="font-code font-medium text-2xl text-gray-900">
              {" "}
            </span>
            <TypingEffect
              text={["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"]}
              speed={100}
              eraseDelay={300}
              eraseSpeed={50}
              typingDelay={500}
              cursor={true}
            />
          </p>

          {/* Buttons Section */}
          <div className="flex space-x-4 mt-6 font-serif">
            {/* Hire Me Button */}
            <a
              href="#contact" // Scrolls to the Contact section
              className="bg-orange-500 text-white  py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out shadow-md transform"
            >
              Hire Me
            </a>

            {/* Download CV Button */}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white  py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out shadow-md transform"
            >
              Download CV
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4">
            <a href={Git} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a href={FaceBook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a href={Insta} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a href={Linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
            <a href={email_ID}>
              <i className="fas fa-envelope text-2xl text-gray-700 hover:text-orange-600"></i>
            </a>
          </div>
        </div>

        <div
          className={`md:w-1/2 transform transition-all duration-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <img
            src={manimg}
            alt="Suyash Dhumal"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
