import React from 'react';

export default ({ red, blue, onClick, children, type }) => {
    return (
        <button
            type={type}
            className={red ? `retro-shadow-red button-red` : `retro-shadow-blue button-blue`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
