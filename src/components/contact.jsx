import React, { useEffect, useState, useRef } from "react";
import { personalUrl } from "../static/data";

const Contact = () => {
  const [show, setShow] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  // Handle ESC key to close and Focus Trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && show) {
        setShow(false);
        triggerRef.current?.focus(); // Return focus to trigger
      }

      // Simple Focus Trap
      if (show && panelRef.current) {
        const focusableElements = panelRef.current.querySelectorAll('a[href], button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [show]);

  // Focus panel when opened
  useEffect(() => {
    if (show && panelRef.current) {
      const firstLink = panelRef.current.querySelector('a');
      firstLink?.focus();
    }
  }, [show]);

  return (
    <>
      {/* Background overlay */}
      <div 
        role="presentation" 
        className={`fixed inset-0 w-full h-full transition-opacity duration-300 ${show ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(4px)',
          zIndex: 'var(--z-modal-backdrop)'
        }}
        onClick={() => setShow(false)}
      />

      <div className="w-full relative">
        {/* Toggle button */}
        <div className={`relative flex justify-end ${show ? 'pointer-events-none' : ''}`} style={{ zIndex: 'var(--z-modal)' }}>
          <button
            ref={triggerRef}
            onClick={() => setShow(prev => !prev)}
            className={`right-8 bottom-20 absolute p-3 border-2 rounded-full shadow-lg animate-pulse-glow transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent-primary)]/50 ${show ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
            style={{
              background: 'var(--gradient-primary)',
              borderColor: 'var(--color-accent-primary)',
              boxShadow: 'var(--shadow-glow)'
            }}
            aria-label="Open contact options"
            aria-expanded={show}
            aria-controls="contact-panel"
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Contact panel */}
        <div 
          id="contact-panel"
          ref={panelRef}
          className={`absolute flex flex-col items-end bottom-20 right-8 w-auto transition-all duration-300 origin-bottom-right ${show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}`}
          style={{ zIndex: 'var(--z-modal)' }}
          role="dialog"
          aria-label="Contact options"
          aria-modal="true"
        >
          <div className="flex flex-col items-center space-y-4 bg-[var(--color-surface)] p-4 rounded-2xl border border-[var(--color-border)] shadow-2xl">
             {/* Close Button for Mobile/Accessibility */}
             <button
              onClick={() => setShow(false)}
              className="absolute -top-3 -right-3 bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] rounded-full p-1 border border-[var(--color-border)] shadow-md hover:bg-[var(--color-surface-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)]"
              aria-label="Close contact panel"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Twitter */}
            <a 
              className="block transform transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] rounded-full" 
              href={personalUrl.twitterDMMe}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send message on Twitter"
            >
              <svg className="filter-shadow-md" width="40" height="40" fill="rgba(29,161,242,1.00)" viewBox="0 0 24 24">
                <g>
                  <path
                    d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                  ></path>
                </g>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              className="block transform transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] rounded-full" 
              href={personalUrl.facebookMessageMe}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send message on Facebook"
            >
              <svg className="filter-shadow-md" viewBox="0 0 36 36" fill="url(#jsc_s_2)" height="40" width="40">
                <defs>
                  <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2">
                    <stop offset="0%" stopColor="#0062E0"></stop>
                    <stop offset="100%" stopColor="#19AFFF"></stop>
                  </linearGradient>
                </defs>
                <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                <path fill="white" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
              </svg>
            </a>

            {/* Email */}
            <a 
              href={personalUrl.gmailMe}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email via Gmail"
              className="block transform transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] rounded-full"
            >
              <img 
                className="shadow-md w-10" 
                src="https://img.icons8.com/color/2x/gmail.png" 
                alt="Email via Gmail"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;