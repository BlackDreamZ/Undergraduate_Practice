import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Fragment } from 'react';
import Header from '../appHeader/Header';
import Home from '../appHome/Home';
import ContactsPage from '../../pages/ContactsPage/ContactsPage.tsx';
import AboutPage from '../../pages/AboutPage/AboutPage.tsx';
import LoginPage from '../../pages/LoginPage/LoginPage.tsx';

const App = () => {
    return (
        <Fragment>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/rent" element={<Home/>} />
                    <Route path="/contacts" element={<ContactsPage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
