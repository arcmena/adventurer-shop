import React from 'react';

export default ({ type, placeholder, name, onChange }) => {
    return <input type={type} placeholder={placeholder} className="retro-shadow" name={name} onChange={onChange} />;
};
