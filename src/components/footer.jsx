import React from "react";

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
    <div
      className="text-center py-6 text-sm max-w-6xl mx-auto"
      style={{ color: 'var(--color-text-muted)' }}
    >
      <p>© {new Date().getFullYear()} Andrel Karunia Sitanggang. Built with Gatsby & React.</p>
    </div>
  </footer>
)

export default Footer;