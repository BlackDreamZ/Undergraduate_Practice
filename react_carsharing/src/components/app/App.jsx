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
import RentPage from '../../pages/RentPage/RentPage.tsx';
import { CarProvider } from '../../context/carContext';

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <CarProvider>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/rent" element={<RentPage/>} />
                        <Route path="/contacts" element={<ContactsPage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/login" element={<LoginPage/>} />
                    </Routes>
                </CarProvider>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
