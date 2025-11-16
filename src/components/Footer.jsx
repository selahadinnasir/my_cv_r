import React from 'react';
// You need to install react-icons: npm install react-icons
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  // React way to handle the dynamic year (replacing index.js logic)
  const currentYear = new Date().getFullYear();

  // Data for social links
  const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: 'https://github.com/selahadinnasir/' },
    {
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/selahadinnasir-b73a832b3/',
    },
  ];

  // Background color for social buttons (.footer-list-items: #53C8B6)
  const socialBgColor = 'bg-primary-teal-mid';

  return (
    <footer className="footer bg-black text-white py-8 px-4">
      <div className="footer-content text-center max-w-7xl mx-auto">
        {/* Copyright Text */}
        <h4 className="text-base font-normal">
          Copyright © <span id="current-year">{currentYear}</span> All rights
          reserved |
        </h4>

        <div className="social-links mt-4 flex justify-center">
          <div className="footer-menu">
            {/* footer-menu-list: display: flex, list-style: none */}
            <ul className="footer-menu-list flex list-none p-0 m-0">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li
                    key={index}
                    // footer-list-items: 50x50, rounded-full, margin, background color
                    className={`footer-list-items h-12 w-12 flex items-center justify-center rounded-full mx-2 ${socialBgColor}`}
                  >
                    <a
                      className="footer-links text-xl text-white no-underline"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
