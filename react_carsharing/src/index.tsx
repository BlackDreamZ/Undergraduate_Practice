import * as React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
// @ts-ignore
import App from './components/app/App.tsx';
import reportWebVitals from './reportWebVitals';

export const API_URL: string = "http://127.0.0.1:8000/";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
