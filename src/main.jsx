import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";

// Lazy loading components
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

const Loading = () => <div className="text-center text-white py-10">Loading...</div>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Home />

      {/* Suspense for Lazy Components */}
      <About />
      <Suspense fallback={<Loading />}>
        <Skills />
        <Service />
        <Portfolio />
        <Contact />
      </Suspense>

      <Footer />
    </Router>
  </StrictMode>
);
