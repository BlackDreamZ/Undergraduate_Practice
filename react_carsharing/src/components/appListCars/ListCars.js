import * as React from 'react';
import ModalCar from '../appModalCar/ModalCar';
import AppRemoveCar from '../appRemoveCar/RemoveCar';
import PhotoModal from '../appPhotoModal/PhotoModal';
var ListCars = function (_a) {
    var cars = _a.cars, resetState = _a.resetState, newCar = _a.newCar;
    return (React.createElement("table", null,
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "Number"),
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Vin"),
                React.createElement("th", null, "Car Number"),
                React.createElement("th", null, "Registration Date"),
                React.createElement("th", null, "Photo"),
                React.createElement("th", null, "Available for rent"),
                React.createElement("th", null, "Actions"))),
        React.createElement("tbody", null, !cars || cars.length <= 0 ? (React.createElement("tr", null,
            React.createElement("td", { colSpan: 6, align: "center" },
                React.createElement("b", null, "No cars available")))) : (cars.map(function (car, index) { return (React.createElement("tr", { key: index++ },
            React.createElement("td", null, index++),
            React.createElement("td", null, car.Name),
            React.createElement("td", null, car.Vin),
            React.createElement("td", null, car.CarNumber),
            React.createElement("td", null, car.Registration_Date),
            React.createElement("td", null,
                React.createElement(PhotoModal, { car: car })),
            React.createElement("td", null, car.Rented ? 'No' : 'Yes'),
            React.createElement("td", null,
                React.createElement(ModalCar, { create: false, car: car, resetState: resetState, newCar: newCar }),
                "\u00A0\u00A0",
                React.createElement(AppRemoveCar, { pk: index, resetState: resetState })))); })))));
};
export default ListCars;
