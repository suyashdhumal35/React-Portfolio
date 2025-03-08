import { useState } from "react";
import { email_ID } from "../data/link";

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
    <div id="contact"  className="flex justify-center items-center bg-gray-100 py-10 h-screen">
      <div className="relative bg-white p-6 shadow-lg rounded-lg w-full max-w-6xl flex flex-col lg:flex-row border border-gray-300">
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
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start relative">
          <h2 className="text-2xl font-semibold text-center mb-0">Available 24/7</h2>
          <h3 className="text-base text-center mb-4">Get In Touch</h3>
          <form className="space-y-6 w-full relative" onSubmit={handleSubmit}>
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
                className="absolute left-3 top-1 transform -translate-y-1/2 text-gray-700 text-base font-medium bg-white py-1 px-4 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:left-3 peer-focus:text-slate-950 peer-focus:scale-90"
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
                className="absolute left-3 top-1 transform -translate-y-1/2 text-gray-700 text-base font-medium bg-white py-1 px-4 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:left-3 peer-focus:text-slate-950 peer-focus:scale-90"
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

            {/* Pop-up with blur effect */}
            {showPopup && (
              <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="bg-white text-center p-5 rounded-lg shadow-lg border border-gray-300 w-full max-w-sm backdrop-blur-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-lg font-semibold">✅ Information submitted successfully!</h1>
                  <p className="text-sm text-gray-600">[ Your details are kept private ]</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
