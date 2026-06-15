import SectionWrapper from "./SectionWrapper";

function Contact() {
  return (
    <section id="contact">

      <SectionWrapper>
      <div className="container">

        <h2 className="section-title">
          Get In Touch
        </h2>

        <div className="contact-grid">

          <a
            href="mailto:yasarm8675@gmail.com"
            className="contact-card"
          >
            <h3>Email</h3>
            <p>yasarm8675@gmail.com</p>
          </a>

          <a
            href="tel:+919087023639"
            className="contact-card"
          >
            <h3>Phone</h3>
            <p>+91 9087023639</p>
          </a>

          <a
            href="https://www.linkedin.com/in/yasar-m-39a7b7356/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn</h3>
            <p>Yasar m</p>
          </a>

          <a
            href="https://github.com/yasar-my"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>GitHub</h3>
            <p>yasar-my</p>
          </a>

        </div>

      </div>
      </SectionWrapper>

    </section>
  );
}

export default Contact;