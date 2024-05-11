import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Header from '../appHeader/Header';
import Home from '../appHome/Home';
import ContactsPage from '../appContactsPage/ContactsPage.tsx';
import AboutPage from '../appAboutPage/AboutPage.tsx';
import LoginPage from '../appLoginPage/LoginPage.tsx';
var App = function () {
    return (React.createElement(Router, null,
        React.createElement(Fragment, null,
            React.createElement(Header, null),
            React.createElement(Route, { exact: true, path: "/", component: Home }),
            React.createElement(Route, { path: "/rent", component: Home }),
            React.createElement(Route, { path: "/contacts", component: ContactsPage }),
            React.createElement(Route, { path: "/about", component: AboutPage }),
            React.createElement(Route, { path: "/login", component: LoginPage }))));
};
export default App;
