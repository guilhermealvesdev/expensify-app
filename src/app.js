import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css'; // Importando normalize.css do node_modules
import './styles/style.scss';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById("app"));