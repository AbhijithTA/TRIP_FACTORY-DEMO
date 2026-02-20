import { useState } from 'react';
import { ChevronDown, Menu, X, Plane } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo">
          <Plane size={22} className="logo-icon" />
          <span className="logo-text">
            <span className="logo-trip">Travo</span>
            {/* <span className="logo-factory">Factory</span> */}
            
            {/* <span className="logo-factory">DEMOO</span> */}
          </span>
          <div className="logo-rainbow" />
        </div>

        {/* Desktop Links */}
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#">Destinations <ChevronDown size={14} /></a>
          </li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">My Booking</a></li>
          <li><a href="#">Organize a Group</a></li>
        </ul>

        {/* CTA */}
        <button className="navbar__cta">Book With Expert</button>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}