import { useEffect } from 'react';
import '../styles/design-system.css';
import '../styles/mobile-optimization.css';
import '../styles/page-transition.css';
import { initAllAnimations } from '../utils/animations';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  useEffect(() => {
    // Initialize animations on mount
    initAllAnimations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <Contact />
    </div>
  );
}
