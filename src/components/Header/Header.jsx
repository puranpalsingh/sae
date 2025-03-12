import { useState, useEffect } from 'react';
import './Header.css'
export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    return <header className={isScrolled ? 'scrolled' : ''}>
        <div className="container header-container">
          <a href="#" className="logo">SAE NIT kurukshetra</a>
          <nav className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">Nitrox</a>
            <a href="#">Autokriti</a>
            <a href="#">Accelerons</a>
            <a href="#">SAE Unity Drive</a>
          </nav>
        </div>
      </header>
}