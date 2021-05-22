import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import NotFound from '../components/NotFound';

const AppRouter = () => (
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

export default AppRouter;