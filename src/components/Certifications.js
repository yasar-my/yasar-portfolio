import agile from "../assets/certificates/agile.jpeg";
import hibernate from "../assets/certificates/hibernate.jpeg";
import java8 from "../assets/certificates/java8.jpeg";
import maven from "../assets/certificates/maven.jpeg";
import springboot from "../assets/certificates/springboot.jpeg";

function Certifications() {

  const certifications = [
    {
      title: "Spring 5 Basics with Spring Boot",
      image: springboot
    },
    {
      title: "Hibernate Framework Basics",
      image: hibernate
    },
    {
      title: "Java SE 8 Features",
      image: java8
    },
    {
      title: "Apache Maven",
      image: maven
    },
    {
      title: "Introduction to Agile Methodology",
      image: agile
    }
  ];

  return (
    <section id="certifications">
      <div className="container">

        <h2 className="section-title">
          Certifications
        </h2>

        <div className="certifications-grid">

          {certifications.map((cert,index)=>(

            <a
              key={index}
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <span>🏆</span>

              <div>
                <div className="cert-title">
                  {cert.title}
                </div>

                <div className="cert-provider">
                  Infosys Springboard
                </div>
              </div>
            </a>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;