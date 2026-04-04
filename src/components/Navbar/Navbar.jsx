import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import NavItem from './NavItem';
import CTAButton from './CTAButton';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About us', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Contact', href: '#', active: true },
  { label: 'Pages', href: '#', hasDropdown: true },
];

/* Navbar slides DOWN from above */
const navVariants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      variants={navVariants}
      /* inherits initial/animate from parent stagger */
    >
      <Logo />

      {/* Desktop Nav */}
      <nav className="navbar__nav" aria-label="Main navigation">
        <ul className="navbar__links">
          {navLinks.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>

      {/* Desktop CTA */}
      <div className="navbar__cta">
        <CTAButton label="Get Started" />
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className={`hamburger__line${menuOpen ? ' hamburger__line--open-1' : ''}`} />
        <span className={`hamburger__line${menuOpen ? ' hamburger__line--open-2' : ''}`} />
        <span className={`hamburger__line${menuOpen ? ' hamburger__line--open-3' : ''}`} />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <ul className="mobile-menu__links">
              {navLinks.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </ul>
            <CTAButton label="Get Started" className="mobile-menu__cta" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
