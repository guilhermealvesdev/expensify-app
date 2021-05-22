import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import Contato from '../components/Contato';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />        
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/:id" component={PortfolioItem} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;