import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="cinema-footer">
      <div className="container cinema-footer-inner">
        <div className="footer-brand-column">
          <div className="footer-logo">
            <span className="footer-spool-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent-amber)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <span className="footer-title">CINE—STREAM</span>
          </div>
          <p className="footer-tagline">
            Curated vintage cinema marquee meets modern editorial film discovery.
          </p>
        </div>

        <div className="footer-perforation" aria-hidden="true">
          <span className="footer-notch footer-notch-left" />
          <span className="footer-notch footer-notch-right" />
        </div>

        <div className="footer-credits-column">
          <p className="footer-credit-text">
            Crafted & Developed by <span className="dev-name">Vinayak Sharma</span>
          </p>

          <div className="footer-social-links" aria-label="Social links">
            <a
              href="mailto:vinayaksharma2289@gmail.com"
              className="social-pill"
              aria-label="Email Vinayak Sharma"
              title="Gmail"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Gmail</span>
            </a>

            <a
              href="https://linkedin.com/in/vinayak2922k"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/vinayak2922k"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          <span className="footer-copyright">
            © {new Date().getFullYear()} CINE—STREAM • ALL ARCHIVAL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

