'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('navigation');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="navigation" className="nav-header">
      <div className="nav-wrapper">
        <div className="nav-content">
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
      </div>
    </header>
  );
}
