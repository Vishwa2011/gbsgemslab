import React, { useState } from "react";

export default function Footer() {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
                  {/* <!-- Newletter Section Start --> */}
      <div className="newsletter">
        <div className="newsletter-wrapper">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="newsletter-inner">
                  <div
                    className="heading-one wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".1s"
                  >
                    <span className="heading-one-subtitle">
                      Subscribe Our Newsletter
                    </span>
                    <h2 className="heading-one-title">Spiritual Updates</h2>
                    <p className="heading-one-text">
                       Get the latest updates on authentic gemstones, sacred rudraksha, 
                and spiritual insights delivered directly to your inbox.
                    </p>
                  </div>

                  <form
                    action="#"
                    className="footer-widget-form wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".3s"
                  >
                    <input type="text" placeholder="Your email here" />
                    <button>
                      <img style={{borderRadius:'0px'}}
                        src="assets/images/icon/icon-5.png"
                        alt="IconImage"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape shape-1">
          <img src="assets/images/newsletter/shape1.png" alt="Circle" />
        </div>
        <div
          className="shape shape-2 wow zoomIn"
          data-wow-duration="1.5s"
          data-wow-delay=".1s"
        >
          <img src="assets/images/newsletter/shape2.png" alt="Circle" />
        </div>
      </div>
      {/* <!-- Newletter Section End --> */}
       <div className="footer-two footer-two-bg">
        <div className="container">
            <div className="row mb-n30">
                <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                    {/* <!-- Footer Widget Start --> */}
                    <div className="footer-widget-two">
                        <div className="logo negative-margin">
                            <a href="index-2.html">
                                <img src="/assets/images/NewImg/LOGO.png" alt="" />
                            </a>
                        </div>
                        <ul className="footer-widget-two-list-icon">
                            <li><i className="fas fa-map-marker-alt"></i> <span>15 – Vaishnavdevi Ideal Home, B R Park Road, Jahangirabad, Surat,Gujarat – 395005</span></li>
                            <li><i className="fas fa-envelope"></i> <span><a href="mailto:info@gbsgemslab.com" style={{color:'#54545f'}}>info@gbsgemslab.com</a></span> </li>
                            <li><i className="fas fa-phone"></i><span><a href="tel:+9033600020" style={{color:'#54545f'}}>+91 90336 00020</a></span> </li>
                            <li><i className="fas fa-phone"></i><span><a href="tel:+9157600020" style={{color:'#54545f'}}>+91 91576 00020</a></span> </li>
                        </ul>
                        <ul className="social-icon d-flex flex-start">
                            <li>
                                <a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Footer Widget End --> */}
                </div>
                <div className="col-lg-5 col-md-6 col-sm-6 mb-30">
                  
                    <div className="footer-widget-two">
                        <div className="widget-list-wrapper">
                            <div className="widget-list-single">
                                <h5 className="footer-widget-two-title">Quick Links</h5>
                                <ul className="footer-widget-two-list">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/Aboutus">About Us</a></li>
                                    <li><a href="/Services">Services</a></li>
                                    <li><a href="/Verify">Verify Certificate</a></li>
                                    <li><a href="/Blog">Blog</a></li>
                                    <li><a href="/Contact">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="widget-list-single">
                                <h5 className="footer-widget-two-title">Policy</h5>
                                <ul className="footer-widget-two-list">
                                    <li><a href="/Privacypolicy">Privacy Policy</a></li>
                                    <li><a href="/Termsandcondition">Term & Conditions Policy</a></li>
                                </ul>
                                 <div className="header-right_button header-button mt-2">
        <button
          className="btn-style-one"
          onClick={() => setIsOpen(true)}
        >
          <span>Get A Quote</span>
        </button>
      </div>

       {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Request a Quote</h2>
            <p>Please fill in your details and we will get back to you.</p>
            
            {/* Example form */}
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit" className="btn-style-one">Submit</button>
            </form>

            <button className="close-btn " onClick={() => setIsOpen(false)}>X</button>
          </div>
        </div>
      )}
      
                            </div>
                        </div>
                    </div>
               
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-6 mb-30">

                    <div className="footer-widget-two">
                        <h5 className="footer-widget-two-title">Recent Posts</h5>
                        <ul className="sidebar-blog">
                            <li>
                                <a href="blog-details.html" className="image"><img src="assets/images/blog/small/1.png" alt="Blog Post" /></a>
                                <div className="content">
                                    <span className="date">25 Feb 2023</span>
                                    <a className="title" href="blog-details.html">Dalia enim ad minim veniam quis</a>
                                </div>
                            </li>
                            <li>
                                <a href="blog-details.html" className="image"><img src="assets/images/blog/small/2.png" alt="Blog Post" /></a>
                                <div className="content">
                                    <span className="date">24 Jun 2023</span>
                                    <a className="title" href="blog-details.html">Dalia enim ad minim veniam quis</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div> */}
                <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                    {/* <!-- Footer Widget Start --> */}
                    <div className="footer-widget-two">
                        <h5 className="footer-widget-two-title">Instagram Links</h5>
                        <ul className="instagrm">
                            <li>
                                <a href=" ">
                                    <img src="/assets/images/NewImg/footer1.jpg" alt="Insta-Image" sizes='96*96'/>
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <img src="/assets/images/NewImg/footer2.jpg" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <img src="/assets/images/NewImg/footer3.jpg" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <img src="/assets/images/NewImg/footer4.jpg" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <img src="/assets/images/NewImg/footer5.jpg" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <img src="/assets/images/NewImg/footer6.jpg" alt="Insta-Image" />
                                    <div className="add-action">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Footer Widget End --> */}
                </div>
            </div>
            <div className="row footer-two-copyright">
                <div className="col-12 position-relative">
                    <div className="footer-two-copyright-inner">
                        <p className="order-md-1 order-2">© Copyright | All Rights Reserved | Proudly Powered by <a href="https://successinnovativetechnologiespvtltd.com/" style={{color:'#54545f'}}>Success Innovative Technologies Pvt Ltd</a></p>

                        {/* <ul className="footer-two-bootm-list order-md-2 order-1">
                            <li><a href="contact.html">Terms &amp; Condition</a></li>
                            <li><a href="contact.html">Privacy Policy</a></li>
                            <li><a href="contact.html">Legal</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
