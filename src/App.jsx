// src/App.jsx
import React from 'react';
import './App.css';
import FlowerSelector from './components/FlowerSelector';
import BannerCarousel from './components/BannerCarousel';
import ProductCarousel from './components/ProductCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vinyl Gulder</h1>
      </header>
      <main>
        <BannerCarousel />
        <ProductCarousel />
        <FlowerSelector />
      </main>
    </div>
  );
}

export default App;
