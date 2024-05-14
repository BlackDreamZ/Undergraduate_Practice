import React, { useState, useEffect } from 'react';
var RentalComponent = function () {
    var _a = useState(null), selectedCar = _a[0], setSelectedCar = _a[1];
    var _b = useState(null), user = _b[0], setUser = _b[1];
    var _c = useState(null), startTime = _c[0], setStartTime = _c[1];
    var _d = useState(0), rentalCost = _d[0], setRentalCost = _d[1];
    var _e = useState(false), modalVisible = _e[0], setModalVisible = _e[1];
    var startRental = function (car) {
        if (!car.rented) {
            setSelectedCar(car);
            setStartTime(new Date());
            car.rented = true;
            setModalVisible(true);
        }
        else {
            alert('Этот автомобиль уже арендован.');
        }
    };
    var calculateRentalCost = function () {
        if (startTime) {
            var endTime = new Date();
            var duration = (endTime.getTime() - startTime.getTime()) / 60000;
            setRentalCost(duration * 7.00);
        }
    };
    useEffect(function () {
        if (modalVisible) {
            var interval_1 = setInterval(function () {
                calculateRentalCost();
            }, 60000);
            return function () { return clearInterval(interval_1); };
        }
    }, [modalVisible, startTime]);
    var completeRental = function () {
        if (selectedCar && selectedCar.rented) {
            calculateRentalCost();
            selectedCar.rented = false;
            setStartTime(null);
            setModalVisible(false);
            alert("\u0410\u0440\u0435\u043D\u0434\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430. \u0421 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0430\u043B\u0430\u043D\u0441\u0430 \u0441\u043F\u0438\u0441\u0430\u043D\u043E ".concat(rentalCost.toFixed(2), " \u0440\u0443\u0431."));
        }
    };
    return (React.createElement("div", null, modalVisible && (React.createElement("div", { className: "modal" },
        React.createElement("h2", null, "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430"),
        React.createElement("p", null,
            "\u0412\u0440\u0435\u043C\u044F \u0430\u0440\u0435\u043D\u0434\u044B: ",
            startTime ? "".concat(((new Date().getTime() - startTime.getTime()) / 60000).toFixed(2), " \u043C\u0438\u043D\u0443\u0442") : 'Начните аренду'),
        React.createElement("p", null,
            "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0440\u0435\u043D\u0434\u044B: ",
            rentalCost.toFixed(2),
            " \u0440\u0443\u0431."),
        React.createElement("button", { onClick: function () { return setModalVisible(false); } }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435"),
        React.createElement("button", { onClick: completeRental }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0430\u0440\u0435\u043D\u0434\u0443")))));
};
export default RentalComponent;
