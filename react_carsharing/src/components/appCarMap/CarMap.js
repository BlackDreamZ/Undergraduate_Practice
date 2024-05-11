import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
var CarMap = function (_a) {
    var cars = _a.cars;
    cars.map(function (car) { return console.log(car.Latitude, car.Longitude); });
    return (React.createElement(MapContainer, { style: { height: '400px', width: '100%' }, zoom: 10, center: [47.213945, 39.623114] },
        React.createElement(TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }),
        cars.map(function (car) { return (!car.Rented && (React.createElement(Marker, { key: car.Vin, position: [parseFloat(car.Latitude), parseFloat(car.Longitude)] },
            React.createElement(Popup, null,
                React.createElement("div", null,
                    React.createElement("h2", null, car.Name),
                    React.createElement("p", null,
                        "VIN: ",
                        car.Vin),
                    React.createElement("p", null,
                        "Car Number: ",
                        car.CarNumber),
                    React.createElement("p", null,
                        "Registration Date: ",
                        car.RegistrationDate),
                    React.createElement("img", { src: car.Photo, alt: car.Name, style: { maxWidth: '100%', maxHeight: '150px' } })))))); })));
};
export default CarMap;
