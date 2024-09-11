import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.unjKVcmbx5qHF3nFF_nRVQHaE7&pid=Api&P=0&h=180"
            alt="Ashoka Chakra"
          />
          <p>
            Learn more about the Indian Constitution, a foundation of our democracy, and its relevance in today's context.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#page1">Preamble</a></li>
            <li><a href="#page2">Fundamental Rights</a></li>
            <li><a href="#page3">Directive Principles</a></li>
            <li><a href="#page4">Schedules</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Constitution Hall, New Delhi, India</p>
          <p>Phone: 011-12345678</p>
          <p>Email: info@constitution.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
