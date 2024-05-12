import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './LoginPage.scss';

const LoginPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleTabChange = (tab: 'login' | 'register') => {
        setActiveTab(tab);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, ''); // Оставляем только цифры
        setPhoneNumber(value);
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

    const isPhoneNumberValid = phoneNumber.length === 11; // 11 символов для номера телефона с кодом страны
    const isPasswordValid = password.length >= 6;

    return (
        <div className="auth-page">
            <div className="tabs">
                <button className={activeTab === 'login' ? 'active' : ''} onClick={() => handleTabChange('login')}>Войти</button>
                <button className={activeTab === 'register' ? 'active' : ''} onClick={() => handleTabChange('register')}>Зарегистрироваться</button>
            </div>
            {activeTab === 'login' ? (
                <form onSubmit={handleLoginSubmit} className="auth-form">
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        placeholder="Телефон"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <input type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
                    <button type="submit" disabled={!isPhoneNumberValid || !isPasswordValid}>Войти</button>
                </form>
            ) : (
                <form onSubmit={handleRegisterSubmit} className="auth-form">
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        placeholder="Телефон"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <input type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
                    <button type="submit" disabled={!isPhoneNumberValid || !isPasswordValid}>Зарегистрироваться</button>
                </form>
            )}
        </div>
    );
};

export default LoginPage;
