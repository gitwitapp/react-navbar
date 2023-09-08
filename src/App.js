import React, { useState } from 'react';

import './tailwind-config.js';

const Navbar = ({ navLinks, activeLink, handleLinkClick }) => {
  return (
    <nav className="flex items-center justify-between py-4">
      <h1 className="text-white text-2xl font-extrabold">My React App</h1>
      <ul className="flex space-x-4">
        {navLinks.map((navLink) => (
          <li key={navLink.link}>
            <a 
              href="#" 
              className={`text-white hover:font-bold ${activeLink === navLink.link ? "font-bold" : ""}`} 
              onClick={() => handleLinkClick(navLink.link)}
            >
              {navLink.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Content = ({ activeLink }) => {
  let content;

  if (activeLink === "home") {
    content = "Welcome to my website!";
  } else if (activeLink === "about") {
    content = "This is the about page.";
  } else if (activeLink === "contact") {
    content = "Contact us for any queries.";
  }

  return (
    <p className="px-2 py-4">
      {content}
    </p>
  );
};

export default function App() {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = [
    { text: "Home", link: "home" },
    { text: "About", link: "about" },
    { text: "Contact", link: "contact" }
  ];

  return (
    <div className="p-4">
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="container mx-auto">
          <Navbar navLinks={navLinks} activeLink={activeLink} handleLinkClick={handleLinkClick} />
        </div>
      </div>
      
      <Content activeLink={activeLink} />
    </div>
  );
}