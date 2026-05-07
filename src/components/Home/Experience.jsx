import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Experience = () => (
  <motion.section className="experience-section" variants={sectionVariants}>
    <div className="experience-container">
      <motion.h2 className="section-title" variants={itemVariants}>Experience</motion.h2>

      <div className="experience-list">
        <motion.div className="experience-item" variants={itemVariants}>
          <div className="exp-header">
            <h3 className="exp-title">UI/UX Designer</h3>
            <span className="exp-company">Human Garage (U.S.-based)</span>
          </div>
          <p className="exp-period">Aug 2025 – Oct 2025</p>
          <p className="exp-description">
            Designed high-impact YouTube thumbnails and product visuals for an American healthcare-focused digital platform. Collaborated with remote cross-functional teams, focusing on user research and creative content strategy.
          </p>
        </motion.div>

        <motion.div className="experience-item" variants={itemVariants}>
          <div className="exp-header">
            <h3 className="exp-title">UI/UX Designer</h3>
            <span className="exp-company">SCOPE Cell, Parul University</span>
          </div>
          <p className="exp-period">Dec 2024 – Aug 2025</p>
          <p className="exp-description">
            Transitioned from training intern to full-time role. Designed user interfaces for websites, created engaging social media posts, graphical abstracts, and publication materials. Contributed to university branding through strong visual design principles.
          </p>
        </motion.div>

        <motion.div className="experience-item" variants={itemVariants}>
          <div className="exp-header">
            <h3 className="exp-title">UI Design Intern</h3>
            <span className="exp-company">Algorion Research and Analysis Pvt. Ltd.</span>
          </div>
          <p className="exp-period">Dec 2024 – Jan 2025</p>
          <p className="exp-description">
            Assisted in designing and developing user interfaces for web and mobile platforms. Collaborated with cross-functional teams and contributed to UI/UX improvement initiatives and key design projects.
          </p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default Experience;
