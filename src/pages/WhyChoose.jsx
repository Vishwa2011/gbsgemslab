import React from 'react'

export default function WhyChoose() {
  return (
    <div>
          <div style={{paddingBottom:'100px'}}>
           <div className=" service-two tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="tab-one">
            <div className="service-two-shape scene">
          <div className="shape shape-1" data-depth="0.08">
            <img src="assets/images/shape/shape-20.png" alt="Shape" />
          </div>
          {/* <div className="shape shape-2">
            <img src="assets/images/shape/shape-22.png" alt="Shape" />
          </div> */}
          <div className="shape shape-3" data-depth="0.08">
            <img src="assets/images/shape/shape-23.png" alt="<Shape" />
          </div>
          <div className="shape shape-4">
            <img src="assets/images/service/service-two-bg.png" alt="Shape" />
          </div>
        </div>
                <div className="container">
                    <div className="row">
                           <div className="col-lg-6 align-self-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">

                            {/* <!-- About Tab Content Start --> */}
                            <div className="heading-one">
                                <span className="heading-one-subtitle">Trusted & Reliable</span>
                                <h2 className="heading-one-title" style={{marginBottom:'20px'}}>Why Choose Us</h2>
                                <p>We know choosing the perfect gemstone is an extremely important decision. We aim to make our customer’s search as easy as possible and to educate the consumer about the differences between a natural and certified gemstone and an artificially enhanced or synthetic gem. Simply put, quality, rarity, and value are the cornerstones of our gemstone business.</p>
                               
                            </div>
                            {/* <!-- About Tab Content End --> */}
                        </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
  <div className="row g-3">
    <div className="col-6">
      <img src="/assets/images/NewImg/choose1.jpg" alt="About Gemstone 1" className="img-fluid rounded shadow" />
    </div>
    <div className="col-6">
      <img src="/assets/images/NewImg/choose2.webp" alt="About Gemstone 2" className="img-fluid rounded shadow" />
    </div>
    {/* <div className="col-12">
      <img src="assets/images/about/about-3.png" alt="About Gemstone 3" className="img-fluid rounded shadow" />
    </div> */}
  </div>
</div>

                     
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}
