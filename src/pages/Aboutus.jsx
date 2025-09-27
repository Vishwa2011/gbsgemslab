import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Aboutus = () => {
  return (
    <>
      <Navbar />
         <div>
              {/* <!-- Breadcrumb Section Start --> */}
    <div className="section-padding breadcrumb" data-bg-image="assets/images/breadcrumb/breadcrumb-1.png">
        <div className="container">
            <div className="row">
                <div className="col-12 align-items-center text-center">
                    {/* <!-- Breadcrumb Wrapper Start --> */}
                    <div className="breadcrumb-wrapper">
                        <h1 className="title">About Us</h1>
                        <ul className="breadcrumb-list">
                            <li><a href="index.html">Home</a></li>
                            <li><span>About</span></li>
                        </ul>
                    </div>
                    {/* <!-- Breadcrumb Wrapper End --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb Section End --> */}
    
    {/* <!-- About Section Start --> */}
    <div className="section-padding about-two">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                    {/* <!-- About Images Start --> */}
                    <div className="about-two-images me-0">
                      <div className="about-two-images-one">
    <img className="js-tilt" src="assets/images/about/about-4.png" alt="QualityImage" />
    <div className="about-two-images-thumb gradient-2">
        <span className="text">Since</span>
        <span className="date">1948</span>
    </div>
</div>

                        <div className="about-two-images-two">
                            <img className="js-tilt" src="assets/images/about/about-5.png" alt="QualityImage" />
                        </div>
                    </div>
                    {/* <!-- About Images End --> */}
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".3s">
                    {/* <!-- Heading Start --> */}
                    <div className="heading-one">
                        <span className="heading-one-subtitle">We are Avers</span>
                        <h2 className="heading-one-title">About Us</h2>

                        <div className="about-two-text">
                            <p style={{fontWeight:600, textAlign:'justify'}}>GBS Diamond & Gems Testing Laboratory – Rudraksh Research Center is providing its dedicated services from last 10 years. From Last 5 years we are into the research field of Gems & Rudraksh. We have setup our Gemological Laboratory Last Year. We visited all possible places to get more knowledge in the field of Research of Gems, Rudraksh and Diamonds. GBS deals in testing for All Kinds of Gems (Coral, Saphire, Emerald, Ruby, Moon Stone, Diamonds etc) and Rudraksh of all mukhis. We also Provide Certificate & Box Pack Gem & Rudraksh with every Certified Gem which can be confirmed from our website.</p>
                            <p style={{textAlign:"justify"}}>Our Advanced Lab assures you to provide better report always. We test every product with all Latest & Quality Equipments which ensures that you’ll get reliable reports with satisfaction.</p>
                      <p style={{textAlign:"justify"}} >
                        We Don’t Sale any Gem, Rudraksh and related products !! We just Test them in our Well Established Lab and provide you report on basis of its quality. We also provide a certificate with all Tested Gems, Rudraksh and related product. This certificate can also be checked on our website to confirm the originality of it.
                      </p>
                      <ul>
                        <li style={{listStyle:'inside'}}>Special Prices for Bulk Testing of Products.</li>
                        <li style={{listStyle:'inside'}}>Special Brand Name Box Packing available</li>
                      </ul>
                        </div>
                    </div>
                    {/* <!-- Heading End --> */}
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

    {/* <!-- About Creative Section Start --> */}
    <div className="section-padding about-creative">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                    {/* <!-- About Creative Image Start --> */}
                    <div className="about-creative-images">
                        <div className="image-one"> 
                            <img src="assets/images/about/creative-one.png" alt="AboutImage" />
                        </div>
                        <div className="image-two">
                            <img src="assets/images/about/creative-two.png" alt="AboutImage" />
                        </div>
                    </div>
                    {/* <!-- About Creative Image End --> */}
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="about-creative-details">
                        {/* <!-- Heading Start --> */}
                        <div className="heading-one">
                            <span className="heading-one-subtitle">Design matters</span>
                            <h2 className="heading-one-title">About GBS Gems </h2>
                            <p>I also want to thank you for you swift, professional, informative and friendly service, it is refreshing and comforting to know that there are people out there that you can trust and who care about the service that they give as well the quality of the product that they sell.</p>
                        </div>
                        {/* <!-- Heading End --> */}
                        {/* <!-- About creative Tab Start --> */}
                        <div className="about-creative-tab">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="true">Our Mission</button>
                                    <button className="nav-link" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false">Our Vision</button>
                                    <button className="nav-link" id="nav-history-tab" data-bs-toggle="tab" data-bs-target="#nav-history" type="button" role="tab" aria-controls="nav-history" aria-selected="false">Our History</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                    <div className="nav-content-inner">
                                        <p>Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp tetur adip isicing elit, sed do eiusm od eur sint occaecat cupida</p>
                                        <img src="assets/images/about/mission.png" alt="Image" />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                    <div className="nav-content-inner">
                                        <p>Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp tetur adip isicing elit, sed do eiusm od eur sint occaecat cupida</p>
                                        <img src="assets/images/about/mission.png" alt="Image" />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab">
                                    <div className="nav-content-inner">
                                        <p>Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp tetur adip isicing elit, sed do eiusm od eur sint occaecat cupida</p>
                                        <img src="assets/images/about/mission.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About Creative Section End --> */}
    

    {/* <!-- Team Section Start --> */}
    <div className="section-padding team-bg gradient-1">
        <div className="container">
            <div className="row">
                <div className="col-12 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                    {/* <!-- Heading Start --> */}
                    <div className="heading-one">
                        <span className="heading-one-subtitle">Design matters</span>
                        <h2 className="heading-one-title">Amazing Team Members </h2>
                    </div>
                    {/* <!-- Heading End --> */}
                </div>
            </div>
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-xs-2 row-cols-1 mb-n30">
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                    <div className="single-team">
                        <div className="single-team-image">
                            <img src="assets/images/team/1.png" alt="TeamImage" />
                        </div>
                        <div className="single-team-content">
                            <a href="contact.html"><span className="name">Minhaz Mohsin</span></a>
                            <span className="desig">Founder & CEO</span>
                            <ul className="single-team-social">
                                <li>
                                    <a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="single-team">
                        <div className="single-team-image">
                            <img src="assets/images/team/2.png" alt="TeamImage" />
                        </div>
                        <div className="single-team-content">
                            <a href="contact.html"><span className="name">John Jessy</span></a>
                            <span className="desig">Head of Ideas</span>
                            <ul className="single-team-social">
                                <li>
                                    <a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".5s">
                    <div className="single-team">
                        <div className="single-team-image">
                            <img src="assets/images/team/3.png" alt="TeamImage" />
                        </div>
                        <div className="single-team-content">
                            <a href="contact.html"><span className="name">Jenny Alex</span></a>
                            <span className="desig">Team Leader</span>
                            <ul className="single-team-social">
                                <li>
                                    <a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".7s">
                    <div className="single-team">
                        <div className="single-team-image">
                            <img src="assets/images/team/4.png" alt="TeamImage" />
                        </div>
                        <div className="single-team-content">
                            <a href="contact.html"><span className="name">Hizz Lui</span></a>
                            <span className="desig">Designer</span>
                            <ul className="single-team-social">
                                <li>
                                    <a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team Section End --> */}

    
    

    {/* <!-- Testimonial Section Start --> */}
    <div className="section-padding testimonial-two scene">
        <div className="container">
            <div className="row">
                <div className="col-12 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                    {/* <!-- Heading Start --> */}
                    <div className="heading-one">
                        <span className="heading-one-subtitle">Testimonials</span>
                        <h2 className="heading-one-title">What People Say</h2>
                    </div>
                    {/* <!-- Heading End --> */}
                </div>
            </div>

            <div className="row">
                <div className="col-12 position-relative wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                    <div className="testimonialtwo">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                {/* <!-- Testimonial Two Inner Start --> */}
                                <div className="testimonial-two-single">
                                    <div className="quote gradient-1">
                                        <img src="assets/images/testimonial/quote.png" alt="QuoteIcon" />
                                    </div>
                                    <p className="text">Duis aute irure dolor in rep rehenderit in volup tate velit esse cillum dol ore eu fugiat nulla pariat ur. Excepteur sint occae cat cupidatat boje nakeu to chinlo na.</p>
                                    <div className="user">
                                        <div className="user-image">
                                            <img src="assets/images/testimonial/user-2.png" alt="UserImage" />
                                        </div>
                                        <div className="user-meta">
                                            <span className="name">Juwel Khan</span>
                                            <p className="desig">Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Testimonial Two Inner End --> */}
                            </div>
                            <div className="swiper-slide">
                                {/* <!-- Testimonial Two Inner Start --> */}
                                <div className="testimonial-two-single">
                                    <div className="quote gradient-1">
                                        <img src="assets/images/testimonial/quote.png" alt="QuoteIcon" />
                                    </div>
                                    <p className="text">Duis aute irure dolor in rep rehenderit in volup tate velit esse cillum dol ore eu fugiat nulla pariat ur. Excepteur sint occae cat cupidatat boje nakeu to chinlo na.</p>
                                    <div className="user">
                                        <div className="user-image">
                                            <img src="assets/images/testimonial/user-3.png" alt="UserImage" />
                                        </div>
                                        <div className="user-meta">
                                            <span className="name">Sinha Jabin</span>
                                            <p className="desig">Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Testimonial Two Inner End --> */}
                            </div>
                            <div className="swiper-slide">
                                {/* <!-- Testimonial Two Inner Start --> */}
                                <div className="testimonial-two-single">
                                    <div className="quote gradient-1">
                                        <img src="assets/images/testimonial/quote.png" alt="QuoteIcon" />
                                    </div>
                                    <p className="text">Duis aute irure dolor in rep rehenderit in volup tate velit esse cillum dol ore eu fugiat nulla pariat ur. Excepteur sint occae cat cupidatat boje nakeu to chinlo na.</p>
                                    <div className="user">
                                        <div className="user-image">
                                            <img src="assets/images/testimonial/user-4.png" alt="UserImage" />
                                        </div>
                                        <div className="user-meta">
                                            <span className="name">MiKe Anderson</span>
                                            <p className="desig">Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Testimonial Two Inner End --> */}
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-two-arrow">
                        <div className="swiper-arrow-long">
                            <div className="testimonial-slider-button-prev prev-button">
                                <img className="arrow-1" src="assets/images/slider/arrow-1.png" alt="ArrowImage" />
                                <img className="arrow-2" src="assets/images/slider/arrow-2.png" alt="ArrowImage" />
                            </div>
                            <div className="testimonial-slider-button-next next-button">
                                <img className="arrow-1" src="assets/images/slider/arrow-1.png" alt="ArrowImage" />
                                <img className="arrow-2" src="assets/images/slider/arrow-2.png" alt="ArrowImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="shape shape-1" data-depth="0.08">
            <img src="assets/images/shape/shape-20.png" alt="Shape" />
        </div>
    </div>
    {/* <!-- Testimonial Section End --></div> */}
         </div>
      <Footer />
    </>
  )
}

export default Aboutus
