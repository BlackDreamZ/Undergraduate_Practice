import * as React from 'react';
import { FC } from 'react';
import ModalCar from '../appModalCar/ModalCar';
import AppRemoveCar from '../appRemoveCar/RemoveCar';
import PhotoModal from '../appPhotoModal/PhotoModal';

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

interface Props {
    cars: Car[];
    resetState: () => void;
    newCar: boolean;
}

const ListCars: FC<Props> = ({ cars, resetState, newCar }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Vin</th>
                <th>Car Number</th>
                <th>Registration Date</th>
                <th>Photo</th>
                <th>Available for rent</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {!cars || cars.length <= 0 ? (
                <tr>
                    <td colSpan={6} align="center">
                        <b>No cars available</b>
                    </td>
                </tr>
            ) : (
                cars.map((car, index) => (
                    <tr key={index++}>
                        <td>{++index}</td>
                        <td>{car.Name}</td>
                        <td>{car.Vin}</td>
                        <td>{car.CarNumber}</td>
                        <td>{car.Registration_Date}</td>
                        <td>
                            <PhotoModal car={car} />
                        </td>
                        <td>{car.Rented ? 'No' : 'Yes'}</td>
                        <td>
                            <ModalCar
                                create={false}
                                car={car}
                                resetState={resetState}
                                newCar={newCar}
                            />
                            &nbsp;&nbsp;
                            <AppRemoveCar
                                pk={index}
                                resetState={resetState}
                            />
                        </td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    );
};

export default ListCars;