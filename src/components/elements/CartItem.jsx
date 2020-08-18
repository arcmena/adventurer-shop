import React, { useContext } from 'react';

import { Button } from '../';

import { ItemContext } from '../../config/contexts/ItemsContext';

export default ({ item }) => {
    const { removeItem } = useContext(ItemContext);

    const handleClick = (id) => {
        removeItem(id);
    };

    return (
        <div className="item-container">
            <div className="cart-item">
                <img src={item.image} alt="Item" />
                <span>{item.name}</span>
                <span>{item.value} gold</span>
            </div>
            <Button red onClick={() => handleClick(item.id)} className="delete">
                <span>Delete</span>
            </Button>
        </div>
    );
};
