import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Header'a özel stil dosyası

function Header() {
    return (
        <header className="header">
            <nav className="container">
                <div className="logo">
                    <Link to="/">Mine Okuroğulları</Link> {/* Kendi isminizi yazın */}
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/about">Ben Kimim?</Link></li>
                    <li><Link to="/skills">Neler Yapabilirim?</Link></li>
                    <li><Link to="/portfolio">Portfolyo</Link></li>
                    <li><Link to="/contact">İletişim</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;