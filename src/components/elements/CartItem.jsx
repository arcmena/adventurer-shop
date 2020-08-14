import React from 'react';

export default ({ item }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt="Item" />
            <span>{item.name}</span>
            <span>{item.value} gold</span>
        </div>
    );
};
