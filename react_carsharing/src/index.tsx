import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './components/app/App.tsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

export const API_URL: string = "http://127.0.0.1:8000/api/carsharing/";
export const API_STATIC_MEDIA: string = "http://127.0.0.1:8000/";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
