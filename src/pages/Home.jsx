import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay  } from "swiper/modules";
import Testimonial from "./Testimonial";
import Counter from './Counter' 
import WhyChoose from "./WhyChoose";
import Brands from "./Brands";
export default function Home() {  
  return (
    <div>

      <Navbar /> 

       {/* <!-- Slider Section start --> */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".slidertwo-pagination" }}
        // autoplay={{ delay: 7000 }}
         autoplay={{ delay: 60000, disableOnInteraction: false }}
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

              <div className="col-12 col-lg-4 mx-auto text-center align-self-center order-lg-0 order-1 ">
                <div className="heading-one">
                  <span className="heading-one-subtitle gradient-text-1">
                   GBS GEMS
                  </span>
                  <h2 className="heading-one-title">
                    Authenticity You Trust
                  </h2>
                  <p className="mb-30 text-center">Diamond & Gems testing Laboratary Rudraksh Research Centre. </p>
                  <a href="/Contact" className="btn-style-one">
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
                    Quality Assurance
                  </span>
                  <h2 className="heading-one-title">
                    Precision in Every Test
                  </h2>
                  <p className="mb-30 text-center">Accurate and reliable testing of diamonds and gemstones.</p>
                  <a href="/Contact" className="btn-style-one">
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
          <span className="heading-one-subtitle">We are GBS Gems</span>
          <h2 className="heading-one-title">
            Gem & Rudraksha Testing 
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
            <h5 className="title">Gem Testing</h5>
            <p>
              Accurate testing of diamonds and gemstones to ensure authenticity and quality.
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
            <h5 className="title">Rudraksha Verification</h5>
            <p>
              Expert verification of rudraksha beads with certified reports for authenticity.
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
            <h5 className="title">Certification & Reports</h5>
            <p>
              Detailed certificates and reports for all tested gems and rudraksha for transparency.
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
                  <span className="heading-one-subtitle">Gems Testing</span>
                  <h2 className="heading-one-title">
                    Your Trusted Validator
                  </h2>
                </div>
                <div
                  className="about-two-text wow fadeInUp"
                  data-wow-duration="0.9s"
                >
                  <p>
                We Don’t Sale any Gem, Rudraksh and related products !! We just Test them in our Well Established Lab and provide you report on basis of its quality. We also provide a certificate with all Tested Gems, Rudraksh and related product. This certificate can also be checked on our website to confirm the originality of it.
                  </p>
                  <p>
                    Come and view our exciting array of Daily New Arrivals. We add new gemstones to our inventory every day, so be sure to check back frequently. These daily new arrivals may be here today, but gone tomorrow.
                  </p>
                  <a href="/" className="btn-style-one">
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
    <Counter />
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
                <h2 className="heading-one-title"> Gem Certification</h2>
                <p>
                 We provide expert testing and certification for diamonds, gemstones, and rudraksh, ensuring authenticity and quality you can rely on.
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
                    src="/assets/images/NewImg/gems.png"
                    alt=""
                  />
                  <img
                    className="img-white"
                    src="assets/images/icon/icon-6.png"
                    alt=""
                  />
                </div>
                <div className="service-two-content">
                  <h4 className="title">we testing gems stone</h4>
                  <p>
                  We testing gemstone like natural Yellow sapphire (Pukhraj),Blue sapphire (Neelam),Ruby (Manik),Emerald (Panna),Hessonite garnet (Gommed),Cat’s eye(Ketu),Pearl (Moti),Coral (Munga)etc.
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
                    src="/assets/images/NewImg/diamond.png"
                    alt=""
                  />
                  <img
                    className="img-white"
                    src="assets/images/icon/icon-6.png"
                    alt=""
                  />
                </div>
                <div className="service-two-content">
                  <h4 className="title">we testing diamond jewellery</h4>
                  <p>
                   We testing Diamond Jewellery like test by clarity F L, I F, V V S I-V V S 2, V S 2, S I 1-V S 2, S I 1-S S 2, I 1, I 2, I 3 & test colour in D to Z, we also test nose pin, ring, earing, pendant, bracelet, bangle’s, necklace etc.
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
                    src="/assets/images/NewImg/rudrakash.png"
                    alt=""
                  />
                  <img
                    className="img-white"
                    src="assets/images/icon/icon-6.png"
                    alt=""
                  />
                </div>
                <div className="service-two-content">
                  <h4 className="title">we testing rudraksh</h4>
                  <p>
                   We testing Rudraksh like test X-ray based testing & conform to how many natural face & seeds in Rudraksh. Testing IN 1 TO 21 mukhi ganesh, gaurisankar, trijeurti, nirakar, ekavinshat etc.
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
                    src="/assets/images/NewImg/mala.png"
                    alt=""
                  />
                  <img
                    className="img-white"
                    src="assets/images/icon/icon-6.png"
                    alt=""
                  />
                </div>
                <div className="service-two-content">
                  <h4 className="title">we testing gemstone & rudraksh mala</h4>
                  <p>
                   We testing Rudraksh mala like test X-ray based testing in rudraksh mala & gemstone like crystal (Sphatik), coral (Munga), dyad coral, dyad quartaz, navratna (Navgrah), pearl (Moti), crystal, mala etc.
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
                    24/7 Assistance
                  </h2>
                  <p className="heading-one-text">
                    Our dedicated team is always ready to answer your queries and provide fast, reliable support whenever you need it.
                  </p>
                  <a href="tel:+9157600020" className="phone-call">
                    <span className="phone-icon">
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    <span className="phone-text">+91-9157600020</span>
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
                    src="https://ethemestudio.com/demo/avers/assets/images/support/support-man.png"
                    alt="SupportMan"
                    sizes="589*652"
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
              alt="speciality"
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
            Authentic Gem Testing
          </h2>
          <p>
            At GBS Gems, we provide professional testing and certification for diamonds, gemstones, and rudraksha beads, ensuring complete authenticity and quality.
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
              <h4 className="content_title">Gemstone Analysis</h4>
              <p className="content_text">
                Comprehensive testing of diamonds and gemstones for clarity, quality, and authenticity.
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
              <h4 className="content_title">Rudraksha Verification</h4>
              <p className="content_text">
                Certified verification of rudraksha beads to confirm originality and spiritual significance.
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
              <h2 className="heading-one-title"> Reliable Solutions</h2>
              <p>
                We deliver top-notch services tailored to your business needs,
                ensuring efficiency, security, and expert guidance every step of the way.
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
                <h4 className="check-content_title">Secure & Trusted Solutions</h4>
                <p className="check-content_text">
                  Protect your business with our secure and reliable services designed to minimize risk.
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
                <h4 className="check-content_title">Expert Guidance & Support</h4>
                <p className="check-content_text">
                  Get professional advice from our experienced consultants to make informed business decisions.
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
                <h4 className="check-content_title">Comprehensive Reporting</h4>
                <p className="check-content_text">
                  Receive detailed reports and insights to track your business performance and growth effectively.
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
      <div className="team-two section-margin-top section-padding-bottom" >
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
                <span className="heading-one-subtitle">Gem Insights</span>
                <h2 className="heading-one-title">GemStone Overview </h2>
                <p>
               Gemstones are a smart investment that has attracted people for centuries. Gemstones not only have a rich history and represent power, but they are eye-catching beauties, and are treasured collectables. The integrity of these precious stones is important to our gemstones dealers, as much as the seamless process of purchasing them. Whatever your reasons are for investing in gemstones, we’re dedicated to ensuring you get a quality selection to choose from and that you’re satisfied with your experience.
                </p>
                {/* <a href="about.html" className="btn-style-one">
                  <span>View Members</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team Two Section End --> */}

      <WhyChoose />

      {/* <!-- Testimonial Section Start --> */}
        <Testimonial />
      {/* <!-- Testimonial Section End --> */}

      {/* <!-- Brand Section Start --> */}
     <Brands />
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
                    Stay connected with us to receive the latest updates, news, offers, and exclusive insights daily.
                  </p>
                  <ul className="home-contact_info">
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="details">
                        <h5 className="details-title">Call Us</h5>
                        <a href="tel:+9157600020" className="details-text">
                          +91-9157600020
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="details">
                        <h5 className="details-title">Email Us</h5>
                        <a href="mailto:info@gbsgemslab.com" className="details-text">
                          info@gbsgemslab.com
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
          <h2 className="heading-one-title">Latest Insights & Updates</h2>
          <p>
            Discover industry trends, tips, and insights from our experts to stay ahead in business and technology.
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
          <div className="blog-grid-image">
            <a href="/Blog" className="blogpost-image">
              <img src="assets/images/blog/home-blog1.png" alt="BlogImage" />
            </a>
            <div className="blog-grid-image-thumb">
              <span className="date">14</span>
              <span className="text">Apr</span>
            </div>
          </div>
          <div className="blog-grid-content">
            <span className="subtitle">Gem Insights</span>
            <h4 className="title">
              <a href="/Blog">
                How to Identify Authentic Gemstones: A Beginner's Guide
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
            <a href="/Blog" className="blogpost-image">
              <img src="assets/images/blog/home-blog2.png" alt="BlogImage" />
            </a>
            <div className="blog-grid-image-thumb">
              <span className="date">10</span>
              <span className="text">Mar</span>
            </div>
          </div>
          <div className="blog-grid-content">
            <span className="subtitle">Business</span>
            <h4 className="title">
              <a href="/Blog">
                5 Tips to Ensure Quality Testing for Your Gemstone Business
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
            <a href="/Blog" className="blogpost-image">
              <img src="assets/images/blog/home-blog3.png" alt="BlogImage" />
            </a>
            <div className="blog-grid-image-thumb">
              <span className="date">22</span>
              <span className="text">Feb</span>
            </div>
          </div>
          <div className="blog-grid-content">
            <span className="subtitle">Trends</span>
            <h4 className="title">
              <a href="/Blog">
                Emerging Trends in the Gemstone Market You Should Know About
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
