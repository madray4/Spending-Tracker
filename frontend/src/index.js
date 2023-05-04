import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EntriesContextProvider } from './context/EntriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EntriesContextProvider>
        <App />
    </EntriesContextProvider>
);