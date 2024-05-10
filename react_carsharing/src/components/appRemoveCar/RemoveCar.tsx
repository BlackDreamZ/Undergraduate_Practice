import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import axios from 'axios';

interface Props {
    pk: number;
    resetState: () => void;
}

const AppRemoveCar: React.FC<Props> = (props) => {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    };

    const deleteCar = () => {
        console.log(props);
        axios.delete(`http://127.0.0.1:8000/api/car/${props.pk}/`).then(() => {
            props.resetState();
            toggle();
        });
    };

    return (
        <>
            <button className="btn btn-danger" onClick={toggle}>
                Удалить
            </button>
            {visible && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog" style={{ width: '300px' }}>
                        <div className="modal-content">
                            <div className="modal-header" style={{ justifyContent: 'center' }}>
                                <h5 className="modal-title">Вы уверены?</h5>
                                <button type="button" className="btn-close" onClick={toggle}></button>
                            </div>
                            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <button type="button" className="btn btn-primary" onClick={deleteCar}>Удалить</button>
                                <button type="button" className="btn btn-secondary" onClick={toggle}>Отмена</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {visible && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default AppRemoveCar;
