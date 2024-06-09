import * as React from 'react';
import { useState } from 'react';

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
                        </div>
                    </div>
                </div>
            )}
            {visible && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default ModalCar;
