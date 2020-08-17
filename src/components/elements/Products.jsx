import React, { useContext } from 'react';

import { Button } from '../';

import { ItemContext } from '../../config/contexts/ItemsContext';

export default ({ items }) => {
    const { setItems } = useContext(ItemContext);

    const onClick = (item) => {
        setItems(item);
    };

    return (
        <>
            {items.map((item) => (
                <div className="item retro-shadow" key={item.id}>
                    <img src={item.image} alt="Item" />
                    <span>{item.name}</span>
                    <span>{item.value} gold</span>
                    <Button color="blue" onClick={() => onClick(item)}>
                        <span>Add to cart</span>
                    </Button>
                </div>
            ))}
        </>
    );
};
