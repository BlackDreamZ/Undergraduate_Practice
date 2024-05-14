import React, { useState, useEffect } from 'react';

interface Car {
    id: number;
    name: string;
    vin: string;
    carNumber: string;
    photo: string;
    longitude: string;
    latitude: string;
    rented: boolean;
}

interface User {
    phone_number: string;
    balance: number;
}

const RentalComponent: React.FC = () => {
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [rentalCost, setRentalCost] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const startRental = (car: Car) => {
        if (!car.rented) {
            setSelectedCar(car);
            setStartTime(new Date());
            car.rented = true;
            setModalVisible(true);
        } else {
            alert('Этот автомобиль уже арендован.');
        }
    };

    const calculateRentalCost = () => {
        if (startTime) {
            const endTime = new Date();
            const duration = (endTime.getTime() - startTime.getTime()) / 60000;
            setRentalCost(duration * 7.00);
        }
    };

    useEffect(() => {
        if (modalVisible) {
            const interval = setInterval(() => {
                calculateRentalCost();
            }, 60000);

            return () => clearInterval(interval);
        }
    }, [modalVisible, startTime]);

    const completeRental = () => {
        if (selectedCar && selectedCar.rented) {
            calculateRentalCost();
            selectedCar.rented = false; 
            setStartTime(null);
            setModalVisible(false);
            alert(`Аренда завершена. С вашего баланса списано ${rentalCost.toFixed(2)} руб.`);
        }
    };

    return (
        <div>
            {modalVisible && (
                <div className="modal">
                    <h2>Текущая аренда</h2>
                    <p>Время аренды: {startTime ? `${((new Date().getTime() - startTime.getTime()) / 60000).toFixed(2)} минут` : 'Начните аренду'}</p>
                    <p>Текущая стоимость аренды: {rentalCost.toFixed(2)} руб.</p>
                    <button onClick={() => setModalVisible(false)}>Перейти в ожидание</button>
                    <button onClick={completeRental}>Завершить аренду</button>
                </div>
            )}
        </div>
    );
};

export default RentalComponent;