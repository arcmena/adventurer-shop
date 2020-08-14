import React from 'react';

import Logo from '../../assets/images/logo.png';
import MarketCar from '../../assets/images/market_car.png';

export default () => {
    return (
        <header>
            <div>
                <img src={Logo} alt="Logotype" />
                <span>Everything for your journey</span>
            </div>
            <div>
                <img src={MarketCar} alt="Car Icon" />
            </div>
        </header>
    );
}