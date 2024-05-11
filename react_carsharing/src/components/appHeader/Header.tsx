import * as React from 'react';
import { useState } from 'react';
import './Header.scss';

const Header: React.FC = () => {

    const PC_version = window.innerWidth > 1023;

    const [menuOpen, setMenuOpen] = useState(PC_version);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h2 className="navbar-brand">Аренда автомобилей</h2>
                        <button
                            className={`navbar-toggler ${menuOpen ? 'collapsed' : ''}`}
                            onClick={toggleMenu}
                            aria-expanded={menuOpen}
                            aria-label="Toggle navigation"
                            type="button">
                            <div className="b1"></div>
                            <div className="b2"></div>
                            <div className="b3"></div>
                        </button>
                    </div>
                    <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/rent">Аренда</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacts">Контакты</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">О компании</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Войти</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    );
}

export default Header;
