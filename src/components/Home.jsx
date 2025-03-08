import { useState, useEffect, lazy, Suspense, memo } from "react";
import TypingEffect from "react-typing-effect";
import manimg from "../assets/man1.jpg";
import { email_ID, FaceBook, Git, Insta, Linkedin, Resume } from "../data/link";
import Loader from "./Loader";

// Lazy load the Ballpit component
const Ballpit = lazy(() => import("./Ballpit"));

// Memoized version of Ballpit to prevent unnecessary re-renders
const MemoizedBallpit = memo(Ballpit);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Ballpit with Lazy Loading and Memoization */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<Loader />}>

          <MemoizedBallpit
            count={isMobile ? 80 : 140} // Reduce count for mobile
            gravity={0.5}
            friction={0.99}
            wallBounce={0.95}
            followCursor={false}
            minSize={isMobile ? 0.4 : 0.4} // Reduce size for mobile
            maxSize={isMobile ? 0.7 : 0.9}
          />
        </Suspense>
      </div>

      {/* Content Section */}
      <section id="home" className="relative z-10 min-h-screen flex justify-center items-center px-2 overflow-hidden">
        <div className="container mx-auto pb-20 md:px-4 flex flex-col-reverse md:flex-row items-center h-full">
          {/* Left Content */}
          <div
            className={`md:w-1/2 w-full flex flex-col items-start space-y-2 transform transition-all duration-500 z-0 flex-1 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-5rem]"
              }`}
          >
            <h5 className="text-sm sm:text-xl text-gray-600 mt-3">Hi, it's me</h5>
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">I'm Suyash Dhumal</h1>
            <p className="text-sm sm:text-xl text-gray-700">
              I am passionate about frontend development with <br />
              expertise in :{" "}
              <span className="font-code font-medium text-xl sm:text-2xl text-gray-900"></span>
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
            <div className="flex space-x-4 mt-6 font-serif flex-wrap justify-center">
              <a
                href="#contact"
                className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out shadow-md transform"
              >
                Hire Me
              </a>

              <a
                href={Resume}
                target="_blank"
                download="MyResume.pdf"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out shadow-md transform"
              >
                Download CV
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 justify-center">
              <a href={Git} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-2xl text-slate-800 hover:text-orange-600"></i>
              </a>
              <a href={FaceBook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-2xl text-slate-800 hover:text-orange-600"></i>
              </a>
              <a href={Insta} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-2xl text-slate-800 hover:text-orange-600"></i>
              </a>
              <a href={Linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-2xl text-slate-800 hover:text-orange-600"></i>
              </a>
              <a href={email_ID}>
                <i className="fas fa-envelope text-2xl text-slate-800 hover:text-orange-600"></i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`w-full md:w-3/5 sm:h-auto h-2/3 transform transition-all duration-500 flex-1 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
          >
            <img
              src={manimg}
              alt="Suyash Dhumal"
              className={`w-full max-h-[80vh] object-cover sm:object-contain object-center rounded-md shadow-lg ${isMobile ? "mt-8" : ""
                }`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
