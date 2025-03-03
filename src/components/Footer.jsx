import { email_ID, FaceBook, Git, Insta, Linkedin } from "../data/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-3 mt-8 md:m-0">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center text-xs md:text-lg">
          {/* Left Section: Footer Text */}
          <div className="w-auto text-left">
            <p>&copy; {new Date().getFullYear()} Suyash Dhumal. All Rights Reserved.</p>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="w-auto flex space-x-2">
            <a href={Git} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xs md:text-xl hover:text-orange-600"></i>
            </a>
            <a href={FaceBook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-xs md:text-xl hover:text-orange-600"></i>
            </a>
            <a href={Insta} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xs md:text-xl hover:text-orange-600"></i>
            </a>
            <a href={Linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xs md:text-xl hover:text-orange-600"></i>
            </a>
            <a href={email_ID}>
              <i className="fas fa-envelope text-xs md:text-xl hover:text-orange-600"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
