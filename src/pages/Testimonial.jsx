import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";



export default function Testimonial() {
  const testimonials = [
  {
    text: "GBS Gems provided exceptional service and accurate gemstone testing. Highly recommended!",
    name: "Juwel Khan",
    desig: "Web Developer",
    img: "/assets/images/NewImg/user.jpg",
  },
  {
    text: "The team’s expertise and professionalism made the process smooth and reliable.",
    name: "Jenny Jess",
    desig: "Designer",
  img: "/assets/images/NewImg/user.jpg",
  },
  {
    text: "Fast, trustworthy, and detailed reports. Truly a leader in gem testing services.",
    name: "Swift Kayu",
    desig: "Web Developer",
     img: "/assets/images/NewImg/user.jpg",
  },
  {
    text: "Accurate analysis and excellent customer support. I’m impressed with their service!",
    name: "Juwel Khan",
    desig: "Web Developer",
     img: "/assets/images/NewImg/user.jpg",
  },
  {
    text: "Professional guidance and reliable results every time. Highly satisfied with GBS Gems.",
    name: "Jenny Jess",
    desig: "Designer",
    img: "/assets/images/NewImg/user.jpg",
  },
  {
    text: "The reports were clear, detailed, and delivered on time. Exceptional experience!",
    name: "Swift Kayu",
    desig: "Web Developer",
     img: "/assets/images/NewImg/user.jpg",
  },
];


  return (
    <div className="section-padding testimonial-two scene">
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
            <div className="heading-one">
              <span className="heading-one-subtitle">Testimonials</span>
              <h2 className="heading-one-title">What People Say</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 position-relative wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
            <Swiper
              modules={[ Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
            //   pagination={{ clickable: true }}
                breakpoints={{
                0: { slidesPerView: 1 },       // mobile
                768: { slidesPerView: 2 },     // tablet
                1024: { slidesPerView: 3 },    // desktop
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-two-single ">
                    <div className="quote gradient-1">
                      <img src="assets/images/testimonial/quote.png" alt="QuoteIcon" />
                    </div>
                    <p className="text">{item.text}</p>
                    <div className="user">
                      <div className="user-image">
                        <img src={item.img} alt="UserImage" />
                      </div>
                      <div className="user-meta">
                        <span className="name">{item.name}</span>
                        <p className="desig">{item.desig}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
