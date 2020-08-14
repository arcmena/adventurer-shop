import React from 'react';

export default ({ color, onClick, children }) => {
    return (
        <button type="button" className={`retro-shadow-${color} button-${color}`} onClick={onClick}>
            {children}
        </button>
    );
};
