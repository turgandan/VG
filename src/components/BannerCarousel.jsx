// src/components/BannerCarousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const banners = [
  { id: 1, src: '/images/banner1.png', alt: 'Promo Banner 1' },
  { id: 2, src: '/images/banner2.png', alt: 'Promo Banner 2' },
  { id: 3, src: '/images/banner3.png', alt: 'Promo Banner 3' }
];

const BannerCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {banners.map((banner) => (
          <div key={banner.id}>
            <img src={banner.src} alt={banner.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
