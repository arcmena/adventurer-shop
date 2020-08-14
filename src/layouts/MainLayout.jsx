import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductView from '../views/ProductsView';
import CartView from '../views/CartView';

import { Header } from '../components';

export default () => {
    return (
        <div className="wrapper">
            <Header />

            <Switch>
                <Route path="/" exact component={ProductView} />
                <Route path="/cart" component={CartView} />
            </Switch>
        </div>
    );
};
