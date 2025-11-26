import React from "react";
import Contact from "./contact";

const Footer = () => (
  <footer
    className="w-full left-0 right-0 mx-auto"
    style={{
      background: 'var(--color-background-secondary)',
      borderTop: '1px solid var(--color-border)',
      zIndex: 'var(--z-fixed)'
    }}
    role="contentinfo"
    aria-label="Site footer"
  >
    <div className="max-w-6xl mx-auto">
      <Contact />
    </div>
    <div 
      className="text-center py-4 text-sm"
      style={{ color: 'var(--color-text-muted)' }}
    >
      <p>© {new Date().getFullYear()} Andrel Karunia Sitanggang. Built with Gatsby & React.</p>
    </div>
  </footer>
)

export default Footer;