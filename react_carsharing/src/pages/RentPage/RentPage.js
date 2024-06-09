import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CarContext } from '../../context/carContext';
import styles from './RentPage.module.scss';
var RentPage = function () {
    var carId = useParams().carId;
    var selectedCar = useContext(CarContext).selectedCar;
    var _a = useState(null), startTime = _a[0], setStartTime = _a[1];
    var _b = useState(new Date()), currentTime = _b[0], setCurrentTime = _b[1];
    var _c = useState(false), isWaiting = _c[0], setIsWaiting = _c[1];
    var _d = useState(false), isTripEnded = _d[0], setIsTripEnded = _d[1];
    var _e = useState(0), costTrip = _e[0], setCostTrip = _e[1];
    useEffect(function () {
        setStartTime(new Date());
        var interval = setInterval(function () {
            setCurrentTime(new Date());
        }, 1000);
        return function () { return clearInterval(interval); };
    }, []);
    var handleWaiting = function () {
        setIsWaiting(!isWaiting);
    };
    var handleEndTrip = function () {
        setIsTripEnded(true);
        setCostTrip(calculateCost());
    };
    var calculateTimeElapsed = function () {
        if (!startTime)
            return "0:00";
        var totalSeconds = Math.floor((currentTime.getTime() - startTime.getTime() + 100) / 1000);
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    };
    var calculateCost = function () {
        if (!startTime)
            return 0;
        var totalSeconds = Math.floor((currentTime.getTime() - startTime.getTime() + 100) / 1000);
        var rate = isWaiting ? selectedCar.Price / 2 : selectedCar.Price;
        var cost = totalSeconds * rate / 60;
        return +cost.toFixed(2);
    };
    if (!selectedCar) {
        return React.createElement("div", null, "Car not found");
    }
    return (React.createElement("div", { className: styles.container }, isTripEnded ? (React.createElement(React.Fragment, null,
        React.createElement("h1", { className: styles.header }, "\u041F\u043E\u0435\u0437\u0434\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430"),
        React.createElement("p", { className: styles.cost },
            "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0435\u0437\u0434\u043A\u0438: ",
            costTrip,
            " \u0440\u0443\u0431\u043B\u0435\u0439"),
        React.createElement(Link, { to: "/" },
            React.createElement("button", { className: styles.button + " " + styles.returnButton }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443")))) : (React.createElement(React.Fragment, null,
        React.createElement("h1", { className: styles.header },
            "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430: ",
            selectedCar.Name),
        React.createElement("img", { src: selectedCar.Photo, alt: selectedCar.Name, className: styles.carImage }),
        React.createElement("div", { className: styles.time },
            "\u041F\u0440\u043E\u0448\u0435\u0434\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F: ",
            calculateTimeElapsed()),
        React.createElement("div", { className: styles.cost },
            "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0435\u0437\u0434\u043A\u0438: ",
            calculateCost(),
            " \u0440\u0443\u0431\u043B\u0435\u0439"),
        React.createElement("button", { onClick: handleWaiting, className: styles.button + " " + styles.waitingButton }, isWaiting ? 'Возобновить поездку' : 'Перейти в ожидание'),
        React.createElement("button", { onClick: handleEndTrip, className: styles.button + " " + styles.endTripButton }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u043E\u0435\u0437\u0434\u043A\u0443")))));
};
export default RentPage;
