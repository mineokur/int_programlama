import React from 'react';
import './Skills.css'; // Skills'e özel stil dosyası

function Skills() {
    const skills = [
        { name: 'JavaScript', level: 'Orta Seviye' },
        { name: 'React.js', level: 'Temel Seviye' },
        { name: 'Node.js', level: 'Temel Seviye' },
        { name: 'C#', level: 'Orta Seviye' },
        { name: 'Python', level: 'Orta Seviye' },
        { name: 'İngilizce', level: 'Orta Seviye' },
        { name: 'Almanca', level: 'Temel Seviye' },
        { name: 'Korece', level: 'Temel Seviye' },
        // Kendi yeteneklerinizi ve seviyelerinizi ekleyin
    ];

    return (
        <section id="skills" className="skills-section container">
            <h2>Neler Yapabilirim?</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;