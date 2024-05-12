import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';
import {API_URL} from "../../index";

const LoginPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Инициализация

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

    const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber,
                    password,
                }),
            });
            const data = await response.json();
            console.log('Login response:', data);

            // Проверяем, есть ли в ответе поле 'error'
            if (!data.error) {
                // Если ошибки нет, выполняем переход на страницу /rent
                navigate('/rent');
            } else {
                // Если есть ошибка, выводим ее
                setError(`Ошибка: ${data.error}`);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Ошибка при входе. Пожалуйста, попробуйте еще раз.');
        }
    };


    const handleRegisterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('${API_URL}/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber,
                    password,
                    status: 'user',
                    balance: 0,
                }),
            });
            const data = await response.json();
            console.log('Register response:', data);
            navigate('/rent');
        } catch (error) {
            console.error('Error registering:', error);
            setError('Ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
        }
    };

    const isPhoneNumberValid = phoneNumber.length === 11; // 11 символов для номера телефона с кодом страны
    const isPasswordValid = password.length >= 6;

    return (
        <div className="auth-page">
            <div className="tabs">
                <button className={activeTab === 'login' ? 'active' : ''} onClick={() => handleTabChange('login')}>Войти</button>
                <button className={activeTab === 'register' ? 'active' : ''} onClick={() => handleTabChange('register')}>Зарегистрироваться</button>
            </div>
            {error && <div className="error">{error}</div>}
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
