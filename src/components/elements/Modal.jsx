import React from 'react';

export default ({ message, item }) => {
    return (
        <div className="modal retro-shadow">
            <h2>{message}</h2>
            {item ? <span> 1x {item}</span> : null}
        </div>
    );
};
