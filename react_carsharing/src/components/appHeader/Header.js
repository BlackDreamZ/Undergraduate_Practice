import * as React from 'react';
import { useState } from 'react';
import './Header.scss';
var Header = function () {
    var PC_version = window.innerWidth > 1023;
    var _a = useState(PC_version), menuOpen = _a[0], setMenuOpen = _a[1];
    var toggleMenu = function () {
        setMenuOpen(!menuOpen);
    };
    return (React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
        React.createElement("div", { className: "container-fluid" },
            React.createElement("div", { className: "navbar-header" },
                React.createElement("h2", { className: "navbar-brand" }, "\u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439"),
                React.createElement("button", { className: "navbar-toggler " + (menuOpen ? 'collapsed' : ''), onClick: toggleMenu, "aria-expanded": menuOpen, "aria-label": "Toggle navigation", type: "button" },
                    React.createElement("div", { className: "b1" }),
                    React.createElement("div", { className: "b2" }),
                    React.createElement("div", { className: "b3" }))),
            React.createElement("div", { className: "collapse navbar-collapse " + (menuOpen ? 'show' : '') },
                React.createElement("ul", { className: "navbar-nav ms-auto mb-2 mb-lg-0" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/rent" }, "\u0410\u0440\u0435\u043D\u0434\u0430")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/contacts" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/about" }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "/login" }, "\u0412\u043E\u0439\u0442\u0438")))))));
};
export default Header;
