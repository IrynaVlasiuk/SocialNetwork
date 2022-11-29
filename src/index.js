import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./data/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDOM = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} store={store}/>
        </BrowserRouter>
    );
}

rerenderDOM(store.getState());

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//         <App store={store}/>
//     </BrowserRouter>
// );


// reportWebVitals();
