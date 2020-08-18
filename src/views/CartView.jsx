import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Fieldset, CartItem, Button } from '../components';

import { ItemContext } from '../config/contexts/ItemsContext';

import BackIcon from '../assets/images/back.png';

import './CartView.scss';

export default () => {
    const { selectedItems, total, setOnTransaction } = useContext(ItemContext);

    useEffect(() => {
        setOnTransaction(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCheckout = () => {
        setOnTransaction(true);
    };

    return (
        <main>
            <Fieldset legend="Cart Overview" className="cart-overview">
                {selectedItems.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}

                {selectedItems.length === 0 ? (
                    <div>
                        <h2 className="message">Your cart is empty!</h2>
                        <p>Back to the store</p>
                        <Link to="/">
                            <img src={BackIcon} alt="back" />
                        </Link>
                    </div>
                ) : (
                    <div className="total">
                        <span>Total: {total} gold</span>
                        <Link to="/checkout" onClick={handleCheckout}>
                            <Button color="blue">
                                <span>Go to checkout</span>
                            </Button>
                        </Link>
                    </div>
                )}
            </Fieldset>
        </main>
    );
};
