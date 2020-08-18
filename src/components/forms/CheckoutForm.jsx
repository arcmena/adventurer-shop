import React, { useState, useContext } from 'react';

import { Input, Button } from '../';

import { ItemContext } from '../../config/contexts/ItemsContext';

import './CheckoutForm.scss';

export default () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const { finishTransaction } = useContext(ItemContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '') {
            return setError('Complete the name field');
        } else if (email === '') {
            return setError('Complete the email field');
        }

        finishTransaction();
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <span>Payment Information: </span>

            <label htmlFor="name">Name</label>
            <Input type="text" placeholder="John Doe" name="name" onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">E-mail</label>
            <Input
                type="email"
                placeholder="johndoe@email.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            {setError !== '' ? <span className="error">{error}</span> : null}
            <Button type="submit">
                <span>Place order</span>
            </Button>
        </form>
    );
};
