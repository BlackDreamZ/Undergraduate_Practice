import * as React from 'react';
import { useState, useEffect } from 'react';
import ListCars from '../appListCars/ListCars';
import axios from 'axios';
import ModalCar from '../appModalCar/ModalCar';
import CarMap from "../appCarMap/CarMap.jsx";

interface Car {
    pk: number;
    Name: string;
    Vin: string;
    CarNumber: string;
    Registration_Date: string;
    photo: string;
    longitude: string;
    latitude: string;
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

    return (
    <div>
        <CarMap cars={cars}/>
            <h2>List of Cars</h2>
            <ListCars cars={cars} resetState={resetState} newCar={true} />
            <div>
                <ModalCar create={true} resetState={resetState} newCar={true}  car={null}/>
            </div>
        </div>
    );
};

export default Home;
