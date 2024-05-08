import * as React from 'react';
import { useState } from 'react';

interface Car {
    photo?: string;
}

interface Props {
    car: any;
}

const PhotoModal: React.FC<Props> = (props) => {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    };

    return (
        <>
            <img onClick={toggle} src={props.car.photo} alt="loading" style={{ height: 50 }} />
            {visible && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{ color: 'white', justifyContent: 'center', backgroundColor: '#212529' }}>
                                <h5 className="modal-title">Фото</h5>
                                <button type="button" className="btn-close" onClick={toggle}></button>
                            </div>
                            <div className="modal-body" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#212529' }}>
                                <img src={props.car.photo} alt="loading" />
                            </div>
                            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#212529' }}>
                                <button type="button" className="btn btn-secondary" onClick={toggle}>Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {visible && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default PhotoModal;
