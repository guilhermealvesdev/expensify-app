import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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

const NotFound = () => {
    return (
        <div>
            <p>404! - <Link to="/">Voltar para a home</Link></p>
        </div>
    )
}

const Header = () => (
    <header>
        <h1>Header</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />        
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"));