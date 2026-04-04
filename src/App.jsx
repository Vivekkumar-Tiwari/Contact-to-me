import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Contact/HeroSection';
import Footer from './components/Footer/Footer';
import './App.css';

/* ─── Page-level stagger container ─────────────────
   Total duration: ~1.5s
   Each child staggers 0.18s apart
   Each item takes 0.55s to finish
   ──────────────────────────────────────────────── */
const pageVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
};

export const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function App() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
