import React from 'react';

import ProductView from '../views/ProductsView';

import { Header } from '../components'

export default () => {
    return (
        <div className="wrapper">
            <Header />
            <ProductView />
        </div>
    );
}