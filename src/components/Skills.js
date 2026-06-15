import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

function Skills() {

  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "JWT",
    "Spring Security",
    "Microservices",
    "REST APIs",
    "Git",
    "GitHub",
    "Postman",
    "Cloudinary"
  ];

  return (
    <section id="skills">

      <SectionWrapper>
      <div className="container">

        <h2 className="section-title">
          Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill,index)=>(
            <motion.div
              className="skill-card"
              key={index}
              whileHover={{
                scale:1.08,
                y:-10
              }}
              >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>
      </SectionWrapper>

    </section>
  );
}

export default Skills;