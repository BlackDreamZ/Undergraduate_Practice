import * as React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
// @ts-ignore
import App from './components/app/App.jsx';
import reportWebVitals from './reportWebVitals';
export var API_URL = "http://127.0.0.1:8000/";
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
reportWebVitals();
