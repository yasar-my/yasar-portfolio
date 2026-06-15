import SectionWrapper from "./SectionWrapper";

function Experience() {
  return (
    <section id="experience">

      <SectionWrapper>

        <div className="container">

          <h2 className="section-title">
            Experience
          </h2>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-date">
                  Mar 2026 - Present
                </span>

                <h3>
                  Associate Backend Developer Intern
                </h3>

                <h4>
                  CodeTikki
                </h4>

                <p>
                  Developed backend microservices for a Student
                  Micro Loan Platform. Built eligibility engines,
                  repayment lifecycle management, fraud detection
                  systems and scalable REST APIs using Java and
                  Spring Boot.
                </p>

              </div>

            </div>

          </div>

        </div>

      </SectionWrapper>

    </section>
  );
}

export default Experience;