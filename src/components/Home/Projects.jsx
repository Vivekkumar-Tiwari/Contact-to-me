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

const Projects = () => (
  <motion.section className="projects-section" id="projects" variants={sectionVariants}>
    <div className="projects-container">
      <motion.h2 className="section-title" variants={itemVariants}>Featured Projects</motion.h2>

      <div className="projects-grid">
        <motion.div className="project-card" variants={itemVariants}>
          <div className="project-header">
            <h3 className="project-title">KrishiVah – UX Case Study</h3>
            <span className="project-tag">Mobile App</span>
          </div>
          <p className="project-description">
            Designed a mobile app concept helping farmers with accessible digital tools. Created onboarding flows, crop disease scanning interfaces, and an agri marketplace with a clean UI system and consistent components.
          </p>
          <div className="project-skills">
            <span className="skill-badge">Figma</span>
            <span className="skill-badge">UX Research</span>
            <span className="skill-badge">Prototyping</span>
          </div>
        </motion.div>

        <motion.div className="project-card" variants={itemVariants}>
          <div className="project-header">
            <h3 className="project-title">Quick Swap App Redesign</h3>
            <span className="project-tag">UI/UX Design</span>
          </div>
          <p className="project-description">
            Redesigned a campus marketplace app to simplify listing and checkout experience. Optimized user flows, improved navigation, and created high-fidelity UI screens with a development-ready interactive prototype.
          </p>
          <div className="project-skills">
            <span className="skill-badge">Figma</span>
            <span className="skill-badge">UI Design</span>
            <span className="skill-badge">User Flows</span>
          </div>
        </motion.div>

        <motion.div className="project-card" variants={itemVariants}>
          <div className="project-header">
            <h3 className="project-title">DesignerView – Website Design</h3>
            <span className="project-tag">Web Design</span>
          </div>
          <p className="project-description">
            Designed a premium UI concept for an architecture studio using clean grid layouts and responsive screens. Built a cohesive visual system and refined micro-interactions within a one-week sprint.
          </p>
          <div className="project-skills">
            <span className="skill-badge">Figma</span>
            <span className="skill-badge">Photoshop</span>
            <span className="skill-badge">Web Design</span>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default Projects;
