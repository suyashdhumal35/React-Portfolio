import React, { useEffect, useState } from "react";

const Skill = () => {
  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "Tailwind & Bootstrap", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "React JS", level: 70 },
    { name: "MongoDB", level: 60 },
    { name: "MySQL", level: 50 },
    { name: "Node JS", level: 50 },
    { name: "Git ", level: 60 },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
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
      id="skills"
      className={`py-20 md:py-64 bg-gray-100 transition-all duration-1000 ease-in-out ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-[30vh] opacity-0"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h5 className="text-lg font-semibold text-orange-500">Skills</h5>
          <h1 className="text-3xl font-bold text-gray-900">Why Choose Me?</h1>
          <p className="text-gray-600 mt-2 max-w-screen-xl mx-auto">
            <span className="font-bold text-gray-900">
              Passionate web developer
            </span>{" "}
            with a knack for creating{" "}
            <span className="font-bold text-gray-900">
              dynamic, user-friendly applications
            </span>
            . Experienced in modern technologies like{" "}
            <span className="font-bold text-gray-900">React, JavaScript,</span>{" "}
            and <span className="font-bold text-gray-900">Tailwind CSS</span>,
            and always eager to learn and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.slice(0, 3).map((skill, index) => (
            <div key={index} className="space-y-4">
              <h1 className="text-lg font-semibold">{skill.name}</h1>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}

          {skills.slice(3).map((skill, index) => (
            <div key={index} className="space-y-4">
              <h1 className="text-lg font-semibold">{skill.name}</h1>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
