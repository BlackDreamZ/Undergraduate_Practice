// import React, { useState } from 'react';
// import axios from 'axios';
//
// const UpdateCarNumber: React.FC = () => {
//     const [carPk, setCarPk] = useState<number>(0);
//     const [newNumber, setNewNumber] = useState<string>('');
//
//     const handleUpdateNumber = async () => {
//         try {
//             const response = await axios.put<{ data: Car }>(`http://localhost:8000/api/car/${carPk}/update-number`, { number: newNumber });
//             console.log(response.data); // Выводим данные обновленной машины после успешного запроса
//         } catch (error) {
//             console.error('Ошибка при обновлении номера машины:', error);
//         }
//     };
//
//     return (
//         <div>
//             <input type="number" value={carPk} onChange={(e) => setCarPk(parseInt(e.target.value))} />
//             <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
//             <button onClick={handleUpdateNumber}>Обновить номер машины</button>
//         </div>
//     );
// };
//
// export default UpdateCarNumber;
//
// interface Car {
//     // Определите интерфейс для объекта Car
// }
