import * as React from 'react';
import { useState, useEffect } from 'react';
import ListCars from '../appListCars/ListCars';
import axios from 'axios';
import ModalCar from '../appModalCar/ModalCar';
import CarMap from "../appCarMap/CarMap.jsx";
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
        React.createElement("h2", null, "List of Cars"),
        React.createElement(ListCars, { cars: cars, resetState: resetState, newCar: true }),
        React.createElement("div", null,
            React.createElement(ModalCar, { create: true, resetState: resetState, newCar: true, car: null }))));
};
export default Home;
