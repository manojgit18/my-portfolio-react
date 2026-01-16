import React, { Suspense, lazy, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy-loaded components
const NavBar = lazy(() => import("./components/NavBar"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const LatestProjects = lazy(() => import("./components/LatestProjects"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));
const BackToTop = lazy(() => import("./components/BackToTop"));


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <LoadingSpinner />
          </div>
        }
      >
        {/* Fixed Navbar */}
        <NavBar />

        {/* Main content */}
        <main className="pt-24">
          <section id="home" className="bg-primary">
            <HeroSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="skills">
            <SkillsSection />
          </section>

          <section id="projects">
            <LatestProjects />
          </section>

          <section id="contact">
            <ContactSection />
          </section>

          <Footer/>

          <BackToTop/>
        </main>
      </Suspense>
    </div>
  );
}

export default App;
