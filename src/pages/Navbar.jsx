import React, { useEffect } from 'react';

export default function Navbar() {
     useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.sticky-header');
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Run on mount in case page is already scrolled
    handleScroll();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
       <header className="header-wrapper-two header-four sticky-header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header-top">
                        <div className="d-md-none d-flex align-items-center">
                            <a className="header-top-link d-flex align-items-center gap-1 left-link" href="tel:+4733378901"><img src="assets/images/icon/social/social-icon-1.png" alt="" /></a>
                            <a className="header-top-link d-flex align-items-center gap-1" href="mailto:hello@avers.com"><img src="assets/images/icon/social/social-icon-2.png" alt="" /></a>
                        </div>
                        <span className="d-none d-md-block">
                            <a className="header-top-link d-flex align-items-center gap-1" href="tel:+4733378901"><img src="assets/images/icon/social/social-icon-1.png" alt="" /> +880 1234 567 890</a>
                        </span>
                        <span className="d-none d-md-block">
                            <a className="header-top-link d-flex align-items-center gap-1" href="mailto:hello@avers.com"><img src="assets/images/icon/social/social-icon-2.png" alt="" /> hello@avers.com</a>
                        </span>
                        <div>
                            <ul className="social-icon">
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
                                    <a href="https://www.youtube.com/" className="youtube"><i className="fab fa-youtube"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="flex-center justify-content-between">
                        {/* <!-- Header Logo Start --> */}
                        <div className="logo">
                            <a href="index.html">
                                <img className="logo-2" src="assets/images/logo-2.png" alt="logoImage" />
                            </a>
                        </div>
                        {/* <!-- Header Logo End --> */}

                        <div className="flex-center header-right">
                            {/* <!-- Header Menu Start --> */}
                            <div className="d-none d-lg-flex header-right_menu">
                                <nav className="main-menu">
                                    <ul>
                                        {/* <li className="has-children">
                                            <a href=" ">Home</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="index.html">Home One</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home Two</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home Three</a>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li>
                                            <a href="/">HOME</a>
                                        </li>
                                        <li>
                                            <a href="/Aboutus">About</a>
                                        </li>
                                        <li className="has-children">
                                            <a href=" ">Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="team.html">Team</a></li>
                                                <li className="has-submenu"><a href="#/">Services</a>
                                                    <ul className="submenu-nav">
                                                        <li>
                                                            <a href="service.html">Service</a>
                                                        </li>
                                                        <li>
                                                            <a href="service-details.html">Service Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-submenu"><a href="#/">Projects</a>
                                                    <ul className="submenu-nav">
                                                        <li>
                                                            <a href="project.html">Projects</a>
                                                        </li>
                                                        <li>
                                                            <a href="project-details.html">Project Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href=" ">Blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-standard.html">Blog Standard</a>
                                                </li>
                                                <li>
                                                    <a href="blog-classic.html">Blog Classic</a>
                                                </li>
                                                <li>
                                                    <a href="blog.html">Blog Grid</a>
                                                </li>
                                                <li>
                                                    <a href="blog-masonry.html">Blog Masonry</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">Blog Details</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details-two.html">Blog Details Two</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!-- Header Menu End --> */}

                            {/* <!-- Header Actions Start --> */}
                            <div className="header-right_actions flex-center">
                                <div className="header-right_button header-button">
                                    <a href="contact.html" className="btn-style-one"><span>Get A Quote</span></a>
                                </div>

                                <div className="hamburger d-block d-lg-none">
                                    {/* <!-- Mobile Menu Hambarger Action Button Start --> */}
                                    <a className="header-action-btn header-action-btn-menu hamburger_button d-flex" href="#/" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-header">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                    {/* <!-- Mobile Menu Hambarger Action Button End --> */}
                                </div>

                            </div>
                            {/* <!-- Header Social Actions End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className="offcanvas offcanvas-end" id="offcanvas-header">

        <div className="offcanvas-header">
            {/* <!-- Header Logo Start --> */}
            <div className="logo">
                <a href="index.html">
                    <img src="assets/images/logo-2.png" alt="" />
                </a>
            </div>
            {/* <!-- Header Logo End --> */}
            <button type="button" className="btn-close text-reset mobilemenu-close" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fas fa-times"></i>
            </button>
        </div>
        <div className="offcanvas-body">
            {/* <!-- mobile menu navigation start --> */}
            <nav>
                <ul className="mobile-menu">
                    {/* <li className="menu-item-has-children">
                        <a href=" ">HOME</a>
                        <ul className="dropdown">
                            <li><a href="index.html">Home One </a></li>
                            <li><a href="index-2.html">Home Two</a></li>
                            <li><a href="index-3.html">Home Three</a></li>
                        </ul>
                    </li> */}
                    <li><a href="/">HOME</a></li>
                    <li><a href="/Aboutus">ABOUT</a></li>
                    <li className="menu-item-has-children">
                        <a href=" ">SERVICE</a>
                        <ul className="dropdown">
                            <li><a href="service.html">Service</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href=" ">PROJECT</a>
                        <ul className="dropdown">
                            <li><a href="project.html">Project</a></li>
                            <li><a href="project-details.html">Project Details</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children ">
                        <a href=" ">BLOG</a>
                        <ul className="dropdown">
                            <li><a href="blog-standard.html">Blog Standard</a></li>
                            <li><a href="blog-classic.html">Blog Classic</a></li>
                            <li><a href="blog.html">Blog Grid</a></li>
                            <li><a href="blog-masonry.html">Blog Masonry</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                            <li><a href="blog-details-two.html">Blog Details Two</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="team.html">TEAM</a>
                    </li>
                    <li><a href="contact.html">CONTACT US </a></li>
                </ul>
            </nav>
            {/* <!-- mobile menu navigation end --> */}
        </div>

    </div>
    </div>
  )
}
