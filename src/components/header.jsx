import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import 'typeface-pt-sans';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 mx-auto flex items-center w-full justify-center transition-all duration-300 ${
        isScrolled ? 'py-3 bg-[var(--color-background-secondary)] backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'
      }`}
      style={{
        zIndex: 'var(--z-fixed)',
        borderBottom: isScrolled
          ? '1px solid var(--color-border)'
          : '1px solid transparent',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-7xl flex justify-between items-center px-4 lg:px-6">
        {/* Logo & Brand */}
        <Link
          to="/"
          className="flex items-center no-underline group focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] rounded-lg p-1"
          aria-label="Go to homepage - Andrel Karunia"
          style={{
            textDecoration: 'none',
            transition: 'transform var(--transition-base)'
          }}
        >
          <div className="flex items-center">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:scale-105 transition-transform duration-300"
              style={{
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              <span className="text-white font-bold text-lg font-mono">A</span>
            </div>
            <div>
              <span
                className="font-bold text-lg block group-hover:text-[var(--color-accent-primary)] transition-colors duration-300"
                style={{
                  color: 'var(--color-text-primary)',
                }}
              >
                Andrel Karunia
              </span>
              <span
                className="text-xs block"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Software Developer
              </span>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/#projects" label="Projects" />
          <NavLink to="/#profile" label="Profile" />
          <div className="ml-6 pl-6 border-l border-[var(--color-border)]">
            <a
              href="#contact"
              className="btn btn-primary btn-sm px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent-primary)]/25 focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-[var(--color-surface-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]"
          style={{ color: 'var(--color-text-primary)' }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: 'var(--shadow-lg)'
        }}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-4 py-6 space-y-4">
          <MobileNavLink to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="/#projects" label="Projects" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink to="/#profile" label="Profile" onClick={() => setIsMenuOpen(false)} />
          <div className="pt-4 border-t border-[var(--color-border)]">
            <a
              href="#contact"
              className="btn btn-primary w-full justify-center focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                setTimeout(() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
};

// Desktop Navigation Link Component
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group overflow-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]"
    style={{ color: 'var(--color-text-primary)' }}
  >
    <span className="relative z-10 group-hover:text-[var(--color-accent-primary)] transition-colors">
      {label}
    </span>
    <div
      className="absolute inset-0 bg-[var(--color-accent-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
    />
    <div
      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[var(--color-accent-primary)] group-hover:w-full group-hover:left-0 transition-all duration-300"
    />
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    className="block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-accent-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]"
    style={{ color: 'var(--color-text-primary)' }}
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Header;