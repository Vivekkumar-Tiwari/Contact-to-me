import { useState } from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../Navbar/CTAButton';

const footerColumns = [
  {
    title: 'Pages',
    links: ['Home V.1', 'Home V.2', 'Home V.3', 'Contact V.1', 'Contact V.2'],
  },
  {
    title: 'Pages',
    links: ['Contact V.3', 'Features', 'Pricing', 'About Us', 'Blog V.1'],
  },
  {
    title: 'Pages',
    links: ['Blog V.2', 'Blog V.3', 'Internal Blog', 'Licensing'],
  },
];

/* Footer fades + rises from below */
const footerVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
      /* inherits initial/animate from App stagger */
    >
      <div className="footer__top">
        {/* Left */}
        <div className="footer__left">
          <div className="footer__logo">
            <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="17" fill="#111" />
              <circle cx="17" cy="17" r="6" fill="none" stroke="white" strokeWidth="2.2" />
              <path d="M17 6 C11 6 6 11 6 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="17" cy="17" r="2.5" fill="white" />
            </svg>
            <span className="footer__brand">Catalis</span>
          </div>

          <p className="footer__nl-label">Subscribe to our newsletter</p>

          <div className="footer__newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CTAButton label="Get Started" variant="dark" className="footer__newsletter-btn" />
          </div>
        </div>

        {/* Right: 3 link columns */}
        <div className="footer__columns">
          {footerColumns.map((col, idx) => (
            <div className="footer__col" key={idx}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__col-links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Large watermark */}
      <div className="footer__watermark" aria-hidden="true">
        Catalis<span className="footer__dot">•</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
