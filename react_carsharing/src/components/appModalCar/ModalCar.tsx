import * as React from 'react';
import { useState } from 'react';
// @ts-ignore
import CarMap from '../appCarMap/CarMap.tsx';

interface Car {
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
    create: boolean;
    car: Car | null;
    resetState: () => void;
    newCar: boolean;
}

const ModalCar: React.FC<Props> = (props) => {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    };

    return (
        <>
            <button
                className="btn btn-primary float-right"
                onClick={toggle}
                style={{ minWidth: '200px' }}
            >
                {props.create ? 'Добавить автомобиль' : 'Редактировать автомобиль'}
            </button>
            {visible && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" style={{ justifyContent: 'center' }}>
                                    {props.create ? 'Добавить автомобиль' : 'Редактировать автомобиль'}
                                </h5>
                                <button type="button" className="btn-close" onClick={toggle}></button>
                            </div>
                            <div className="modal-body">
                                <CarMap
                                    car={props.car ? props.car : []}
                                    resetState={props.resetState}
                                    toggle={toggle}
                                    newCar={props.newCar}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {visible && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default ModalCar;
