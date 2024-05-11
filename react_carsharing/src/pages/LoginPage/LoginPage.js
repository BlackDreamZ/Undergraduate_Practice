import React, { useState } from 'react';
import './LoginPage.scss';
var LoginPage = function () {
    var _a = useState('login'), activeTab = _a[0], setActiveTab = _a[1];
    var _b = useState(''), phoneNumber = _b[0], setPhoneNumber = _b[1];
    var _c = useState(''), password = _c[0], setPassword = _c[1];
    var handleTabChange = function (tab) {
        setActiveTab(tab);
    };
    var handlePhoneNumberChange = function (event) {
        setPhoneNumber(event.target.value);
    };
    var handlePasswordChange = function (event) {
        setPassword(event.target.value);
    };
    var handleLoginSubmit = function (event) {
        event.preventDefault();
        // Здесь можно добавить логику для отправки запроса на сервер для авторизации
        console.log('Logging in with phone number:', phoneNumber, 'and password:', password);
    };
    var handleRegisterSubmit = function (event) {
        event.preventDefault();
        // Здесь можно добавить логику для отправки запроса на сервер для регистрации
        console.log('Registering with phone number:', phoneNumber, 'and password:', password);
    };
    return (React.createElement("div", { className: "auth-page" },
        React.createElement("div", { className: "tabs" },
            React.createElement("button", { className: activeTab === 'login' ? 'active' : '', onClick: function () { return handleTabChange('login'); } }, "\u0412\u043E\u0439\u0442\u0438"),
            React.createElement("button", { className: activeTab === 'register' ? 'active' : '', onClick: function () { return handleTabChange('register'); } }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")),
        activeTab === 'login' ? (React.createElement("form", { onSubmit: handleLoginSubmit, className: "auth-form" },
            React.createElement("input", { type: "text", placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", value: phoneNumber, onChange: handlePhoneNumberChange }),
            React.createElement("input", { type: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", value: password, onChange: handlePasswordChange }),
            React.createElement("button", { type: "submit" }, "\u0412\u043E\u0439\u0442\u0438"))) : (React.createElement("form", { onSubmit: handleRegisterSubmit, className: "auth-form" },
            React.createElement("input", { type: "text", placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", value: phoneNumber, onChange: handlePhoneNumberChange }),
            React.createElement("input", { type: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", value: password, onChange: handlePasswordChange }),
            React.createElement("button", { type: "submit" }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))));
};
export default LoginPage;
