import { useEffect, useState } from "react";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("service");
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
      id="service"
      className={`py-20 md:py-52 bg-gray-50 transition-all duration-1000 ease-in-out ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-[30vh] opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Service Info */}
        <div className="serviceinfo mb-12">
          <h5 className="text-xl text-orange-500">Service</h5>
          <h2 className="text-3xl font-semibold text-gray-900">What I Do</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-screen-xl mx-auto">
            <span className="font-bold text-gray-900">
              Transform your online presence
            </span>{" "}
            with exceptional design and cutting-edge technology. I specialize in
            crafting{" "}
            <span className="font-bold text-gray-900">
              stunning, user-friendly websites
            </span>{" "}
            that not only look great but also perform flawlessly. Whether you're
            looking to create a unique{" "}
            <span className="font-bold text-gray-900">UI/UX design</span>, a
            fully{" "}
            <span className="font-bold text-gray-900">responsive website</span>,
            or optimize your content for better{" "}
            <span className="font-bold text-gray-900">search rankings</span>,
            I've got you covered. Let’s turn your ideas into{" "}
            <span className="font-bold text-gray-900">digital success</span>!
          </p>
        </div>

        {/* Service Cards */}
        <div className="servicecard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* UI/UX Design Card */}
          <div className="card group h-48 relative bg-white p-6 rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
            <a
              href="#"
              className="flex flex-col justify-center items-center space-y-4"
            >
              <i className="fa-sharp fa-solid fa-crown text-4xl text-gray-500 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                UI/UX Design
              </h4>
            </a>
          </div>

          {/* Web Design Card */}
          <div className="card group h-48 relative bg-white p-6 rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
            <a
              href="#"
              className="flex flex-col justify-center items-center space-y-4"
            >
              <i className="fa-solid fa-desktop text-4xl text-gray-500 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                Web Design
              </h4>
            </a>
          </div>

          {/* Responsive Websites Card */}
          <div className="card group h-48 relative bg-white p-6 rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
            <a
              href="#"
              className="flex flex-col justify-center items-center space-y-4"
            >
              <i className="fa-solid fa-mobile-screen text-4xl text-gray-500 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                Responsive Websites
              </h4>
            </a>
          </div>

          {/* SEO Card */}
          <div className="card group h-48 relative bg-white p-6 rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out flex flex-col justify-center items-center">
            <a
              href="#"
              className="flex flex-col justify-center items-center space-y-4"
            >
              <i className="fa-solid fa-chart-simple text-4xl text-gray-500 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                SEO
              </h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
