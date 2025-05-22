import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini import ediyoruz
import './Home.css';

function Home() {
    return (
        <section id="home" className="home-section">
            <div className="container">
                <div className="home-content">
                    <h1>Merhaba, Ben Mine Okuroğulları</h1>
                    <p className="tagline">Bir bilgisayar mühendisi adayı olarak, yaratıcı çözümler üretmeyi seviyorum.</p>
                    <div className="home-buttons"> {/* Butonları bir div içine alalım */}
                        <Link to="/portfolio" className="btn primary-btn">Portfolyomu İncele</Link> {/* Portfolyo sayfasına yönlendir */}
                        <Link to="/contact" className="btn secondary-btn">Bana Ulaş</Link> {/* İletişim sayfasına yönlendir */}
                    </div>
                </div>
                {/* İsterseniz buraya bir görsel veya illüstrasyon ekleyebilirsiniz */}
            </div>
        </section>
    );
}

export default Home;