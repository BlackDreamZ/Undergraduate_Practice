import * as React from 'react';
import { useState, useEffect } from 'react';
import ListCars from '../appListCars/ListCars';
import axios from 'axios';
import ModalCar from '../appModalCar/ModalCar';
import CarMap from "../appCarMap/CarMap.jsx";
import './Home.scss';
var Home = function () {
    var _a = useState([]), cars = _a[0], setCars = _a[1];
    useEffect(function () {
        getCars();
    }, []);
    var getCars = function () {
        axios.get('http://127.0.0.1:8000/')
            .then(function (response) { return setCars(response.data); })
            .catch(function (error) { return console.error('Error fetching cars:', error); });
    };
    var resetState = function () {
        getCars();
    };
    return (React.createElement("div", { style: { marginTop: '20px' } },
        React.createElement(CarMap, { cars: cars }),
        sessionStorage.getItem('user') === 'admin' ? React.createElement("div", null,
            React.createElement("h2", null, "List of Cars"),
            React.createElement(ListCars, { cars: cars, resetState: resetState, newCar: true }),
            React.createElement("div", null,
                React.createElement(ModalCar, { create: true, resetState: resetState, newCar: true, car: null })))
            :
                React.createElement("div", { className: "user-info-container" }, sessionStorage.getItem('authenticatedPhoneNumber') ?
                    (React.createElement("div", null,
                        React.createElement("h2", null,
                            "\u041D\u043E\u043C\u0435\u0440 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430: +",
                            sessionStorage.getItem('authenticatedPhoneNumber')),
                        React.createElement("h2", null,
                            "\u0411\u0430\u043B\u0430\u043D\u0441 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430: ",
                            sessionStorage.getItem('balance'),
                            " \u0440\u0443\u0431\u043B\u0435\u0439.")))
                    :
                        React.createElement("h2", null, "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B"))));
};
export default Home;
