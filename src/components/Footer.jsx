import React from 'react';

const FooterColumn = ({ title, links }) => (
  <div className="footer-column">
    <h4>{title}</h4>
    {links.map((link, i) => (
      <a key={i} href="#">{link}</a>
    ))}
  </div>
);

const SocialIcon = ({ iconClass }) => (
  <a href="#" className="social-icon"><i className={`fab ${iconClass}`}></i></a>
);

const Footer = () => {
  const footerData = [
    { title: 'About', links: ['Our Story', 'Team', 'Careers'] },
    { title: 'Contact', links: ['Support Center', 'Partnerships', 'Media Inquiries'] },
    { title: 'Terms & Privacy', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] }
  ];

  const socialIcons = ['fa-instagram', 'fa-facebook-f', 'fa-linkedin-in', 'fa-twitter'];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            {footerData.map((col, idx) => <FooterColumn key={idx} title={col.title} links={col.links} />)}
          </div>

          <div className="footer-social">
            {socialIcons.map((ic, idx) => <SocialIcon key={idx} iconClass={ic} />)}
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2025 FilmConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
