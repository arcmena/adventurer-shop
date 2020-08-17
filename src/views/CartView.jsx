import React, { useContext } from 'react';

import { Fieldset, CartItem, Button } from '../components';

import { ItemContext } from '../config/contexts/ItemsContext';

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
                    <h2 className="message">Your cart is empty</h2>
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
