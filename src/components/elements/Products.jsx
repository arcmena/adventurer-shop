import React, { useContext, useState, useEffect } from 'react';

import { Button } from '../';

import { ItemContext } from '../../config/contexts/ItemsContext';

export default ({ items }) => {
    const { selectedItems, setItems } = useContext(ItemContext);
    const [buttonText, setButtonText] = useState('Add to cart');

    const onClick = (item) => {
        setItems(item);
        setButtonText('added');
    };

    useEffect(() => {
        console.log(selectedItems);
    }, [selectedItems]);

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
