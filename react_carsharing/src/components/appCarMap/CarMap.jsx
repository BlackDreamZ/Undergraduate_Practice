import React, {useContext} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import carIconUrl from '../../assets/icons/icon-car.png'; // Загружаем изображение маркера
import './CarMap.scss';
import {Link, useLocation} from 'react-router-dom';
import { CarContext } from '../../context/carContext';

const CarMap = ({ cars }) => {

    const { setSelectedCar } = useContext(CarContext);

    const handleRentClick = (car) => {
        setSelectedCar(car);
    };

    // Добавляем в стили пользовательский маркер
    const customIcon = new Icon({
        iconUrl: carIconUrl, // Путь к изображению
        iconSize: [32, 32], // Размеры иконки
        iconAnchor: [16, 32], // Якорь иконки
        popupAnchor: [0, -32] // Позиция всплывающего окна относительно иконки
    });

    return (
        <MapContainer className='map-container' zoom={16} center={[47.213945, 39.623114]}>
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
                                {console.log(car)}
                                <Link to={{
                                    pathname: `/rent`
                                }}>
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
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                )
            ))}
        </MapContainer>
    );
};

export default CarMap;
