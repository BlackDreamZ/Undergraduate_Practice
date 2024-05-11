import React, { useState } from 'react';
import './LoginPage.scss';

const LoginPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleTabChange = (tab: 'login' | 'register') => {
        setActiveTab(tab);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Здесь можно добавить логику для отправки запроса на сервер для авторизации
        console.log('Logging in with phone number:', phoneNumber, 'and password:', password);
    };

    const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Здесь можно добавить логику для отправки запроса на сервер для регистрации
        console.log('Registering with phone number:', phoneNumber, 'and password:', password);
    };

    return (
        <div className="auth-page">
            <div className="tabs">
                <button className={activeTab === 'login' ? 'active' : ''} onClick={() => handleTabChange('login')}>Войти</button>
                <button className={activeTab === 'register' ? 'active' : ''} onClick={() => handleTabChange('register')}>Зарегистрироваться</button>
            </div>
            {activeTab === 'login' ? (
                <form onSubmit={handleLoginSubmit} className="auth-form">
                    <input type="text" placeholder="Телефон" value={phoneNumber} onChange={handlePhoneNumberChange} />
                    <input type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
                    <button type="submit">Войти</button>
                </form>
            ) : (
                <form onSubmit={handleRegisterSubmit} className="auth-form">
                    <input type="text" placeholder="Телефон" value={phoneNumber} onChange={handlePhoneNumberChange} />
                    <input type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
                    <button type="submit">Зарегистрироваться</button>
                </form>
            )}
        </div>
    );
};

export default LoginPage;
