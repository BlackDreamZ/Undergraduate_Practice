import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
var AppRemoveCar = function (props) {
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    var toggle = function () {
        setVisible(!visible);
    };
    var deleteCar = function () {
        console.log(props);
        axios.delete("http://127.0.0.1:8000/api/car/" + props.pk + "/").then(function () {
            props.resetState();
            toggle();
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: "btn btn-danger", onClick: toggle }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"),
        visible && (React.createElement("div", { className: "modal", style: { display: 'block' } },
            React.createElement("div", { className: "modal-dialog", style: { width: '300px' } },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header", style: { justifyContent: 'center' } },
                        React.createElement("h5", { className: "modal-title" }, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?"),
                        React.createElement("button", { type: "button", className: "btn-close", onClick: toggle })),
                    React.createElement("div", { className: "modal-footer", style: { display: 'flex', justifyContent: 'space-between' } },
                        React.createElement("button", { type: "button", className: "btn btn-primary", onClick: deleteCar }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"),
                        React.createElement("button", { type: "button", className: "btn btn-secondary", onClick: toggle }, "\u041E\u0442\u043C\u0435\u043D\u0430")))))),
        visible && React.createElement("div", { className: "modal-backdrop fade show" })));
};
export default AppRemoveCar;
