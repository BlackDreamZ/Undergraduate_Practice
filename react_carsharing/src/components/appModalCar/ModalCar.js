import * as React from 'react';
import { useState } from 'react';
var ModalCar = function (props) {
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    var toggle = function () {
        setVisible(!visible);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: "btn btn-primary float-right", onClick: toggle, style: { minWidth: '200px' } }, props.create ? 'Добавить автомобиль' : 'Редактировать автомобиль'),
        visible && (React.createElement("div", { className: "modal", style: { display: 'block' } },
            React.createElement("div", { className: "modal-dialog" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header" },
                        React.createElement("h5", { className: "modal-title", style: { justifyContent: 'center' } }, props.create ? 'Добавить автомобиль' : 'Редактировать автомобиль'),
                        React.createElement("button", { type: "button", className: "btn-close", onClick: toggle })))))),
        visible && React.createElement("div", { className: "modal-backdrop fade show" })));
};
export default ModalCar;
