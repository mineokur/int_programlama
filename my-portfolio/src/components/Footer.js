import React from 'react';
import './Footer.css'; // Footer'a özel stil dosyası

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Mine Okuroğulları. Tüm Hakları Saklıdır.</p>
                <div className="social-links">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a> {/* Boş bağlantı */}
                    <a href="https://github.com/mineokur" target="_blank" rel="noopener noreferrer">GitHub</a> {/* Kendi GitHub linkinizi ekleyin */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> {/* Boş bağlantı */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;