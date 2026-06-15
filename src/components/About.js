import SectionWrapper from "./SectionWrapper";

function About() {
  return (
    <section id="about">

      <SectionWrapper>
        
        <h2 className="section-title">
          About Me
        </h2>

        <p className="about-text">
          I'm Yasar M, a Full Stack Developer specializing
          in Java, Spring Boot, React.js and MySQL.

          I enjoy building scalable web applications,
          secure REST APIs and microservices architecture.

          My goal is to create efficient, reliable and
          user-friendly software solutions that solve
          real-world problems.
        </p>

      </SectionWrapper>

    </section>
  );
}

export default About;