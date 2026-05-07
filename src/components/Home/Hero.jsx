import { motion } from 'framer-motion';

/* ─── Hero section: parent stagger for inner elements ─ */
const heroContainer = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.13,
      delayChildren: 0.05,
      when: 'beforeChildren',
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Hero = () => (
  <motion.section
    className="hero-section"
    variants={heroContainer}
  >
    {/* Badge */}
    <motion.div className="hero-badge" variants={child}>
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 1L8.545 5.09H13L9.545 7.682L10.91 12L7 9.273L3.09 12L4.455 7.682L1 5.09H5.455L7 1Z"
          fill="#3B5BDB"
        />
      </svg>
      <span>CREATIVE DESIGNER</span>
    </motion.div>

    {/* Title */}
    <motion.h1 className="hero-title" variants={child}>
      I'm <em>Vivekkumar</em>
    </motion.h1>

    {/* Subtitle */}
    <motion.p className="hero-subtitle" variants={child}>
      A UI/UX Designer and Frontend Developer specializing in crafting user-centered interfaces for web and mobile platforms. Passionate about design aesthetics, technical excellence, and international collaboration.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div className="hero-cta-group" variants={child}>
      <a href="#projects" className="cta-btn cta-btn--dark">View My Work</a>
      <a href="#contact" className="cta-btn cta-btn--light">Get in Touch</a>
    </motion.div>
  </motion.section>
);

export default Hero;
