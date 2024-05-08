import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
// @ts-ignore
import { API_URL } from "../../index.tsx";

interface Car {
    pk: number;
    name: string;
    email: string;
    document: string;
    phone: string;
    file: File | null;
}

interface Props {
    car: any;
    resetState: () => void;
    toggle: () => void;
    newCar: boolean;
}

const CarForm: React.FC<Props> = (props) => {
    const [car, setCar] = useState<Car>({ pk: 0, name: '', email: '', document: '', phone: '', file: null });

    useEffect(() => {
        if (!props.newCar && props.car) {
            setCar(props.car);
        }
    }, [props.car, props.newCar]);

    if (!car || typeof car !== 'object' || Array.isArray(car)) {
        return <div>No car found</div>; // Возвращаем соответствующее сообщение или заглушку
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'file' && e.target instanceof HTMLInputElement) {
            setCar({ ...car, file: e.target.files ? e.target.files[0] : null });
        } else {
            setCar({ ...car, [name]: value });
        }
    };

    const defaultIfEmpty = (value: string) => {
        return value === '' ? '' : value;
    };

    const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', car.name);
        formData.append('email', car.email);
        formData.append('document', car.document);
        formData.append('phone', car.phone);
        formData.append('file', car.file ? car.file : '');

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        if (props.newCar) {
            await axios.post(API_URL, formData, config).then(() => {
                props.resetState();
                props.toggle();
            });
        } else {
            await axios.put(`${API_URL}/${car.pk}`, formData, config).then(() => {
                props.resetState();
                props.toggle();
            });
        }
    };

    return (
        <form onSubmit={submitData}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={defaultIfEmpty(car.name)}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={defaultIfEmpty(car.email)}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="document">Document:</label>
                <input
                    type="text"
                    className="form-control"
                    id="document"
                    name="document"
                    value={defaultIfEmpty(car.document)}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={defaultIfEmpty(car.phone)}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="file">File:</label>
                <input
                    type="file"
                    className="form-control"
                    id="file"
                    name="file"
                    onChange={onChange}
                />
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Send</button>
                <button type="button" className="btn btn-secondary" onClick={props.toggle}>Cancel</button>
            </div>
        </form>
    );
};

export default CarForm;
