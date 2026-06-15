import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import GitHubStats from "./components/GitHubStats";
import ScrollProgress from "./components/ScrollProgress";
import Stats from "./components/Stats";
import Education from "./components/Education";
import ContactCTA from "./components/ContactCTA";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";

import "./App.css";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <Hero />
      <Resume />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      {/* <GitHubStats /> */}
      <ContactCTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;