import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import MarketCar from '../../assets/images/market_car.png';

import { ItemContext } from '../../config/contexts/ItemsContext';

export default () => {
    const { selectedItems, onTransaction } = useContext(ItemContext);

    return (
        <header>
            <img src={Logo} alt="Logotype" className="logo" />
            <span>Everything for your journey</span>

            {onTransaction ? null : (
                <div>
                    <Link to="/cart">
                        <img src={MarketCar} alt="Car Icon" />
                        <span className="retro-shadow-red">{selectedItems.length}</span>
                    </Link>
                </div>
            )}
        </header>
    );
};
