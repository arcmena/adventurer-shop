import React from 'react';

export default ({ color, text }) => {
    return (
        <button className={`retro-shadow-${color} button-${color}`}>
            <span>{text}</span>
        </button>
    );
};
