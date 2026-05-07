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

const About = () => (
  <motion.section className="about-section" variants={sectionVariants}>
    <div className="about-container">
      {/* Left: Bio */}
      <div className="about-content">
        <motion.div variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            I'm a B.Tech CSE student at Parul University with a passion for creating beautiful, functional interfaces. With experience in UI/UX design for healthcare platforms, web design, and mobile app development, I combine design thinking with technical skills to solve complex user problems.
          </p>
          <p className="section-text">
            My international experience includes collaborating with U.S.-based companies, and I've contributed to university branding and design initiatives. I'm driven by user research, clean design principles, and the intersection of aesthetics and technology.
          </p>
        </motion.div>
      </div>

      {/* Right: Skills Grid */}
      <div className="skills-grid">
        <motion.div className="skill-category" variants={itemVariants}>
          <h3 className="skill-title">UI/UX Design</h3>
          <ul className="skill-list">
            <li>Figma</li>
            <li>Wireframing & Prototyping</li>
            <li>Branding</li>
            <li>Mobile/Web UI</li>
            <li>Framer, Webflow</li>
          </ul>
        </motion.div>

        <motion.div className="skill-category" variants={itemVariants}>
          <h3 className="skill-title">Web Development</h3>
          <ul className="skill-list">
            <li>HTML & CSS</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>WordPress</li>
          </ul>
        </motion.div>

        <motion.div className="skill-category" variants={itemVariants}>
          <h3 className="skill-title">Tools & Software</h3>
          <ul className="skill-list">
            <li>Adobe Photoshop</li>
            <li>Premiere Pro</li>
            <li>Android Studio</li>
            <li>Git & Version Control</li>
            <li>Firebase</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default About;
