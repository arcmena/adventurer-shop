import React from 'react';

import { Products } from '../components'

import { weapons, magic } from '../assets/store/items.json';

export default () => {
    return (
        <main className="content">
            <fieldset className="items-container">
                <legend>Weapons</legend>
                <Products items={weapons} />
            </fieldset>
            <fieldset className="items-container">
                <legend>Magic</legend>
                <Products items={magic} />
            </fieldset>
            <fieldset className="items-container">
                <legend>Armour</legend>
            </fieldset>
            <fieldset className="items-container">
                <legend>Items</legend>
            </fieldset>
        </main>
    );
}