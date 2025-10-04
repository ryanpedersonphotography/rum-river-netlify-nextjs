'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={scrolled ? 'nav-header scrolled' : 'nav-header'}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        background: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg-transparent)',
        backdropFilter: scrolled ? `blur(var(--blur-md))` : 'none',
        padding: scrolled ? 'var(--space-4) 0' : 'var(--space-8) 0',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        transition: 'var(--transition-base)',
        textAlign: 'center'
      }}
    >
      {/* Pattern 1: Full-width centered - no wrapper constraint */}
      <div className="nav-content" style={{ padding: 'var(--space-4) 0' }}>
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <div className="nav-logo-circle">RR</div>
            <div className="nav-logo-text">
              <div className="nav-logo-name">Rum River</div>
              <div className="nav-logo-tagline">Wedding Barn</div>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav>
            <ul className="nav-menu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/vendor-list">Vendor List</Link></li>

              {/* Property Dropdown */}
              <li className="nav-dropdown">
                <Link href="/property">The Property ▾</Link>
                <ul className="nav-dropdown-menu">
                  <li><Link href="/location">Location</Link></li>
                  <li><Link href="/history">History</Link></li>
                </ul>
              </li>

              <li><Link href="/gallery">Gallery</Link></li>

              {/* Testimonials Dropdown */}
              <li className="nav-dropdown">
                <Link href="/testimonials">Testimonials & Features ▾</Link>
                <ul className="nav-dropdown-menu">
                  <li><Link href="/testimonials">Testimonials</Link></li>
                  <li><Link href="/real-weddings">Real Weddings Blog</Link></li>
                </ul>
              </li>

              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
      </div>
    </header>
  );
}
