import React from 'react';

function Footer() {
  return (
    <footer className="footer shadow">
      <div className="footer__content">
        <div className="copyright">
          &copy; Logos {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer;
