import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Blog() {
  return (
    <div>
      <Navbar />

        
    {/* <!-- Breadcrumb Section Start --> */}
 <div className="section-padding breadcrumb" style={{ backgroundImage: "url('https://png.pngtree.com/background/20250226/original/pngtree-gleaming-round-diamonds-positioned-against-a-stylish-black-background-stunning-3d-picture-image_13269374.jpg')" }} >
        <div className="container">
            <div className="row">
                <div className="col-12 align-items-center text-center">

                    <div className="breadcrumb-wrapper">
                        <h1 className="title">Blog</h1>
                        <ul className="breadcrumb-list">
                            <li><a href="/">Home</a></li>
                            <li><span>Blog</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Blog grid Section Start --> */}
    <div className="section-padding blog-grid">
        <div className="container">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n30">
  <div className="col mb-30 wow fadeIn" data-wow-duration="1.1s" data-wow-delay="0.01s">
    <div className="blog-grid-single">
      <div className="blog-grid-image">
        <a href="/BlogDetails"><img src="assets/images/NewImg/blog1.webp" alt="BlogImage" sizes='370*227'/></a>
        <div className="blog-grid-image-thumb">
          <span className="date">14</span>
          <span className="text">Sep</span>
        </div>
      </div>
      <div className="blog-grid-content">
        <span className="subtitle">Gem Testing</span>
        <h4 className="title"><a href="/BlogDetails">5 Tips for Authenticating Precious Gemstones</a></h4>
        <p>Learn the essential methods to identify genuine gemstones and avoid common pitfalls when buying or selling gems.</p>
      </div>
    </div>
  </div>

  <div className="col mb-30 wow fadeIn" data-wow-duration="1.1s" data-wow-delay="0.02s">
    <div className="blog-grid-single">
      <div className="blog-grid-image">
        <a href="/BlogDetails"><img src="assets/images/NewImg/blog2.jpg" alt="BlogImage" /></a>
        <div className="blog-grid-image-thumb">
          <span className="date">10</span>
          <span className="text">Sep</span>
        </div>
      </div>
      <div className="blog-grid-content">
        <span className="subtitle">Rudraksha</span>
        <h4 className="title"><a href="/BlogDetails">How to Identify Genuine Rudraksha Beads</a></h4>
        <p>Discover the key features that distinguish authentic Rudraksha beads from counterfeit ones for spiritual  use.</p>
      </div>
    </div>
  </div>

  <div className="col mb-30 wow fadeIn" data-wow-duration="1.1s" data-wow-delay="0.03s">
    <div className="blog-grid-single">
      <div className="blog-grid-image">
        <a href="/BlogDetails"><img src="assets/images/NewImg/bloggg3.jpg" alt="BlogImage" /></a>
        <div className="blog-grid-image-thumb">
          <span className="date">05</span>
          <span className="text">Sep</span>
        </div>
      </div>
      <div className="blog-grid-content">
        <span className="subtitle">Gemology</span>
        <h4 className="title"><a href="/BlogDetails">Understanding Gem Certifications and Reports</a></h4>
        <p>Everything You Need To Know About Gemstone Certifications And How To Read Detailed Gem Reports Confidently And Accurately.
</p>
      </div>
    </div>
  </div>

  <div className="col mb-30 wow fadeIn" data-wow-duration="1.1s" data-wow-delay="0.04s">
    <div className="blog-grid-single">
      <div className="blog-grid-image">
        <a href="/BlogDetails"><img src="/assets/images/NewImg/blog44.jpg" alt="BlogImage" /></a>
        <div className="blog-grid-image-thumb">
          <span className="date">01</span>
          <span className="text">Sep</span>
        </div>
      </div>
      <div className="blog-grid-content">
        <span className="subtitle">Jewelry</span>
        <h4 className="title"><a href="/BlogDetails">How to Choose the Right Gemstone for Your Jewelry</a></h4>
        <p>Tips for selecting gemstones based on your style, purpose, and energy to create meaningful jewelry pieces.</p>
      </div>
    </div>
  </div>

  <div className="col mb-30 wow fadeIn" data-wow-duration="1.1s" data-wow-delay="0.05s">
    <div className="blog-grid-single">
      <div className="blog-grid-image">
        <a href="/BlogDetails"><img src="/assets/images/NewImg/blog4.jpg" alt="BlogImage" /></a>
        <div className="blog-grid-image-thumb">
          <span className="date">28</span>
          <span className="text">Aug</span>
        </div>
      </div>
      <div className="blog-grid-content">
        <span className="subtitle">Astrology</span>
        <h4 className="title"><a href="/BlogDetails">Gemstones for Positive Energy and Wellbeing</a></h4>
        <p>Learn which gemstones align with your zodiac sign and how they can enhance your health, prosperity, and energy.</p>
      </div>
    </div>
  </div>

  <div className="col mb-30 wow fadeIn" data-wow-duration="1.1s" data-wow-delay="0.06s">
    <div className="blog-grid-single">
      <div className="blog-grid-image">
        <a href="/BlogDetails"><img src="/assets/images/NewImg/blog6.jpg" alt="BlogImage" /></a>
        <div className="blog-grid-image-thumb">
          <span className="date">20</span>
          <span className="text">Aug</span>
        </div>
      </div>
      <div className="blog-grid-content">
        <span className="subtitle">Tips & Guides</span>
        <h4 className="title"><a href="/BlogDetails">Caring for Your Gemstones and Rudraksha Beads</a></h4>
        <p>Practical care instructions to maintain the  energy, and longevity of your gemstones and Rudraksha beads.</p>
      </div>
    </div>
  </div>
</div>

          
        </div>
    </div>
    {/* <!-- Blog grid Section End --> */}
      <Footer />
    </div>
  )
}
