var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';
import { API_URL } from "../../index";
var LoginPage = function () {
    var _a = useState('login'), activeTab = _a[0], setActiveTab = _a[1];
    var _b = useState(''), phone_number = _b[0], setPhoneNumber = _b[1];
    var _c = useState(''), password = _c[0], setPassword = _c[1];
    var _d = useState(''), error = _d[0], setError = _d[1];
    var _e = useState(false), registrationSuccess = _e[0], setRegistrationSuccess = _e[1]; // Состояние успешной регистрации
    var _f = useState(''), registeredPhoneNumber = _f[0], setRegisteredPhoneNumber = _f[1]; // Состояние номера телефона при успешной регистрации
    var navigate = useNavigate(); // Инициализация
    var handleTabChange = function (tab) {
        setActiveTab(tab);
    };
    var handlePhoneNumberChange = function (event) {
        var value = event.target.value.replace(/\D/g, ''); // Оставляем только цифры
        setPhoneNumber(value);
    };
    var handlePasswordChange = function (event) {
        setPassword(event.target.value);
    };
    var handleLoginSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(API_URL + "/api/login/", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                phone_number: phone_number,
                                password: password,
                            }),
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log('Login response:', data);
                    if (!data.error) {
                        navigate('/rent');
                    }
                    else {
                        setError("\u041E\u0448\u0438\u0431\u043A\u0430: " + data.error);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error logging in:', error_1);
                    setError('Ошибка при входе. Пожалуйста, попробуйте еще раз.');
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleRegisterSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(API_URL + "/api/register/", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                phone_number: phone_number,
                                password: password,
                                status: 'user',
                                balance: 0,
                            }),
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log('Register response:', data);
                    if (!data.error) {
                        setRegisteredPhoneNumber(phone_number); // Сохраняем номер телефона при успешной регистрации
                        setRegistrationSuccess(true);
                        setError('');
                    }
                    else {
                        setError("\u041E\u0448\u0438\u0431\u043A\u0430: " + data.error);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error('Error registering:', error_2);
                    setError('Ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var isPhoneNumberValid = phone_number.length === 11; // 11 символов для номера телефона с кодом страны
    var isPasswordValid = password.length >= 6;
    return (React.createElement("div", { className: "auth-page" },
        React.createElement("div", { className: "tabs" },
            React.createElement("button", { className: activeTab === 'login' ? 'active' : '', onClick: function () { return handleTabChange('login'); } }, "\u0412\u043E\u0439\u0442\u0438"),
            React.createElement("button", { className: activeTab === 'register' ? 'active' : '', onClick: function () { return handleTabChange('register'); } }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")),
        error && React.createElement("div", { className: "error" }, error),
        registrationSuccess && (React.createElement("div", { className: "overlay" },
            React.createElement("div", { className: "success-popup" },
                React.createElement("p", null,
                    "\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B! ",
                    React.createElement("br", null),
                    "\u0412\u0430\u0448 \u043B\u043E\u0433\u0438\u043D: ",
                    registeredPhoneNumber),
                React.createElement("button", { type: "button", onClick: function () { navigate('/rent'); } }, "OK")))),
        activeTab === 'login' ? (React.createElement("form", { onSubmit: handleLoginSubmit, className: "auth-form" },
            React.createElement(InputMask, { mask: "+7 (999) 999-99-99", placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", value: phone_number, onChange: handlePhoneNumberChange }),
            React.createElement("input", { type: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", value: password, onChange: handlePasswordChange }),
            React.createElement("button", { type: "submit", disabled: !isPhoneNumberValid || !isPasswordValid }, "\u0412\u043E\u0439\u0442\u0438"))) : (React.createElement("form", { onSubmit: handleRegisterSubmit, className: "auth-form" },
            React.createElement(InputMask, { mask: "+7 (999) 999-99-99", placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", value: phone_number, onChange: handlePhoneNumberChange }),
            React.createElement("input", { type: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", value: password, onChange: handlePasswordChange }),
            React.createElement("button", { type: "submit", disabled: !isPhoneNumberValid || !isPasswordValid }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))));
};
export default LoginPage;
