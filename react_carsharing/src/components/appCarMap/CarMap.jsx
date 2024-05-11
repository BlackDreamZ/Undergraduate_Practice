import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import carIconUrl from '../../assets/icons/icon-car.png'; // Загружаем изображение маркера

// Добавляем в стили пользовательский маркер
const customIcon = new Icon({
    iconUrl: carIconUrl, // Путь к изображению
    iconSize: [32, 32], // Размеры иконки
    iconAnchor: [16, 32], // Якорь иконки
    popupAnchor: [0, -32] // Позиция всплывающего окна относительно иконки
});

const handleRentClick = (car) => {
    // Логика обработки нажатия кнопки аренды
    console.log(`Машина ${car.Name} арендована`);
};

const CarMap = ({ cars }) => {

    return (
        <MapContainer style={{ height: '400px', width: '100%' }} zoom={16} center={[47.213945, 39.623114]}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cars.map(car => (
                !car.Rented && (
                    <Marker key={car.Vin} position={[parseFloat(car.Longitude), parseFloat(car.Latitude)]} icon={customIcon}>
                        <Popup>
                            <div>
                                <h2>{car.Name}</h2>
                                <p>VIN: {car.Vin}</p>
                                <p>Car Number: {car.CarNumber}</p>
                                <p>Registration Date: {car.Registration_Date}</p>
                                <img src={car.Photo} alt={car.Name} style={{ maxWidth: '100%', maxHeight: '100px' }} />
                                <button
                                    style={{
                                        width: '100%',
                                        backgroundColor: 'green',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        color: 'white',
                                        fontFamily: 'Arial, sans-serif',
                                        fontWeight: 'bold'
                                    }}
                                    onClick={() => handleRentClick(car)}
                                >
                                    Арендовать
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                )
            ))}
        </MapContainer>
    );
};

export default CarMap;
