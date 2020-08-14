import React from 'react';

import { Products } from '../components';

import { weapons, magic, apparel, items } from '../assets/store/items.json';

export default () => {
    return (
        <main>
            <fieldset className="items-container">
                <legend>Weapons</legend>
                <div>
                    <Products items={weapons} />
                </div>
            </fieldset>
            <fieldset className="items-container">
                <legend>Magic</legend>
                <div>
                    <Products items={magic} />
                </div>
            </fieldset>
            <fieldset className="items-container">
                <legend>Apparel</legend>
                <div>
                    <Products items={apparel} />
                </div>
            </fieldset>
            <fieldset className="items-container">
                <legend>Items</legend>
                <div>
                    <Products items={items} />
                </div>
            </fieldset>
        </main>
    );
};
