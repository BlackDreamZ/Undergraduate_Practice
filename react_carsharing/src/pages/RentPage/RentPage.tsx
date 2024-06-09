import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CarContext } from '../../context/carContext';
import styles from './RentPage.module.scss';

const RentPage = () => {
    const { carId } = useParams<{ carId: string }>();
    const { selectedCar } = useContext(CarContext);

    const [startTime, setStartTime] = useState<Date | null>(null);
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [isWaiting, setIsWaiting] = useState<boolean>(false);
    const [isTripEnded, setIsTripEnded] = useState<boolean>(false);
    const [costTrip, setCostTrip] = useState<number>(0);

    useEffect(() => {
        setStartTime(new Date());

        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleWaiting = () => {
        setIsWaiting(!isWaiting);
    };

    const handleEndTrip = () => {
        setIsTripEnded(true);
        setCostTrip(calculateCost());
    };

    const calculateTimeElapsed = () => {
        if (!startTime) return "0:00";
        const totalSeconds = Math.floor((currentTime.getTime() - startTime.getTime() + 100) / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const calculateCost = () => {
        if (!startTime) return 0;
        const totalSeconds = Math.floor((currentTime.getTime() - startTime.getTime() + 100) / 1000);

        const rate = isWaiting ? selectedCar.Price / 2 : selectedCar.Price;

        const cost = totalSeconds * rate / 60;
        return +cost.toFixed(2);
    };

    if (!selectedCar) {
        return <div>Car not found</div>;
    }

    return (
        <div className={styles.container}>
            {isTripEnded ? (
                <>
                    <h1 className={styles.header}>Поездка завершена</h1>
                    <p className={styles.cost}>Итоговая стоимость поездки: {costTrip} рублей</p>
                    <Link to="/">
                        <button className={`${styles.button} ${styles.returnButton}`}>Вернуться на главную страницу</button>
                    </Link>
                </>
            ) : (
                <>
                    <h1 className={styles.header}>Текущая аренда: <br/>{selectedCar.Name}<br/>{selectedCar.CarNumber}</h1>
                    <img src={selectedCar.Photo} alt={selectedCar.Name} className={styles.carImage} />
                    <div className={styles.time}>Прошедшее время: {calculateTimeElapsed()}</div>
                    <div className={styles.cost}>Стоимость поездки: {calculateCost()} рублей</div>
                    <button onClick={handleWaiting} className={`${styles.button} ${styles.waitingButton}`}>
                        {isWaiting ? 'Возобновить поездку' : 'Перейти в ожидание'}
                    </button>
                    <button onClick={handleEndTrip} className={`${styles.button} ${styles.endTripButton}`}>Завершить поездку</button>
                </>
            )}
        </div>
    );
};

export default RentPage;
