// src/components/ProductCarousel.jsx
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { products } from '../data/products';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const ProductCarousel = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="carousel-container product-carousel">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots
        arrows
      >
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              {product.sizes.length > 0 && (
                <div className="sizes">
                  {product.sizes.map((size) => (
                    <button key={size}>{size}</button>
                  ))}
                </div>
              )}
              <button onClick={() => addToCart(product)}>
                Add to cart - ${product.price.toFixed(2)}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
