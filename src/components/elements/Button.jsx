import React from 'react';

export default ({ red, blue, onClick, children }) => {
    return (
        <button
            type="button"
            className={red ? `retro-shadow-red button-red` : `retro-shadow-blue button-blue`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
