import { Link } from "react-router-dom"; // Optional: for routing links in the footer
import { email_ID, FaceBook, Git, Insta, Linkedin } from "./link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Footer Text */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">
              &copy; {new Date().getFullYear()} Suyash Dhumal. All Rights
              Reserved.
            </p>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-6 justify-center md:justify-end">
            <a href={Git} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl hover:text-orange-600"></i>
            </a>
            <a href={FaceBook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-xl hover:text-orange-600"></i>
            </a>
            <a href={Insta} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl hover:text-orange-600"></i>
            </a>
            <a href={Linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-orange-600"></i>
            </a>
            <a href={email_ID}>
              <i className="fas fa-envelope text-xl hover:text-orange-600"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
