import {Provider as StoreProvider} from "react-redux";
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

import store from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StoreProvider store={store}>

        <App/>
    </StoreProvider>
);


