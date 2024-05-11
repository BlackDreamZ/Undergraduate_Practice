import * as React from 'react';
import { useState } from 'react';
var PhotoModal = function (props) {
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    var toggle = function () {
        setVisible(!visible);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { onClick: toggle, src: props.car.photo, alt: "loading", style: { height: 50 } }),
        visible && (React.createElement("div", { className: "modal", style: { display: 'block' } },
            React.createElement("div", { className: "modal-dialog" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header", style: { color: 'white', justifyContent: 'center', backgroundColor: '#212529' } },
                        React.createElement("h5", { className: "modal-title" }, "\u0424\u043E\u0442\u043E"),
                        React.createElement("button", { type: "button", className: "btn-close", onClick: toggle })),
                    React.createElement("div", { className: "modal-body", style: { display: 'flex', justifyContent: 'center', backgroundColor: '#212529' } },
                        React.createElement("img", { src: props.car.photo, alt: "loading" })),
                    React.createElement("div", { className: "modal-footer", style: { display: 'flex', justifyContent: 'center', backgroundColor: '#212529' } },
                        React.createElement("button", { type: "button", className: "btn btn-secondary", onClick: toggle }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))))),
        visible && React.createElement("div", { className: "modal-backdrop fade show" })));
};
export default PhotoModal;
