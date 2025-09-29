import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
  return (
    <div>
      <Navbar />

      {/* <!-- Breadcrumb Section Start --> */}
    <div className="section-padding breadcrumb" style={{ backgroundImage: "url('https://png.pngtree.com/background/20250226/original/pngtree-gleaming-round-diamonds-positioned-against-a-stylish-black-background-stunning-3d-picture-image_13269374.jpg')" }} >
        <div className="container">
            <div className="row">
                <div className="col-12 align-items-center text-center">

                    <div className="breadcrumb-wrapper">
                        <h1 className="title">Contact Us</h1>
                        <ul className="breadcrumb-list">
                            <li><a href="/">Home</a></li>
                            <li><span>Contact</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Contact Us Section Start --> */}
    <div className="contact-us section-margin">
        <div className="container position-relative">
            <div className="row">
                <div className="heading-one text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    <span className="heading-one-subtitle">Contact Us</span>
                    <h2 className="heading-one-title">Stay Connected</h2>
                </div>
            </div>
            <div className="row mb-n30">
                <div className="col-md-6 mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    <div className="contact-head">
                        <p className="text">For any inquiries about authentic gems, rudraksha, or our services, feel free to reach out to us. We are happy to guide you toward the right choice.</p>
                    </div>
                    <ul className="contact-info">
                        <li>
                            <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                            <div className="contact-info-content">
                                <h3 className="title">Address</h3>
                                <span className="text">15 – Vaishnavdevi Ideal Home, B R Park Road, <br/> Jahangirabad, Surat,Gujarat – 395005</span>
                            </div>
                        </li>
                        <li>
                            <div className="icon"><i className="fas fa-phone-alt"></i></div>
                            <div className="contact-info-content">
                                <h3 className="title">Phone</h3>
                                <span className="text"><a href="tel:+9157600020">+91-9157600020</a></span>
                            </div>
                        </li>
                        <li>
                            <div className="icon"><i className="fas fa-envelope"></i></div>
                            <div className="contact-info-content">
                                <h3 className="title">Email</h3>
                                <span className="text"><a href="mailto:info@gbsgemslab.com">info@gbsgemslab.com</a></span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6 mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <form id="contact-form" className="contact-form" action="assets/php/contact.php">
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <input placeholder="Your name" name="name" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input type="email" placeholder="Your email" name="email" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input placeholder="Your phone" name="phone" />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input placeholder="How Can We Help?" name="How Can We Help?" />
                            </div>
                            <div className="col-12 mb-3">
                                <textarea name="message" placeholder="Write Your Message Here"></textarea>
                            </div>
                            <div className="col-12 text-left">
                                <button className="btn btn-style-one" type="submit"> <span>Submit Now</span> </button>
                            </div>
                            <div className="col-12">
                               <div className="form-message mt-4"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact Us Section End --> */}

        {/* <!-- Contact Map Section Start --> */}
    <div className="section-margin-bottom">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="contact-map-section wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                        <div className="google-map-area w-100">
                            <div className="icon">
                                <img src="assets/images/contact/map-icon.png" alt="Map-Icon" />
                            </div>
                            <div className="map-inner" style={{width: "100%"}}>
                              <iframe
    src="https://maps.google.com/maps?width=100%25&height=420&hl=en&q=15%20Vaishnavdevi%20Ideal%20Home,%20B%20R%20Park%20Road,%20Jahangirabad,%20Surat,%20Gujarat%20395005+(My%20Business%20Name)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
    width="100%"
    height="420"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Business Location"
  ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact Map Section End --> */}
      <Footer />
    </div>
  )
}
