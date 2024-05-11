import React from 'react';
import './ContactsPage.scss';

const ContactsPage: React.FC = () => {
    return (
        <div className="contacts-container">
            <div className="contacts-info">
                <div className="map-container">
                    <iframe
                        title="Карта офиса"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.327088571946!2d37.537855415939086!3d55.74861528054776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acc3f19b8a6db%3A0x3de4d48b147f5d8b!2sFederation%20Tower!5e0!3m2!1sen!2sru!4v1620860357457!5m2!1sen!2sru"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="office-info">
                    <h2>Офис</h2>
                    <p>Адрес: Москва-Сити, Башня Федерация, 50-й этаж</p>
                    <p>Телефон: +7 (495) 123-45-67</p>
                    <p>Email: info@carrental.com</p>
                </div>
                <div className="working-hours">
                    <h2>Рабочее время</h2>
                    <p>Понедельник-пятница: 9:00 - 18:00</p>
                    <p>Суббота-воскресенье: выходной</p>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;
