import React from 'react';

import Logo from '../../assets/images/logo.png';
import MarketCar from '../../assets/images/market_car.png';

export default () => {
    return (
        <header>
            <img src={Logo} alt="Logotype" className="logo" />
            <span>Everything for your journey</span>

            <div>
                <img src={MarketCar} alt="Car Icon" />
                <span className="retro-shadow-red">0</span>
            </div>
        </header>
    );
};
