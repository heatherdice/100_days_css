import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

// container element
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

// use createRoot with container element
const root = ReactDOM.createRoot(appContainer);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();