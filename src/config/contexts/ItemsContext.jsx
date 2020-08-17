import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export default ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [total, setTotal] = useState(0);

    const setItems = (newItem) => {
        setSelectedItems([...selectedItems, newItem]);
        setTotal(total + newItem.value);
    };

    // const checkCart = (newItem) => {
    //     // Check if it is already in the cart
    //     const check = selectedItems.findIndex((item) => item === newItem);
    //     if (check >= 0) {
    //         // If it is return the array
    //         const filteredItems = selectedItems.filter((item) => item !== newItem);
    //         setSelectedItems(filteredItems);
    //     } else {
    //         // If not set the new item
    //     }
    // };

    const providerValue = {
        selectedItems,
        setItems,
        total,
    };

    return <ItemContext.Provider value={providerValue}>{children}</ItemContext.Provider>;
};
