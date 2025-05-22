import React, { useState } from 'react';
import './Contact.css'; // Contact'a özel stil dosyası

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada formu gönderme mantığı (örneğin bir API'ye veya email servisine) yer alacak.
        // Şimdilik sadece konsola yazdırıyoruz.
        console.log('Form Gönderildi:', formData);
        alert('Mesajınız başarıyla gönderildi!');
        setFormData({ name: '', email: '', message: '' }); // Formu sıfırla
    };

    return (
        <section id="contact" className="contact-section container">
            <h2>İletişim</h2>
            <div className="contact-content">
                <div className="contact-form-container">
                    <h3>Bana Ulaşın</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Ad Soyad</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">İçerik</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn submit-btn">Gönder</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h3>Diğer İletişim Kanalları</h3>
                    <p>Email: <a href="mailto:eposta@example.com">mineokur67@gmail.com</a></p> {/* Kendi e-mail adresinizi yazın */}
                    <p>Telefon: 05396724703</p> {/* İsteğe bağlı */}
                    <div className="social-media-contact">
                        <h4>Sosyal Medya</h4>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
                        <a href="https://github.com/mineokur" target="_blank" rel="noopener noreferrer">GitHub</a> {/* Kendi GitHub linkinizi ekleyin */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;