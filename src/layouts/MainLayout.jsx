import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductView from '../views/ProductsView';
import CartView from '../views/CartView';

import { Header, Modal } from '../components';

import { ItemContext } from '../config/contexts/ItemsContext';

export default () => {
    const { modal, clicked } = useContext(ItemContext);

    return (
        <div className="wrapper">
            {modal ? <Modal message="Added to cart!" item={clicked.name} /> : null}

            <Header />

            <Switch>
                <Route path="/" exact component={ProductView} />
                <Route path="/cart" component={CartView} />
            </Switch>
        </div>
    );
};
