// src/components/FlowerSelector.jsx
import React, { useState } from 'react';

const flowers = [
  { id: 1, name: 'Rose', color: 'Red' },
  { id: 2, name: 'Tulip', color: 'Yellow' },
  { id: 3, name: 'Lily', color: 'White' }
];

const FlowerSelector = () => {
  const [selectedFlowers, setSelectedFlowers] = useState([]);

  const toggleFlower = (flower) => {
    setSelectedFlowers((prevSelectedFlowers) =>
      prevSelectedFlowers.includes(flower)
        ? prevSelectedFlowers.filter((f) => f !== flower)
        : [...prevSelectedFlowers, flower]
    );
  };

  return (
    <div>
      <h1>Select Your Flowers</h1>
      <div>
        {flowers.map((flower) => (
          <div key={flower.id}>
            <input
              type="checkbox"
              id={`flower-${flower.id}`}
              onChange={() => toggleFlower(flower)}
            />
            <label htmlFor={`flower-${flower.id}`}>
              {flower.name} ({flower.color})
            </label>
          </div>
        ))}
      </div>
      <h2>Selected Flowers:</h2>
      <ul>
        {selectedFlowers.map((flower) => (
          <li key={flower.id}>
            {flower.name} ({flower.color})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlowerSelector;