import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';
import { API_URL } from "../../index";

const LoginPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false); // Состояние успешной регистрации
    const [registeredPhoneNumber, setRegisteredPhoneNumber] = useState(''); // Состояние номера телефона при успешной регистрации
    const [termsAgreed, setTermsAgreed] = useState(false); // Состояние согласия с условиями
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
                    phone_number,
                    password,
                }),
            });
            const data = await response.json();
            console.log('Login response:', data);

            if (!data.error) {
                sessionStorage.removeItem('authenticatedPhoneNumber');
                sessionStorage.removeItem('balance');
                sessionStorage.setItem('authenticatedPhoneNumber', phone_number);
                sessionStorage.setItem('balance', data.balance);
                console.log(data.balance);
                navigate('/');
            } else {
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
            const response = await fetch(`${API_URL}/api/register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone_number,
                    password,
                    status: 'user',
                    balance: 0,
                }),
            });
            const data = await response.json();
            console.log('Register response:', data);

            if (!data.error) {
                // Сохраняем авторизованный номер телефона и баланс
                sessionStorage.removeItem('authenticatedPhoneNumber');
                sessionStorage.removeItem('balance');
                sessionStorage.setItem('authenticatedPhoneNumber', phone_number);
                sessionStorage.setItem('balance', data.balance);
                setRegisteredPhoneNumber(phone_number);
                setRegistrationSuccess(true);
                setError('');
            } else {
                setError(`Ошибка: ${data.error}`);
            }
        } catch (error) {
            console.error('Error registering:', error);
            setError('Ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
        }
    };


    const isPhoneNumberValid = phone_number.length === 11; // 11 символов для номера телефона с кодом страны
    const isPasswordValid = password.length >= 6;

    return (
        <div className="auth-page">
            <div className="tabs">
                <button className={activeTab === 'login' ? 'active' : ''} onClick={() => handleTabChange('login')}>Войти</button>
                <button className={activeTab === 'register' ? 'active' : ''} onClick={() => handleTabChange('register')}>Зарегистрироваться</button>
            </div>
            {error && <div className="error">{error}</div>}
            {registrationSuccess && (
                <div className="overlay">
                    <div className="success-popup">
                        <p>Вы успешно зарегистрированы! <br/>Ваш логин: {registeredPhoneNumber} <br/>
                        Необходимо предоставить паспортные данные и водительское удостоверение в виде фотографий на почту <a href="mailto:register@rentalcar.ru">register@rentalcar.ru</a> для получения доступа к аренде автомобилей.<br/>Вы будете перенаправлены в почтовый клиент.</p>
                        <button type="button" onClick={() => { navigate('/'); }}>OK</button>
                    </div>
                </div>
            )}
            {activeTab === 'login' ? (
                <form onSubmit={handleLoginSubmit} className="auth-form">
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        placeholder="Телефон"
                        value={phone_number}
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
                        value={phone_number}
                        onChange={handlePhoneNumberChange}
                    />
                    <input type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={termsAgreed}
                            onChange={(e) => setTermsAgreed(e.target.checked)}
                            id="termsCheckbox"
                        />
                        <label htmlFor="termsCheckbox">Я согласен с условиями о <a href='#'>хранении пользовательских данных</a>, <a href='#'>правилами сервиса</a>, <a href='#'>договором аренды</a></label>
                    </div>
                    <button type="submit" disabled={!isPhoneNumberValid || !isPasswordValid || !termsAgreed}>Зарегистрироваться</button>
                </form>
            )}
        </div>
    );
};

export default LoginPage;
