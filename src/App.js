import React from 'react';

import { weapons, magic } from './assets/store/items.json';

function App() {
  return (
    <div className="App">
      <h1>Adventurer Shop!</h1>
      <fieldset className="items-container">
        <legend>Weapons</legend>
        {weapons.map((item) => (
          <div className="item retro-shadow" key={item.id}>
            <img src={item.image} alt="Item Image" />
            <span>{item.name}</span>
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default App;
