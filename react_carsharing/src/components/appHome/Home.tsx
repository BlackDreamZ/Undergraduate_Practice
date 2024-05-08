import * as React from 'react';
import { useState, useEffect } from 'react';
import ListCars from '../appListCars/ListCars';
import axios from 'axios';
// @ts-ignore
import ModalCar from '../appModalCar/ModalCar.tsx';
// @ts-ignore
import { API_URL } from '../../index.tsx';

interface Car {
    id: number;
    name: string;
    email: string;
    document: string;
    phone: string;
    registrationDate: string;
}

const Home: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = () => {
        axios.get<Car[]>(API_URL)
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));
    };

    const resetState = () => {
        getCars();
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Document</th>
                    <th>Phone</th>
                    <th>registrationDate</th>
                </tr>
                </thead>
                <tbody>
                {cars.map(car => (
                    <tr key={car.id}>
                        <td>{car.name}</td>
                        <td>{car.email}</td>
                        <td>{car.document}</td>
                        <td>{car.phone}</td>
                        <td>{car.registrationDate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <ModalCar create={true} resetState={resetState} newCar={true}  car={null}/>
            </div>
        </div>
    );
};

export default Home;
