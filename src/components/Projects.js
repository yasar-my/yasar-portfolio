import projectImage from "../assets/feast-fete-home.png";
import SectionWrapper from "./SectionWrapper";

function Projects() {
  return (
    <section id="projects">
      <SectionWrapper>
      <div className="container">

        <h2 className="section-title">
          Featured Project
        </h2>

        <div className="project-card">

          <div className="project-image">
            <img
              src={projectImage}
              alt="Feast & Fete"
            />
          </div>

          <div className="project-content">

            <span className="project-tag">
              Featured Project
            </span>

            <h3>
              Feast & Fete
            </h3>

            <p className="project-description">
              Feast & Fete is a full-stack catering booking platform
              built with Spring Boot Microservices, React.js and MySQL.
              The platform enables customers to discover catering services,
              book events, make secure online payments and manage bookings,
              while organizers can manage profiles, food galleries and services.
            </p>

            <div className="project-features">

              <div>✓ JWT Authentication & Authorization</div>

              <div>✓ Role Based Access Control</div>

              <div>✓ Catering Booking Management</div>

              <div>✓ Razorpay Payment Integration</div>

              <div>✓ Cloudinary Food Gallery</div>

              <div>✓ Admin Dashboard</div>

            </div>

            <div className="tech-stack">

              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MySQL</span>
              <span>JWT</span>
              <span>Microservices</span>
              <span>Cloudinary</span>
              <span>Razorpay</span>

            </div>

            <div className="project-buttons">

              <a
                href="https://feast-fete.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/yasar-my/feast-fete.git"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>

            </div>

          </div>

        </div>

      </div>
      </SectionWrapper>

    </section>
  );
}

export default Projects;