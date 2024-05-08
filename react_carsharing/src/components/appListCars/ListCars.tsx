import * as React from 'react';
import { FC } from 'react';
import ModalCar from '../appModalCar/ModalCar';
import AppRemoveCar from '../appRemoveCar/RemoveCar';
import PhotoModal from '../appPhotoModal/PhotoModal';

interface Car {
    pk: number;
    name: string;
    email: string;
    document: string;
    phone: string;
    registrationDate: string;
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
                <th>Name</th>
                <th>Email</th>
                <th>Document</th>
                <th>Phone</th>
                <th>Registration</th>
                <th>Photo</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {!cars || cars.length <= 0 ? (
                <tr>
                    <td colSpan={6} align="center">
                        <b>Пока ничего нет</b>
                    </td>
                </tr>
            ) : (
                cars.map((car) => (
                    <tr key={car.pk}>
                        <td>{car.name}</td>
                        <td>{car.email}</td>
                        <td>{car.document}</td>
                        <td>{car.phone}</td>
                        <td>{car.registrationDate}</td>
                        <td>
                            <PhotoModal car={car} />
                        </td>
                        <td>
                            <ModalCar
                                create={false}
                                car={car}
                                resetState={resetState}
                                newCar={newCar}
                            />
                            &nbsp;&nbsp;
                            <AppRemoveCar
                                pk={car.pk}
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
