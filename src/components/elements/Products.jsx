import React from 'react';

import { Button } from '../';

export default ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div className="item retro-shadow" key={item.id}>
                    <img src={item.image} alt="Item" />
                    <span>{item.name}</span>
                    <Button text="Add to cart" color="blue" />
                </div>
            ))}
        </>
    );
};
