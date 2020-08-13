import React from 'react';

import items from './assets/store/items.json';

function App() {
  return (
    <div className="App">
      <h1>Adventurer Shop!</h1>
      {items.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image} alt="Item Image" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
