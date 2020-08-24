import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <HashLink to="/home#about-me">About</HashLink>
        </li>
        <li>
          <HashLink to="/home#resume">Experience</HashLink>
        </li>
        <li>
          <HashLink to="/home#resume">Projects</HashLink>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;