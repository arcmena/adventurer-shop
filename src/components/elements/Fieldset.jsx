import React from 'react';

export default ({ legend, children, className }) => {
    return (
        <fieldset className={className}>
            <legend>{legend}</legend>
            <div>{children}</div>
        </fieldset>
    );
};
