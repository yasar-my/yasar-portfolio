import resumeImage from "../assets/resume.jpg";
import { motion } from "framer-motion";

function Resume() {
  return (
    <section id="resume">
      <div className="container">

        <h2 className="section-title">
          Resume
        </h2>

        <motion.div
          className="resume-preview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={resumeImage}
            alt="Resume"
            className="resume-image"
          />
        </motion.div>

        <motion.div
          className="resume-btn-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="download-btn"
          >
            View Full Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Resume;