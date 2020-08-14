import React, { useContext } from 'react';

import { Fieldset, CartItem, Button } from '../components';

import { ItemContext } from '../config/contexts/ItemsContext';

import './CartView.scss';

export default () => {
    const { selectedItems } = useContext(ItemContext);

    return (
        <main>
            <Fieldset legend="Cart Overview" className="cart-overview">
                {selectedItems.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}

                {/* {selectedItems.lenght !==
                    0(
                        <Button color="blue">
                            <span>Go to checkout</span>
                        </Button>,
                    )} */}
            </Fieldset>
        </main>
    );
};
