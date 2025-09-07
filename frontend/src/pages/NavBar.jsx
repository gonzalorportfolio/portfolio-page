import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={isSticky ? 'sticky' : ''}>
      <NavLink to="/" className="myName">Gonzalo Romero</NavLink>
      
      {/* Hamburger Menu Button */}
      <div 
        className="hamburger" 
        onClick={toggleMenu}
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        tabIndex={0}
        role="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;