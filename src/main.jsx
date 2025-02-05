import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Skills from "./components/Skills.jsx";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
// import ContactWithMap from "./components/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header /> {/* Always visible header */}
      <Home /> {/* Always visible home section */}
      <About />
      <Skills />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </Router>
  </StrictMode>
);
