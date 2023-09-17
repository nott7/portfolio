import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-4">
        <a href="index.html" className="hover:scale-110"> Nott.dev</a>
        <ul className="flex gap-6">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
