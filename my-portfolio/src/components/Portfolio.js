import React from 'react';
import './Portfolio.css'; // Portfolio'ya özel stil dosyası

function Portfolio() {
    const projects = [
        {
            title: 'Metin Düzenleme Uygulaması',
            description: 'Bu proje, metin düzenleme ve dosya kaydetme/açma gibi temel işlevlere sahip basit bir not defteri uygulamasıdır . [Kullanılan teknolojiler: Pyqt6, Python]',
            image: 'https://sherwin.scene7.com/is/image/sw/color-swatch?_tparam_size=250,250&layer=comp&_tparam_color=454B40', // Gerçek görsel URL'leri ile değiştirin
            githubLink: 'https://github.com/mineokur/metin-duzenleme-uygulama.git', // GitHub repo linki (varsa)
        },
        {
            title: 'Yemek Tarifi Uygulaması',
            description: 'Bu proje, kullanıcıların tarif ekleyip görüntüleyebildiği ve üye girişi yapabildiği yemek tarifi defteridir. [Kullanılan teknolojiler: Python, Pyqt6, SQLite]',
            image: 'https://sherwin.scene7.com/is/image/sw/color-swatch?_tparam_size=250,250&layer=comp&_tparam_color=454B40',
            githubLink: 'https://github.com/mineokur/yemek-tarifi-uygulama.git',
        },
        {
            title: 'Soru Bankası Uygulaması',
            description: 'Bu proje, kullanıcıların soru ekleyebildiği, bu sorulardan bir soru bankası oluşturabildiği ve oluşturulan bankayı Excel\'e aktarabildiği bir soru bankası yönetim sistemidir. [Kullanılan teknolojiler: Python, Pyqt6, SQLite]',
            image: 'https://sherwin.scene7.com/is/image/sw/color-swatch?_tparam_size=250,250&layer=comp&_tparam_color=454B40',
            githubLink: 'https://github.com/mineokur/soru-bankasi-uygulama.git',
        },
        // Kendi gerçek projelerinizi buraya ekleyin
    ];

    return (
        <section id="portfolio" className="portfolio-section container">
            <h2>Portfolyo</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <img src={project.image} alt={project.title} />
                        <div className="portfolio-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="portfolio-links">
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn project-btn">GitHub</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;