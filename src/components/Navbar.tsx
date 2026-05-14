"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    };
  }, [isMenuOpen]);

  const toggleMenu = (e: any) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="container nav-content">
          <Link href="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <Image 
              src={(isScrolled || isMenuOpen) ? "/logo_color.png" : "/logo_white.png"} 
              alt="Karur Annapoorna" 
              width={120} 
              height={35} 
              className="logo-img"
              priority
            />
          </Link>

          {/* This spacer ensures the logo doesn't overlap the button area */}
          <div className="nav-spacer" style={{ flex: 1 }}></div>
          
          <div className="nav-links-desktop">
            <Link href="/#home">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/menu">Full Menu</Link>
            <Link href="/#featured">Our Specialties</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Independent Mobile Toggle for maximum reliability */}
      <div 
        className={`mobile-toggle-v5 ${isMenuOpen ? "active" : ""}`} 
        onClick={toggleMenu}
        onTouchEnd={toggleMenu}
      >
        <span className="toggle-text">{isMenuOpen ? "CLOSE" : "MENU"}</span>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-links">
          <Link href="/#home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/menu" onClick={() => setIsMenuOpen(false)}>Full Menu</Link>
          <Link href="/#featured" onClick={() => setIsMenuOpen(false)}>Our Specialties</Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}
