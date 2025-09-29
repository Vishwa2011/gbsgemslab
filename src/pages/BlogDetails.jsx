import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function BlogDetails() {
  return (
    <div>
      <Navbar />

            {/* <!-- Breadcrumb Section Start --> */}
    <div className="section-padding breadcrumb" style={{ backgroundImage: "url('assets/images/breadcrumb/breadcrumb-1.png')" }} >
        <div className="container">
            <div className="row">
                <div className="col-12 align-items-center text-center">

                    <div className="breadcrumb-wrapper">
                        <h1 className="title">Blog Details</h1>
                        <ul className="breadcrumb-list">
                            <li><a href="/">Home</a></li>
                            <li><span>Blog Details</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb Section End --> */}

        {/* <!-- Blog Standard Section Start --> */}
  <div className="section-padding standard-blog">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">

                <div className="standard-blog-single blog-details">

                    <a href=" " className="standard-blog-image">
                        <img src="assets/images/blog/large-1.png" alt="BlogImage" />
                    </a>

                    <div className="standard-blog-content">
                        <ul className="standard-blog-meta">
                            <li><a href=" ">Gemology</a></li>
                            <li>
                                <p>September 29, 2025</p>
                            </li>
                            <li>
                                <p>Jenny Jess</p>
                            </li>
                        </ul>
                        <h3 className="standard-blog-title">
                            <a href=" ">How to Identify Genuine Gemstones and Rudraksha Beads</a>
                        </h3>
                        <p className="text">Understanding gemstone authenticity and the spiritual significance of Rudraksha beads is crucial. In this article, we guide you through simple ways to identify real gems and Rudraksha beads for both collection and spiritual use.</p>
                        <p className="text">We discuss common myths, explain certification details, and share practical tips to ensure you invest in authentic and high-quality pieces. Whether you're a collector, jeweler, or enthusiast, this guide will provide valuable insights.</p>
                        <blockquote className="blockquote">
                            <img src="assets/images/blog/details/quote.png" alt="QuoteImage" />
                            <span>"Authentic gemstones and genuine Rudraksha beads carry energy and value that counterfeit products cannot replicate."</span>
                        </blockquote>
                        <p className="text">We also highlight the importance of trusted certification labs and what to look for in reports to validate the quality and authenticity of each piece.</p>
                        <p className="text">Regular care and proper handling of your gemstones and Rudraksha beads help maintain their vibrancy and spiritual potency over time. Learn simple yet effective methods for long-lasting results.</p>
                        <p className="text">By following these steps, you can confidently select gemstones and Rudraksha beads that enhance both your collection and your personal energy.</p>
                    </div>

                </div>

                <div className="blog-share-tag wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="tags">
                        <span className="label">Tags</span>
                        <ul>
                            <li><a href=" ">Gemstones,</a></li>
                            <li><a href=" ">Rudraksha,</a></li>
                            <li><a href=" ">Spirituality,</a></li>
                            <li><a href=" ">Certification</a></li>
                        </ul>
                    </div>
                    <div className="share">
                        <span className="label">Share</span>
                        <ul className="widget-social">
                            <li><a className="facebook" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="twitter" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                            <li><a className="linkedin" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.instagram.com/" className="share-link"><i className="fas fa-share-alt"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="post-nav-link wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="post-prev">
                        <div className="content">
                            <a href=" " className="prev-arrow"> <img src="assets/images/blog/details/left-arrow.png" alt="" /> Prev Post</a>
                            <h4 className="title"><a href=" ">Top 10 Most Valuable Gemstones to Invest In</a></h4>
                        </div>
                    </div>
                    <div className="post-next">
                        <div className="content">
                            <a href=" " className="next-arrow">Next Post<img src="assets/images/blog/details/right-arrow.png" alt="" /></a>
                            <h4 className="title"><a href=" ">How to Choose the Right Rudraksha Bead for You</a></h4>
                        </div>
                    </div>
                </div>

                <div className="entry-author wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="thumb">
                        <img src="assets/images/blog/details/auth-1.png" alt="Author-image" />
                    </div>
                    <div className="content">
                        <div className="head">
                            <h3 className="title">Jenny Jess</h3>
                            <ul className="widget-social">
                                <li><a className="facebook" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="twitter" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                        <p className="text">Jenny Jess is a gemologist and spiritual advisor dedicated to helping enthusiasts understand gemstone authenticity and the significance of Rudraksha beads.</p>
                        <div className="content-bottom">
                            <a href=" " className="read-more">View All Posts</a>
                        </div>
                    </div>
                </div>

                <div className="comment wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                    <h2 className="title">04 Comments</h2>
                    <ul className="comment-list">
                        <li className="comment-inner">
                            <div className="comment-1">
                                <div className="comment-thumb">
                                    <img src="assets/images/blog/details/auth-2.png" alt="Author-Image" />
                                </div>
                                <div className="comment-content">
                                    <div className="comment-head">
                                        <div className="comment-title-date">
                                            <h5 className="comment-title">Sarah Pulmar</h5>
                                            <div className="meta">
                                                <div className="date">September 28, 2025 10:40 AM</div>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <a href=" " className="replay">Reply</a>
                                        </div>
                                    </div>
                                    <p className="text">Great article! I learned a lot about identifying genuine gemstones and choosing the right Rudraksha bead.</p>
                                </div>
                            </div>
                        </li>
                        <li className="comment-inner">
                            <div className="comment-1">
                                <div className="comment-thumb">
                                    <img src="assets/images/blog/details/auth-4.png" alt="Author-Image" />
                                </div>
                                <div className="comment-content">
                                    <div className="comment-head">
                                        <div className="comment-title-date">
                                            <h5 className="comment-title">Mike Hernandez</h5>
                                            <div className="meta">
                                                <div className="date">September 28, 2025 11:15 AM</div>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <a href=" " className="replay">Reply</a>
                                        </div>
                                    </div>
                                    <p className="text">Very informative! The tips on gemstone certification were particularly helpful.</p>
                                </div>
                            </div>
                        </li>
                        <li className="comment-inner">
                            <div className="comment-1">
                                <div className="comment-thumb">
                                    <img src="assets/images/blog/details/auth-5.png" alt="Author-Image" />
                                </div>
                                <div className="comment-content">
                                    <div className="comment-head">
                                        <div className="comment-title-date">
                                            <h5 className="comment-title">Sanjida Ema</h5>
                                            <div className="meta">
                                                <div className="date">September 28, 2025 12:00 PM</div>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <a href=" " className="replay">Reply</a>
                                        </div>
                                    </div>
                                    <p className="text">Thanks for the detailed guide. It clarified many doubts I had about Rudraksha beads.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="comment-form wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                    <h2 className="title">Add A Comment</h2>
                    <p className="comment-form-text">Share your thoughts or questions about gemstones and Rudraksha beads.</p>
                    <form className="comment-form-inner" action="#">
                        <div className="row">
                            <div className="col-md-6 col-12 mb-4">
                                <input placeholder="Your name*" name="name" />
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <input type="email" placeholder="Your email*" name="email" />
                            </div>
                            <div className="col-12 mb-4">
                                <textarea name="message" placeholder="Write your comment here"></textarea>
                            </div>
                            <div className="col-12 text-left">
                                <button className="btn btn-style-one"> <span>Submit Now</span> </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className="col-lg-4">
                <div className="sidebar-wrap ms-auto">

                    <div className="sidebar wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                        <form className="sidebar-search" action="#">
                            <input className="sidebar-input" placeholder="Search Articles" type="text" />
                            <button className="sidebar-search-btn btn-style-one gradient-1">
                                <span><i className="fas fa-search"></i></span>
                            </button>
                        </form>
                    </div>

                    <div className="sidebar sidebar-banner wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s" data-bg-image="assets/images/blog/sidebar-banner.png">
                        <span className="sidebar-banner-subtitle">GBS Gems</span>
                        <h4 className="sidebar-banner-title">Leading Gem & Rudraksha Testing</h4>
                        <p>Get accurate and certified gemstone and Rudraksha testing services for personal or business use.</p>
                        <a href=" " className="btn-style-two">Get Started</a>
                    </div>

                    <div className="sidebar wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                        <h4 className="sidebar-title">Recent Posts <i className="fas fa-angle-double-right"></i></h4>
                        <ul className="sidebar-blog">
                            <li>
                                <a href=" " className="image"><img src="assets/images/blog/small/1.png" alt="Blog Post" /></a>
                                <div className="content">
                                    <span className="date">25 Feb 2025</span>
                                    <a className="title" href=" ">Top Gemstones to Invest In This Year</a>
                                </div>
                            </li>
                            <li>
                                <a href=" " className="image"><img src="assets/images/blog/small/2.png" alt="Blog Post" /></a>
                                <div className="content">
                                    <span className="date">24 Jun 2025</span>
                                    <a className="title" href=" ">How to Care for Rudraksha Beads</a>
                                </div>
                            </li>
                            <li>
                                <a href=" " className="image"><img src="assets/images/blog/small/3.png" alt="Blog Post" /></a>
                                <div className="content">
                                    <span className="date">26 Apr 2025</span>
                                    <a className="title" href=" ">Gemstone Certification Explained</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                        <h4 className="sidebar-title">Categories <i className="fas fa-angle-double-right"></i></h4>
                        <ul className="sidebar-category">
                            <li><a href=" "><i className="fas fa-caret-right"></i>Gemology</a></li>
                            <li><a href=" "><i className="fas fa-caret-right"></i>Rudraksha</a></li>
                            <li><a href=" "><i className="fas fa-caret-right"></i>Jewelry</a></li>
                            <li><a href=" "><i className="fas fa-caret-right"></i>Spirituality</a></li>
                            <li><a href=" "><i className="fas fa-caret-right"></i>Certification & Testing</a></li>
                        </ul>
                    </div>

                    <div className="sidebar wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                        <h4 className="sidebar-title">Tags <i className="fas fa-angle-double-right"></i></h4>
                        <div className="sidebar-tags">
                            <a href=" " className="active">Gemstones</a>
                            <a href=" ">Rudraksha</a>
                            <a href=" ">Spirituality</a>
                            <a href=" ">Jewelry</a>
                            <a href=" ">Certification</a>
                            <a href=" ">Investing</a>
                            <a href=" ">Astrology</a>
                        </div>
                    </div>

                    <div className="sidebar wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                        <h4 className="sidebar-title">Gallery <i className="fas fa-angle-double-right"></i></h4>
                        <ul className="sidebar-instagram">
                            <li>
                                <a href="#">
                                    <img src="assets/images/blog/gallery/1.png" alt="Gallery-Image" />
                                    <div className="add-action"><i className="fab fa-instagram"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="assets/images/blog/gallery/2.png" alt="Gallery-Image" />
                                    <div className="add-action"><i className="fab fa-instagram"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="assets/images/blog/gallery/3.png" alt="Gallery-Image" />
                                    <div className="add-action"><i className="fab fa-instagram"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="assets/images/blog/gallery/4.png" alt="Gallery-Image" />
                                    <div className="add-action"><i className="fab fa-instagram"></i></div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                        <h4 className="sidebar-title">Featured Post <i className="fas fa-angle-double-right"></i></h4>
                        <div className="sidebar-feature">
                            <div className="sidebar-feature-image">
                                <a href=" ">
                                    <img src="assets/images/blog/feature-sidebar.png" alt="Featured Post" />
                                </a>
                            </div>
                            <div className="sidebar-feature-content">
                                <p className="date">25 Feb 2025</p>
                                <a className="title" href=" ">Top 5 Gemstones for Beginners</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

    {/* <!-- Blog Standard Section End --> */}

      <Footer />
    </div>
  )
}
