import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Fieldset, CheckoutForm } from '../components';

import { ItemContext } from '../config/contexts/ItemsContext';

import BackIcon from '../assets/images/back.png';

import './CheckoutView.scss';

export default () => {
    const { selectedItems, total, setOnTransaction, endTransaction } = useContext(ItemContext);

    useEffect(() => {
        setOnTransaction(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            {endTransaction ? (
                <div className="message">
                    <h2>Thanks for the purchase!</h2>
                    <p>Back to the store</p>
                    <Link to="/">
                        <img src={BackIcon} alt="back" />
                    </Link>
                </div>
            ) : (
                <Fieldset legend="Checkout">
                    <section className="review retro-shadow">
                        <ul>
                            <span>You are going to buy: </span>
                            {selectedItems.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                            <span>Total: {total} gold</span>
                        </ul>
                    </section>

                    <CheckoutForm />
                </Fieldset>
            )}
        </div>
    );
};
