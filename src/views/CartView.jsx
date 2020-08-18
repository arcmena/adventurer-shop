import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Fieldset, CartItem, Button } from '../components';

import { ItemContext } from '../config/contexts/ItemsContext';

import BackIcon from '../assets/images/back.png';

import './CartView.scss';

export default () => {
    const { selectedItems, total } = useContext(ItemContext);

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
                    <div>
                        <span>Total: {total} gold</span>
                        <Button color="blue">
                            <span>Go to checkout</span>
                        </Button>
                    </div>
                )}
            </Fieldset>
        </main>
    );
};
