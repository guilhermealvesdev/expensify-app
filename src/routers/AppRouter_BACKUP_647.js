import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
<<<<<<< HEAD
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import NotFound from '../components/NotFound';
=======
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import Contato from '../components/Contato';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
>>>>>>> a603473932c7f24585136745394ab598a47bdfa6

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />        
            <Switch>
<<<<<<< HEAD
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
=======
                <Route exact path="/" component={Home} />
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/:id" component={PortfolioItem} />
>>>>>>> a603473932c7f24585136745394ab598a47bdfa6
                <Route exact path="*" component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;