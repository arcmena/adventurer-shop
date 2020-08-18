import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export default ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [clicked, setClicked] = useState({});
    const [modal, openModal] = useState(false);
    const [onTransaction, setOnTransaction] = useState(false);
    const [endTransaction, setEndTransaction] = useState(false);

    const setItems = (newItem) => {
        setSelectedItems([...selectedItems, newItem]);
        setTotal(total + newItem.value);
        openModal(true);
        setClicked(newItem);

        setTimeout(() => {
            openModal(false);
            setClicked({});
        }, 3000);
    };

    const removeItem = (removed) => {
        setSelectedItems(selectedItems.filter((item) => item.id !== removed.id));
        setTotal(total - removed.value);
    };

    const finishTransaction = () => {
        setSelectedItems([]);
        setTotal(0);
        setEndTransaction(true);
    };

    const resets = () => {
        setOnTransaction(false);
        setEndTransaction(false);
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
        openModal,
        modal,
        clicked,
        removeItem,
        onTransaction,
        setOnTransaction,
        endTransaction,
        finishTransaction,
        resets,
    };

    return <ItemContext.Provider value={providerValue}>{children}</ItemContext.Provider>;
};
