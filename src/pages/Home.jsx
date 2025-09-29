import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay  } from "swiper/modules";
import Testimonial from "./Testimonial";
export default function Home() {  
  return (
    <div>

      <Navbar /> 

       {/* <!-- Slider Section start --> */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".slidertwo-pagination" }}
        autoplay={{ delay: 7000 }}
        loop={true}
        className="slidertwo animation-style-02"
      >
        <SwiperSlide>
          <div className="slidertwo-shape1">
            <div className="scene">
              <div className="shape shape-7">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-1.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-9">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-3.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-10" data-depth="0.07">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-4.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-11" data-depth="0.08">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-5.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-12" data-depth="0.08">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-6.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-14">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-8.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-15" data-depth="0.07">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-9.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-16">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-10.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-17">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-11.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-18" data-depth="0.08">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-12.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-19">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-13.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-20">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-14.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-21" data-depth="0.06">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-15.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
          <div className="slidertwo-shape2">
            <div className="shape shape-6">
              <img
                src="assets/images/slider/slidertwo-shape/shape-2.png"
                alt="Shape"
              />
            </div>
            <div className="shape shape-8">
              <img
                src="assets/images/slider/slidertwo-shape/shape-17.png"
                alt="Shape"
              />
            </div>
            <div className="shape shape-13">
              <img
                src="assets/images/slider/slidertwo-shape/shape-7.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="slidertwo-shape3">
            <div className="shape shape-1">
              <img
                src="assets/images/slider/slidertwo-shape/shape-18.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-lg-4 order-lg-0 order-2">
                <div className="slidertwo-leftimg">
                  <div className="img-one">
                    <img
                      src="assets/images/slider/slider-2-1.png"
                      alt="ShapeImage"
                    />
                  </div>
                  <div className="img-two">
                    <img
                      src="assets/images/slider/slider-2-3.png"
                      alt="ShapeImage"
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4 mx-auto text-center align-self-center order-lg-0 order-1">
                <div className="heading-one">
                  <span className="heading-one-subtitle gradient-text-1">
                    We are Avers
                  </span>
                  <h2 className="heading-one-title">
                    Solution for <br /> Your Business
                  </h2>
                  <p className="mb-30">When the musics over turn off the light</p>
                  <a href="contact.html" className="btn-style-one">
                    <span>Read More</span>
                  </a>
                </div>
              </div>

              <div className="col-6 col-lg-4 order-lg-0 order-2">
                <div className="slidertwo-rightimg">
                  <div className="img-one">
                    <img
                      src="assets/images/slider/slider-2-2.png"
                      alt="ShapeImage"
                    />
                  </div>
                  <div className="img-two">
                    <img
                      src="assets/images/slider/slider-2-4.png"
                      alt="ShapeImage"
                    />
                  </div>
                  <div className="img-three">
                    <img
                      src="assets/images/slider/slider-2-5.png"
                      alt="ShapeImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slidertwo-shape1">
            <div className="scene">
              <div className="shape shape-7">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-1.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-9">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-3.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-10" data-depth="0.07">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-4.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-11" data-depth="0.08">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-5.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-12" data-depth="0.08">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-6.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-14">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-8.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-15" data-depth="0.07">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-9.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-16">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-10.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-17">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-11.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-18" data-depth="0.08">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-12.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-19">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-13.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-20">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-14.png"
                  alt="Shape"
                />
              </div>
              <div className="shape shape-21" data-depth="0.06">
                <img
                  src="assets/images/slider/slidertwo-shape/shape-15.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
          <div className="slidertwo-shape2">
            <div className="shape shape-6">
              <img
                src="assets/images/slider/slidertwo-shape/shape-2.png"
                alt="Shape"
              />
            </div>
            <div className="shape shape-8">
              <img
                src="assets/images/slider/slidertwo-shape/shape-17.png"
                alt="Shape"
              />
            </div>
            <div className="shape shape-13">
              <img
                src="assets/images/slider/slidertwo-shape/shape-7.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="slidertwo-shape3">
            <div className="shape shape-1">
              <img
                src="assets/images/slider/slidertwo-shape/shape-18.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-lg-4 order-lg-0 order-2">
                <div className="slidertwo-leftimg">
                  <div className="img-one">
                    <img
                      src="assets/images/slider/slider-2-1.png"
                      alt="ShapeImage"
                    />
                  </div>
                  <div className="img-two">
                    <img
                      src="assets/images/slider/slider-2-3.png"
                      alt="ShapeImage"
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4 mx-auto text-center align-self-center order-lg-0 order-1">
                <div className="heading-one">
                  <span className="heading-one-subtitle gradient-text-1">
                    We are Avers
                  </span>
                  <h2 className="heading-one-title">
                    Solution for <br /> Your Business
                  </h2>
                  <p className="mb-30">When the musics over turn off the light</p>
                  <a href="contact.html" className="btn-style-one">
                    <span>Read More</span>
                  </a>
                </div>
              </div>

              <div className="col-6 col-lg-4 order-lg-0 order-2">
                <div className="slidertwo-rightimg">
                  <div className="img-one">
                    <img
                      src="assets/images/slider/slider-2-2.png"
                      alt="ShapeImage"
                    />
                  </div>
                  <div className="img-two">
                    <img
                      src="assets/images/slider/slider-2-4.png"
                      alt="ShapeImage"
                    />
                  </div>
                  <div className="img-three">
                    <img
                      src="assets/images/slider/slider-2-5.png"
                      alt="ShapeImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <!-- Slider Section End --> */}

      {/* <!-- Strategy Section start --> */}
      <div className="section-padding-top strategy overflow-hidden">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow fadeInUp"
              data-wow-duration="0.9s"
              data-wow-delay="0.1s"
            >
              <div className="heading-one text-center">
                <span className="heading-one-subtitle">We are Avers</span>
                <h2 className="heading-one-title">
                  Business Development & Innovation
                </h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-n30">
            <div
              className="col mb-30 wow fadeInBottomLeft"
              data-wow-duration="0.9s"
              data-wow-delay="0.1s"
            >
              <div className="strategy-single">
                <div className="strategy-icon">
                  <span></span>
                  <img src="assets/images/icon/icon-1.png" alt="Icon" />
                </div>

                <div className="strategy-content">
                  <h5 className="title">Business Strategy</h5>
                  <p>
                    Pore et dolore magna aliqua. strud exercitation laboris nisi
                    uot aliq uip ex emattersa never{" "}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col mb-30 wow fadeInUp"
              data-wow-duration="0.9s"
              data-wow-delay="0.1s"
            >
              <div className="strategy-single">
                <div className="strategy-icon">
                  <span></span>
                  <img src="assets/images/icon/icon-2.png" alt="Icon" />
                </div>

                <div className="strategy-content">
                  <h5 className="title">Marketing Solution</h5>
                  <p>
                    Pore et dolore magna aliqua. strud exercitation laboris nisi
                    uot aliq uip ex emattersa never{" "}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col mb-30 wow fadeInBottomRight"
              data-wow-duration="0.9s"
              data-wow-delay="0.1s"
            >
              <div className="strategy-single">
                <div className="strategy-icon">
                  <span></span>
                  <img src="assets/images/icon/icon-3.png" alt="Icon" />
                </div>

                <div className="strategy-content">
                  <h5 className="title">Report & Analytics</h5>
                  <p>
                    Pore et dolore magna aliqua. strud exercitation laboris nisi
                    uot aliq uip ex emattersa never{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="strategy-home2-shape" data-depth="0.09">
          <div className="shape shape-1">
            <img src="assets/images/shape/dot-1.png" alt="Shape" />
          </div>
          <div className="shape shape-2">
            <img src="assets/images/shape/shape-21.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* <!-- Strategy Section end --> */}

      {/* <!-- About Section Start --> */}
      <div className="section-padding about-two">
        <div className="about-two-shape">
          <div className="shape shape-1 wow fadeInUp" data-wow-duration="0.9s">
            <img src="assets/images/about/shape-2/shape-1.png" alt="Shape" />
          </div>
          <div className="shape shape-2 wow fadeInUp" data-wow-duration="0.9s">
            <img src="assets/images/about/shape-2/shape-2.png" alt="Shape" />
          </div>
          <div className="shape shape-3 wow fadeInUp" data-wow-duration="0.9s">
            <img src="assets/images/about/shape-2/shape-3.png" alt="Shape" />
          </div>
          <div className="shape shape-4 wow fadeInUp" data-wow-duration="0.9s">
            <img src="assets/images/about/shape-2/shape-4.png" alt="Shape" />
          </div>
          <div className="shape shape-5">
            <img
              className="wow zoomIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s"
              src="assets/images/about/shape-2/shape-5.png"
              alt="Shape"
            />
          </div>
          <div className="shape shape-6 wow fadeInUp" data-wow-duration="0.9s">
            <img src="assets/images/about/shape-2/shape-6.png" alt="Shape" />
          </div>
          <div className="shape shape-7">
            <img
              className="wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".1s"
              src="assets/images/about/shape-2/shape-7.png"
              alt="Shape"
            />
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-two-images me-0">
                <div
                  className="about-two-images-one wow fadeInUp"
                  data-wow-duration="0.9s"
                >
                  <img
                    className="js-tilt"
                    src="assets/images/about/about-4.png"
                    alt="QualityImage"
                  />
                  <div
                    className="about-two-images-thumb gradient-2 wow flip"
                    data-wow-duration="0.9s"
                  >
                    <span className="text">Since</span>
                    <span className="date">1948</span>
                  </div>
                </div>
                <div
                  className="about-two-images-two wow fadeInUp"
                  data-wow-duration="0.9s"
                >
                  <img
                    className="js-tilt"
                    src="assets/images/about/about-5.png"
                    alt="QualityImage"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading-one">
                <div className="wow fadeInUp" data-wow-duration="0.9s">
                  <span className="heading-one-subtitle">We are Avers</span>
                  <h2 className="heading-one-title">
                    A Great Corporate Agency
                  </h2>
                </div>
                <div
                  className="about-two-text wow fadeInUp"
                  data-wow-duration="0.9s"
                >
                  <p>
                    Kimod tempoer incididunt onomes sundo ritoma amar Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eius mod tempor inci didunt ut labore et dolore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    dtempor incin poddo patar jolkobita tumi.
                  </p>
                  <a href="contact.html" className="btn-style-one">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Section Start --> */}

    {/* <!-- Funfact Section Start --> */}
    <div 
  className="section-padding funfact" 
  style={{ backgroundImage: "url('/assets/images/funfact/funfact-bg.png')" }}
>

        <div className="container">
            <div className="row">
                <div className="col-lg-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                    {/* <!-- Heading Start --> */}
                    <div className="heading-one">
                        <span className="heading-one-subtitle">We are Avers</span>
                        <h2 className="heading-one-title">We Are Leading The Industry</h2>
                        <p>Kimod tempoer incididunt onomes sundo ritoma amar Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor inci didunt ut labore et dolore.</p>
                    </div>
                    {/* <!-- Heading End --> */}
                </div>
                <div className="col-lg-6">
                    <div className="about-counter">
                        <div className="about-counter-2 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                            <div className="funfact-inner">
                                <span className="odometer" data-count-to="20"></span>
                            </div>
                            <span className="about-counter-title">Worldwide <br /> Countries</span>
                        </div>
                        <div className="about-counter-2 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="funfact-inner">
                                <span className="odometer" data-count-to="50"></span>
                            </div>
                            <span className="about-counter-title">Popular <br /> Products</span>
                        </div>
                        <div className="about-counter-2 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                            <div className="funfact-inner">
                                <span className="odometer" data-count-to="5"></span>
                                <span className="niktext">K</span>
                            </div>
                            <span className="about-counter-title">Direct <br  /> Clients</span>
                        </div>
                        <div className="about-counter-2 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="funfact-inner">
                                <span className="odometer" data-count-to="80"></span>
                                <span className="niktext">K</span>
                            </div>
                            <span className="about-counter-title">Successfull <br /> Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Funfact Section End --> */}

      {/* <!-- Service Two Section Start --> */}
      <div className="section-padding service-two section-padding-bottom">
        <div className="service-two-shape scene">
          <div className="shape shape-1" data-depth="0.08">
            <img src="assets/images/shape/shape-20.png" alt="Shape" />
          </div>
          <div className="shape shape-2">
            <img src="assets/images/shape/shape-22.png" alt="Shape" />
          </div>
          <div className="shape shape-3" data-depth="0.08">
            <img src="assets/images/shape/shape-23.png" alt="<Shape" />
          </div>
          <div className="shape shape-4">
            <img src="assets/images/service/service-two-bg.png" alt="Shape" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="heading-one text-center wow fadeInUp"
                data-wow-duration="0.9s"
              >
                <span className="heading-one-subtitle">Our Services</span>
                <h2 className="heading-one-title">What we offer</h2>
                <p>
                  Kimod tempoer incididunt onomes sundo ritoma amar Lorem ipsum
                  dolor sit amet, consectetur adipisicing
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-md-2 row-cols-1 mb-n30">
            <div className="col mb-30 wow fadeInUp" data-wow-duration="0.4s">
              <div className="service-two-single">
                <div className="service-two-thumb">
                  <span className="service-two-thumb-bg"></span>
                  <img
                    className="img-gradient"
                    src="assets/images/icon/service/icon-7.png"
                    alt=""
                  />
                  <img
                    className="img-white"
                    src="assets/images/icon/service/icon-10-white.png"
                    alt=""
                  />
                </div>
                <div className="service-two-content">
                  <h4 className="title">Business Development</h4>
                  <p>
                    Pore et dolore magna aliqua. Uetom veniam qu is nostrud
                    exercitation laboris nisi uot aliq uip ex emattersa never
                    cared forthis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-30 wow fadeInUp" data-wow-duration="0.6s">
              <div className="service-two-single">
                <div className="service-two-thumb">
                  <span className="service-two-thumb-bg"></span>
                  <img
                    className="img-gradient"
                    src="assets/images/icon/service/icon-8.png"
                    alt=""
                  />
                  <img
                    className="img-white"
                    src="assets/images/icon/service/icon-10-white.png"
                    alt=""
                  />
                </div>
                <div className="service-two-content">
                  <h4 className="title">System Automation</h4>
                  <p>
                    Pore et dolore magna aliqua. Uetom veniam qu is nostrud
                    exercitation laboris nisi uot aliq uip ex emattersa never
                    cared forthis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-30 wow fadeInUp" data-wow-duration="0.7s">
              <div className="service-two-single">
                <div className="service-two-thumb">
                  <span className="service-two-thumb-bg"></span>
                  <img
                    className="img-gradient"
                    src="assets/images/icon/service/icon-9.png"
                    alt=""
                  />
                  <img
                    className="img-white"
                    src="assets/images/icon/service/icon-10-white.png"
                    alt=""
                  />
                </div>
                <div className="service-two-content">
                  <h4 className="title">Consulting & Marketing</h4>
                  <p>
                    Pore et dolore magna aliqua. Uetom veniam qu is nostrud
                    exercitation laboris nisi uot aliq uip ex emattersa never
                    cared forthis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-30 wow fadeInUp" data-wow-duration="0.9s">
              <div className="service-two-single">
                <div className="service-two-thumb">
                  <span className="service-two-thumb-bg"></span>
                  <img
                    className="img-gradient"
                    src="assets/images/icon/service/icon-7.png"
                    alt=""
                  />
                  <img
                    className="img-white"
                    src="assets/images/icon/service/icon-10-white.png"
                    alt=""
                  />
                </div>
                <div className="service-two-content">
                  <h4 className="title">Security Management</h4>
                  <p>
                    Pore et dolore magna aliqua. Uetom veniam qu is nostrud
                    exercitation laboris nisi uot aliq uip ex emattersa never
                    cared forthis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service Two Section Start --> */}

      {/* <!-- Support Section Start --> */}
      <div className="support section-margin-bottom mousemove">
        <div className="container">
          <div className="support-bg">
            <div className="support-bg-img">
              <img src="assets/images/support/support-bg.png" alt="Support" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div
                  className="heading-one wow fadeInUp"
                  data-wow-duration="0.9s"
                >
                  <span className="heading-one-subtitle">
                    Get Quick Support
                  </span>
                  <h2 className="heading-one-title">
                    Get Help from Our Expert Now
                  </h2>
                  <p className="heading-one-text">
                    Kimod tempoer incididunt onomes sundo ritoma amar korem
                    ipsum dolor sit amet, consectetur adipisicing.
                  </p>
                  <a href="tel:+0123456789" className="phone-call">
                    <span className="phone-icon">
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    <span className="phone-text">+880 123 456 789</span>
                  </a>

                  <div className="support-shape-two">
                    <img src="assets/images/support/support-arrow.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="support-man wow fadeInUp"
                  data-wow-duration="0.7s"
                >
                  <img
                    src="assets/images/support/support-man.png"
                    alt="SupportMan"
                  />
                </div>
                <div className="support-shape-one">
                  <img
                    className="wow zoomIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".1s"
                    src="assets/images/support/support-circle.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Support Section End --> */}

      {/* <!-- Speciality Section Start --> */}
      <div className="speciality ">
        <div className="container">
          <div className="row align-items-center mb-n60">
            <div
              className="col-lg-6 mb-60 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".1s"
            >
              <div className="speciality-image">
                <div className="speciality-image-inner">
                  <img
                    className="js-tilt"
                    src="assets/images/speciality/speciality.png"
                    alt="speciliity"
                  />
                </div>
                <div className="speciality-image-circle">
                  <div className="circle1">
                    <img
                      className="wow zoomIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".1s"
                      src="assets/images/speciality/circle3.png"
                      alt="circle"
                    />
                  </div>
                  <div className="circle2">
                    <img
                      className="wow zoomIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".1s"
                      src="assets/images/speciality/circle1.png"
                      alt="circle"
                    />
                  </div>
                  <div className="circle3">
                    <img
                      className="wow zoomIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".1s"
                      src="assets/images/speciality/circle2.png"
                      alt="circle"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mb-60 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".3s"
            >
              <div className="heading-one">
                <span className="heading-one-subtitle">Our Speciality</span>
                <h2 className="heading-one-title">
                  We Help to Build Your Brand
                </h2>
                <p>
                  Kimod tempoer incididunt onomes sundo ritoma amar porem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor inci didunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <ul className="speciality_list">
                <li className="speciality_list__single">
                  <span className="icon">
                    <img
                      src="assets/images/speciality/single1.png"
                      alt="Icon"
                    />
                  </span>
                  <div className="content">
                    <h4 className="content_title">Design and Develop</h4>
                    <p className="content_text">
                      Kimod tempoer incididunt ono mes sundo ritoma amar Lorem
                      ipsum dolor korosa
                    </p>
                  </div>
                </li>
                <li className="speciality_list__single">
                  <span className="icon">
                    <img
                      src="assets/images/speciality/single2.png"
                      alt="Icon"
                    />
                  </span>
                  <div className="content">
                    <h4 className="content_title">Sales and Marketing</h4>
                    <p className="content_text">
                      Kimod tempoer incididunt ono mes sundo ritoma amar Lorem
                      ipsum dolor korosa
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="speciality-shape scene">
          <img
            data-depth="0.20"
            className="shape shape1"
            src="assets/images/speciality/shape1.png"
            alt="shape"
          />
          <img
            data-depth="0.20"
            className="shape shape2"
            src="assets/images/speciality/shape2.png"
            alt="shape"
          />
          <img
            className="shape shape3"
            src="assets/images/speciality/shape3.png"
            alt="shape"
          />
        </div>
      </div>
      {/* <!-- Speciality Section End --> */}

      {/* <!-- Choose us Section Start --> */}
      <div className="why-choose-us section-margin-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="why-choose-us_inner">
                <div
                  className="why-choose-us_content wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s"
                >
                  <div className="heading-one">
                    <span className="heading-one-subtitle">Why Choose Us</span>
                    <h2 className="heading-one-title">Fast & Easy Solutions</h2>
                    <p>
                      Kimod tempoer incididunt onomes sundo ritoma amar Lorem
                      ipsum dolor sit amet, con-sectetur adipisicing elit,
                    </p>
                  </div>
                </div>

                <ul className="why-choose-us_list">
                  <li
                    className="why-choose-us_list__single wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".1s"
                  >
                    <span className="check-icon">
                      <img src="assets/images/icon/check.png" alt="check" />
                    </span>
                    <div className="check-content">
                      <h4 className="check-content_title">
                        Secure Business Solutions
                      </h4>
                      <p className="check-content_text">
                        Kimod tempoer incididunt onomes sundo ritoma am ons
                        ectetur adip
                      </p>
                    </div>
                  </li>
                  <li
                    className="why-choose-us_list__single wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".3s"
                  >
                    <span className="check-icon">
                      <img src="assets/images/icon/check.png" alt="check" />
                    </span>
                    <div className="check-content">
                      <h4 className="check-content_title">
                        Help from Expert Consutant
                      </h4>
                      <p className="check-content_text">
                        Kimod tempoer incididunt onomes sundo ritoma am ons
                        ectetur adip
                      </p>
                    </div>
                  </li>
                  <li
                    className="why-choose-us_list__single wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".5s"
                  >
                    <span className="check-icon">
                      <img src="assets/images/icon/check.png" alt="check" />
                    </span>
                    <div className="check-content">
                      <h4 className="check-content_title">Full Featured Report</h4>
                      <p className="check-content_text">
                        Kimod tempoer incididunt onomes sundo ritoma am ons
                        ectetur adip
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="why-choose-us_shape scene">
          <img
            className="shape shape1 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".1s"
            src="assets/images/choose/circle.png"
            alt="shape"
          />
          <img
            className="shape shape2"
            src="assets/images/choose/shape1.png"
            alt="shape"
          />
          <img
            data-depth="0.20"
            className="shape shape3"
            src="assets/images/choose/shape2.png"
            alt="shape"
          />
        </div>
      </div>
      {/* <!-- Choose us Section end --> */}

      {/* <!-- Team Two Section Start --> */}
      <div className="team-two section-margin-top">
        <div className="team-two_shape scene">
          <img
            className="shape shape1 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".1s"
            src="assets/images/team/team-two/shape1.png"
            alt="Shape"
          />
          <img
            className="shape shape2 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".5s"
            src="assets/images/team/team-two/shape2.png"
            alt="Shape"
          />
          <img
            className="shape shape3 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".3s"
            src="assets/images/team/team-two/shape3.png"
            alt="Shape"
          />
          <img
            className="shape shape4"
            src="assets/images/team/team-two/shape4.png"
            alt="Shape"
          />
          <img
            className="shape shape5"
            src="assets/images/team/team-two/shape5.png"
            alt="Shape"
          />
          <img
            className="shape shape6 wow zoomIn"
            data-wow-duration="1.5s"
            data-wow-delay=".1s"
            src="assets/images/team/team-two/shape6.png"
            alt="Shape"
          />
        </div>

        <div className="container">
          <div className="row mb-n60">
            <div
              className="col-lg-7 mb-60 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".1s"
            >
              <div className="team-two_images">
                <img
                  src="assets/images/team/team-two/team1.png"
                  alt="Team"
                  className="js-tilt image1"
                />
                <img
                  src="assets/images/team/team-two/team2.png"
                  alt="Team"
                  className="js-tilt image2"
                />
                <img
                  src="assets/images/team/team-two/team3.png"
                  alt="Team"
                  className="js-tilt image3"
                />
                <img
                  src="assets/images/team/team-two/circle1.png"
                  alt="Team"
                  className="image4"
                />
                <img
                  src="assets/images/team/team-two/circle2.png"
                  alt="Team"
                  className="image5"
                />
              </div>
            </div>
            <div
              className="col-lg-5 align-self-center mb-60 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".3s"
            >
              <div className="heading-one">
                <span className="heading-one-subtitle">We are really great</span>
                <h2 className="heading-one-title">Amazing Team Members</h2>
                <p>
                  Kimod tempoer incididunt onomes sundo ritoma amar orem is psum
                  dolor sit amet, consectetur adipisicing elitsed do eiusm od
                  tempor inci didunt
                </p>
                <a href="about.html" className="btn-style-one">
                  <span>View Members</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team Two Section End --> */}

      {/* <!-- Testimonial Section Start --> */}
        <Testimonial />
      {/* <!-- Testimonial Section End --> */}

      {/* <!-- Brand Section Start --> */}
      <div className="brand-four">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".1s"
            >
              <div className="brand-slider brand-style swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a className="brand-after" href=" ">
                      <img
                        src="assets/images/brand/brand-three/1.png"
                        alt="Brand-Image"
                      />
                    </a>
                    <a className="brand-before" href=" ">
                      <img
                        src="assets/images/brand/brand-three/1-1.png"
                        alt="Brand-Image"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="brand-after" href=" ">
                      <img
                        src="assets/images/brand/brand-three/2.png"
                        alt="Brand-Image"
                      />
                    </a>
                    <a className="brand-before" href=" ">
                      <img
                        src="assets/images/brand/brand-three/2-1.png"
                        alt="Brand-Image"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="brand-after" href=" ">
                      <img
                        src="assets/images/brand/brand-three/3.png"
                        alt="Brand-Image"
                      />
                    </a>
                    <a className="brand-before" href=" ">
                      <img
                        src="assets/images/brand/brand-three/3-1.png"
                        alt="Brand-Image"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="brand-after" href=" ">
                      <img
                        src="assets/images/brand/brand-three/4.png"
                        alt="Brand-Image"
                      />
                    </a>
                    <a className="brand-before" href=" ">
                      <img
                        src="assets/images/brand/brand-three/4-1.png"
                        alt="Brand-Image"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="brand-after" href=" ">
                      <img
                        src="assets/images/brand/brand-three/5.png"
                        alt="Brand-Image"
                      />
                    </a>
                    <a className="brand-before" href=" ">
                      <img
                        src="assets/images/brand/brand-three/5-1.png"
                        alt="Brand-Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape shape-1 wow zoomIn"
          data-wow-duration="1.5s"
          data-wow-delay=".1s"
        >
          <img src="assets/images/brand/brand-three/circle.png" alt="Circle" />
        </div>
        <div
          className="shape shape-2 wow zoomIn"
          data-wow-duration="1.5s"
          data-wow-delay=".3s"
        >
          <img src="assets/images/brand/brand-three/circle2.png" alt="Circle" />
        </div>
      </div>
      {/* <!-- Brand Section End --> */}

      {/* <!-- Home Contact Form Start --> */}
      <div className="home-contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="home-contact_wrapper">
                <div
                  className="home-contact_content wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s"
                >
                  <h4 className="subtitle">Contact Us</h4>
                  <h2 className="title">Stay Connected with Us</h2>
                  <p>
                    Kimod tempoer incididunt onomes sundo ritoma amar Lorem
                    ipsum dolor sit amet, consectetur
                  </p>
                  <ul className="home-contact_info">
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="details">
                        <h5 className="details-title">Call Us</h5>
                        <a href="tel:123-456-789" className="details-text">
                          +880 1234 5678
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="details">
                        <h5 className="details-title">Email Us</h5>
                        <a href="mailto:hello@avers.com" className="details-text">
                          hello@avers.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <form
                  className="home-contact_form wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay=".3s"
                >
                  <div className="form-single">
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="form-single">
                    <input type="email" placeholder="Your email" name="email" />
                  </div>
                  <div className="form-single">
                    <input placeholder="Your phone" name="phone" />
                  </div>
                  <div className="form-single">
                    <textarea
                      name="message"
                      placeholder="Write message here"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-style-four">
                    Submit now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape shape-1 wow zoomIn"
          data-wow-duration="1.5s"
          data-wow-delay=".1s"
        >
          <img src="assets/images/contact/circle.png" alt="Circle" />
        </div>
        <div
          className="shape shape-2 wow zoomIn"
          data-wow-duration="1.5s"
          data-wow-delay=".1s"
        >
          <img src="assets/images/contact/circle2.png" alt="Circle" />
        </div>
      </div>
      {/* <!-- Home Contact Form End --> */}
 
      {/* <!-- Home Blog Section Start --> */}
      <div className="section-margin blog-post-two scene">
        <div className="container mb-n30">
          <div className="row">
            <div
              className="col-12 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".1s"
            >
              <div className="heading-one text-center">
                <span className="heading-one-subtitle">From Our Blog</span>
                <h2 className="heading-one-title">News & Updates</h2>
                <p>
                  Kimod tempoer incididunt onomes sundo ritoma amar porem ipsum
                  dolor sit amet, consectetur adipisicing
                </p>
              </div>
            </div>
          </div>

          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
            <div
              className="col mb-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".1s"
            >
              <div className="blog-grid-single">
                <div className="blog-grid-image ">
                  <a href="blog-details.html" className="blogpost-image">
                    <img
                      src="assets/images/blog/home-blog1.png"
                      alt="BlogImage"
                    />
                  </a>
                  <div className="blog-grid-image-thumb">
                    <span className="date">14</span>
                    <span className="text">Apr</span>
                  </div>
                </div>
                <div className="blog-grid-content">
                  <span className="subtitle">Business</span>
                  <h4 className="title">
                    <a href="blog-details.html">
                      Dalia enim ad minim veniam quis nostrud exercitation
                    </a>
                  </h4>
                </div>
              </div>
            </div>

            <div
              className="col mb-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".3s"
            >
              <div className="blog-grid-single">
                <div className="blog-grid-image">
                  <a href="blog-details.html" className="blogpost-image">
                    <img
                      src="assets/images/blog/home-blog2.png"
                      alt="BlogImage"
                    />
                  </a>
                  <div className="blog-grid-image-thumb">
                    <span className="date">14</span>
                    <span className="text">Apr</span>
                  </div>
                </div>
                <div className="blog-grid-content">
                  <span className="subtitle">Business</span>
                  <h4 className="title">
                    <a href="blog-details.html">
                      Dalia enim ad minim veniam quis nostrud exercitation
                    </a>
                  </h4>
                </div>
              </div>
            </div>

            <div
              className="col mb-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".5s"
            >
              <div className="blog-grid-single">
                <div className="blog-grid-image">
                  <a href="blog-details.html" className="blogpost-image">
                    <img
                      src="assets/images/blog/home-blog3.png"
                      alt="BlogImage"
                    />
                  </a>
                  <div className="blog-grid-image-thumb">
                    <span className="date">14</span>
                    <span className="text">Apr</span>
                  </div>
                </div>
                <div className="blog-grid-content">
                  <span className="subtitle">Business</span>
                  <h4 className="title">
                    <a href="blog-details.html">
                      Dalia enim ad minim veniam quis nostrud exercitation
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape shape-1 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay=".1s"
        >
          <img src="assets/images/blog/shape/shape1.png" alt="Circle" />
        </div>
        <div className="shape shape-2" data-depth="0.06">
          <img src="assets/images/blog/shape/shape2.png" alt="Circle" />
        </div>
        <div className="shape shape-3" data-depth="0.06">
          <img src="assets/images/blog/shape/shape3.png" alt="Circle" />
        </div>
      </div>
      {/* <!-- Home Blog Section End --> */}

      {/* footer start  */}
      <Footer />
      {/* footer end  */}
    </div>
  );
}
