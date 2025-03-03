import { useState } from "react";
import { email_ID } from "../data/link";
import Squares from "./Squares";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
    setEmail("");
    setPassword("");
    setMessage("");
  };

  return (
    <div className="relative flex justify-center items-center bg-gray-100 py-10 h-screen">
      {/* Background Squares */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      <div className="relative bg-white bg-opacity-30 backdrop-blur-lg p-6 shadow-lg rounded-lg w-full max-w-6xl flex flex-col lg:flex-row z-10 border border-white/20">
        {/* Right Column - Contact Details */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col justify-center items-start text-center lg:text-left">
          <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
          <div className="flex items-center space-x-3 mb-6 justify-center lg:justify-start">
            <i className="fas fa-map-marker-alt text-orange-500 text-2xl"></i>
            <p className="text-lg">Shivneri, C-1, room no.78, Sahyadri Nagar, Charkop, Kandivali(W), Mumbai 400067</p>
          </div>
          <div className="flex items-center space-x-3 mb-6 justify-center lg:justify-start">
            <i className="fas fa-phone-alt text-orange-500 text-2xl"></i>
            <p className="text-lg">(869) 200-3560</p>
          </div>
          <div className="flex items-center space-x-3 mb-6 justify-center lg:justify-start">
            <i className="fas fa-envelope text-orange-500 text-2xl"></i>
            <p className="text-lg">{email_ID}</p>
          </div>
        </div>

        <div className="hidden lg:block border-l border-gray-300 mx-6"></div>

        {/* Left Column - Contact Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold text-center mb-0">Available 24/7</h2>
          <h3 className="text-base text-center mb-4">Get In Touch</h3>
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full p-3 pt-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <label
                htmlFor="email"
                className={`absolute left-3 top-1 rounded-md transform -translate-y-1/2 text-gray-700 text-base font-medium bg-white py-1 px-4 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:left-3 peer-focus:text-slate-950 peer-focus:scale-90 ${email ? "scale-75 top-0 left-2 text-blue-500" : ""}`}
              >
                Email <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative">
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="peer w-full p-3 pt-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <label
                htmlFor="password"
                className={`absolute left-3 top-1 rounded-md transform -translate-y-1/2 text-gray-700 text-base font-medium bg-white py-1 px-4 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:left-3 peer-focus:text-slate-950 peer-focus:scale-90 ${email ? "scale-75 top-0 left-2 text-blue-500" : ""}`}
              >
                Password <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="absolute inset-0 flex justify-center items-center z-20">
          <div className="bg-white text-center p-5 rounded-lg shadow-lg space-y-2 border border-gray-200 backdrop-blur-lg bg-opacity-90">
            <h1 className="text-2xl font-semibold">✅ Information filed successfully!</h1>
            <p className="text-sm">[ Note: This Details are kept Private and not shared with anyone ]</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
