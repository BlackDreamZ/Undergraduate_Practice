import * as React from 'react';
import { useState, useEffect } from 'react';
import ListCars from '../appListCars/ListCars';
import axios from 'axios';
import ModalCar from '../appModalCar/ModalCar';
import CarMap from "../appCarMap/CarMap.jsx";
import './Home.scss';

interface Car {
    Id: number;
    Name: string;
    Vin: string;
    CarNumber: string;
    Registration_Date: string;
    Photo: string;
    Longitude: string;
    Latitude: string;
    Fuel: number;
    Price: number;
    Rented: boolean;
}

const Home: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = () => {
        axios.get<Car[]>('http://127.0.0.1:8000/')
            .then((response: { data: React.SetStateAction<Car[]>; }) => setCars(response.data))
            .catch((error: any) => console.error('Error fetching cars:', error));
    };

    const resetState = () => {
        getCars();
    };

    const handleTopUpBalance = () => {
        console.log('Пополнение баланса');
    };

    return (
    <div>
        <CarMap cars={cars}/>
        { sessionStorage.getItem('user') === 'admin' ? <div>
                <h2>List of Cars</h2>
                <ListCars cars={cars} resetState={resetState} newCar={true} />
                <div>
                    <ModalCar create={true} resetState={resetState} newCar={true}  car={null}/>
                </div>
            </div>
        :
            <div className="user-info-container">
                {   sessionStorage.getItem('authenticatedPhoneNumber') ?
                    (<div>
                        <h2>Номер аккаунта: +{sessionStorage.getItem('authenticatedPhoneNumber')}</h2>
                        <h2>Баланс аккаунта: {sessionStorage.getItem('balance')} рублей.</h2>
                        <button onClick={handleTopUpBalance} className="top-up-button">Пополнить баланс</button>
                    </div>)
                    :
                    <h2>Вы не авторизованы</h2>
                }
            </div>}
    </div>
    );
};

export default Home;
