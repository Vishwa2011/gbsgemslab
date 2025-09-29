import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


export default function Brands() {

  const brandImages = [
    { after: "assets/images/brand/brand-three/1.png", before: "assets/images/brand/brand-three/1-1.png" },
    { after: "assets/images/brand/brand-three/2.png", before: "assets/images/brand/brand-three/2-1.png" },
    { after: "assets/images/brand/brand-three/3.png", before: "assets/images/brand/brand-three/3-1.png" },
    { after: "assets/images/brand/brand-three/4.png", before: "assets/images/brand/brand-three/4-1.png" },
    { after: "assets/images/brand/brand-three/5.png", before: "assets/images/brand/brand-three/5-1.png" },
    
  ];

  useEffect(() => {
    new Swiper(".brand-slider", {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      speed: 800,
      autoplay: false,
      slidesPerView: 5,
      spaceBetween: 0,
      pagination: false,
      navigation: false,
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 80 },
        480: { slidesPerView: 2, spaceBetween: 80 },
        768: { slidesPerView: 3, spaceBetween: 80 },
        992: { slidesPerView: 3, spaceBetween: 80 },
        1200: { slidesPerView: 5, spaceBetween: 80 },
      },
    });
  }, []);

  return (
    <div className="brand-four">
      <div className="container">
      
      </div>

      <div className="shape shape-1 wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".1s">
        <img src="assets/images/brand/brand-three/circle.png" alt="Circle" />
      </div>
      <div className="shape shape-2 wow zoomIn" data-wow-duration="1.5s" data-wow-delay=".3s">
        <img src="assets/images/brand/brand-three/circle2.png" alt="Circle" />
      </div>
    </div>
  );
}
