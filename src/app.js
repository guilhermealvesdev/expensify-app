import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize-css/normalize.css'; // Importando normalize.css do node_modules
import './styles/style.scss';

const ExpenseDashboardPage = () => {
    return (
        <div>
            <p>Dashboard</p>
        </div>
    )
}

const AddExpensePage = () => {
    return (
        <div>
            <p>Add</p>
        </div>
    )
}

const EditExpensePage = () => {
    return (
        <div>
            <p>Edit</p>
        </div>
    )
}

const HelpPage = () => {
    return (
        <div>
            <p>Help</p>
        </div>
    )
}

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"));