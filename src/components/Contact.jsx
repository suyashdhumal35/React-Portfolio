import { email_ID } from "./link";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      id="contact"
      className="flex justify-center items-center bg-gray-100 py-10 h-screen"
    >
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-6xl flex flex-col lg:flex-row">
        {/* Right Column - Contact Details */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col justify-center items-start text-center lg:text-left">
          <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
          <div className="flex items-center space-x-3 mb-6 justify-center lg:justify-start">
            <i className="fas fa-map-marker-alt text-orange-500 text-2xl"></i>
            <p className="text-lg">
              {/* https://maps.app.goo.gl/FQWQYdGiFvwKBoDB8 
              // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.6465129291653!2d72.8295421928066!3d19.21232248832519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c98b0bd55b%3A0x5435402db58035a3!2sBLOCK-B%2C%20SHIVANERI%20BUILDING%2C%20C-1%2FA%2C%20Kandivali%2C%20Sahyadri%20Nagar%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1738684025277!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> //  */}
              Shivneri, C-1, room no.78, Sahyadri nagar, charkop,
              Kandivali(W), Mumbai 400067
            </p>
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

        {/* Vertical Line (only visible on large screens) */}
        <div className="hidden lg:block border-l border-gray-300 mx-6"></div>

        {/* Left Column - Contact Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Available 24/7
          </h2>
          <h3 className="text-xl text-center mb-6">Get In Touch</h3>
          <form className="space-y-6 w-full">
            {/* Email */}
            <div className="relative space-y-2">
              <label
                htmlFor="email"
                className={`absolute left-3 top-3 text-sm font-medium text-gray-700 transition-all duration-200 ${
                  email ? "scale-75 top-0 left-2 text-blue-500" : ""
                }`}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
              />
            </div>

            {/* Password */}
            <div className="relative space-y-2">
              <label
                htmlFor="password"
                className={`absolute left-3 top-3 text-sm font-medium text-gray-700 transition-all duration-200 ${
                  password ? "scale-75 top-0 left-2 text-blue-500" : ""
                }`}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Message"
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
    </div>
  );
};

export default Contact;
