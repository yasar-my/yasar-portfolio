import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
            <h3>Hi, I'm</h3>

            <h1>Yasar M</h1>

            <h2>
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Java Developer",
                  "Spring Boot Developer",
                  "React Developer"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p>
              Full Stack Developer specializing in Java,
              Spring Boot, React.js and MySQL. Passionate
              about building scalable microservices,
              secure REST APIs and modern web applications
              that deliver exceptional user experiences.
            </p>
            <div className="availability">
              Open to Full Stack Developer, Java Developer
              and Backend Developer Opportunities
            </div>
            <div className="hero-badges">

              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MySQL</span>

            </div>

            <div className="hero-buttons">
              <a href="#resume">
                View Resume
              </a>
              <a href="#projects">
                View Project
              </a>
              <a
                href="https://www.linkedin.com/in/yasar-m-39a7b7356/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              
              <a
                href="https://github.com/yasar-my"
                target="_blank"
                rel="noreferrer"
                >
                GitHub
                </a>
            </div>
        </motion.div>
          

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profile} alt="Yasar" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;