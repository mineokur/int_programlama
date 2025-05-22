import React from 'react';
import './About.css'; // About'a özel stil dosyası

function About() {
    return (
        <section id="about" className="about-section container">
            <h2>Ben Kimim?</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>Merhaba! Ben Mine Okuroğulları. Bir bilgisayar mühendisi adayıyım. Yazılım dünyasında 2 yıldır aktif olarak bulunuyorum ve [Y] teknolojilerine derinlemesine hakimim.</p>
                    <p>Amacım, teknoloji ve yaratıcılığı birleştirerek işlevsel ve estetik çözümler üretmektir. [Proje türleri/ilgi alanlarınız] üzerine çalışmaktan keyif alıyorum.</p>
                    <p>Boş zamanlarımda örgü örmek ve yemek yapmak ile ilgilenirim. Her zaman yeni şeyler öğrenmeye ve kendimi geliştirmeye açığım.</p>
                    {/* Daha fazla kişisel bilgi, eğitim, iş tecrübesi vb. eklenebilir */}
                </div>
                {/* İsteğe bağlı olarak bir fotoğraf veya illüstrasyon eklenebilir */}
                {/* <div className="about-image">
          <img src="path/to/your/image.jpg" alt="About Me" />
        </div> */}
            </div>
        </section>
    );
}

export default About;