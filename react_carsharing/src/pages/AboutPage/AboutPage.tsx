import React from 'react';
// @ts-ignore
import carSharingImage from '../../assets/images/car-sharing-service.jpg';
import './AboutPage.scss';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <div className="about-content">
                <div className="company-image">
                    <img src={carSharingImage} alt="Car Sharing Service" />
                </div>
                <div className="company-history">
                    <h2>Наша история</h2>
                    <p>
                        CarRental была основана в 2010 году группой энтузиастов, которые хотели изменить способ,
                        которым люди путешествуют в городах. Начав с небольшого города, мы стремились предоставить
                        доступный, удобный и экологически чистый способ передвижения в пределах города.
                    </p>
                    <p>
                        С годами наша компания расширилась и теперь предоставляет свои услуги в десятках городов
                        по всему миру, при этом оставаясь верными нашим основным ценностям - доступности,
                        удобству и экологической устойчивости.
                    </p>
                    <p>
                        Мы гордимся тем, что делаем города более доступными и чище, и продолжаем развиваться,
                        чтобы предоставлять нашим клиентам лучший сервис и опыт в сфере каршеринга.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
