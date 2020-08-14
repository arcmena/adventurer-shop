import React from 'react';

import { Products, Fieldset } from '../components';

import { weapons, magic, apparel, items } from '../assets/store/items.json';

import './ProductsView.scss';

export default () => {
    return (
        <main>
            <Fieldset legend="Weapons" className="items-container">
                <Products items={weapons} />
            </Fieldset>
            <Fieldset legend="Magic" className="items-container">
                <Products items={magic} />
            </Fieldset>
            <Fieldset legend="Apparel" className="items-container">
                <Products items={apparel} />
            </Fieldset>
            <Fieldset legend="Items" className="items-container">
                <Products items={items} />
            </Fieldset>
        </main>
    );
};
