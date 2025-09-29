import React from 'react'

export default function Verify() {
  return (
    <div>
       <div className="section-padding progress-section ">
        <div className="container position-relative">
            <div className="row">
                <div className="col-lg-9 order-2 order-lg-1 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                    <div className="progress-section-content">
                        {/* <!-- Heading Start --> */}
                        <div className="heading-one">
                            <span className="heading-one-subtitle ">Verify Certificate</span>
                            <p style={{marginTop:'10px'}}>Confirm the authenticity of issued certificates</p>
                              <form action="#" className="footer-widget-form" style={{marginTop:'25px'}}>
                                    <input type="text" placeholder="Enter Stock Code" />
                                    <button><img src="assets/images/icon/icon-6.png" alt="IconImage" /></button>
                                </form>
                             <div class="header-right_button header-button">
                                    <a href="#" class="btn-style-one m-2"><span>Submit</span></a>
                                    <a href="/" class="btn-style-one m-2"><span>Back To Home</span></a>
                                </div>
                        </div>
                        {/* <!-- Heading End --> */}
                      
                    </div>
                </div>
                <div className="col-lg-3 order-1 order-lg-2 custom-margin">
                    <div className="progress-image">
                        <img src="/assets/images/NewImg/verify.jpg" style={{borderRadius:'10px'}} alt="progress" sizes='646*633' />
                    </div>
                </div>
            </div>
        </div>

        <div className="shape shape-1">
            <img src="assets/images/shape/shape-2.png" alt="Shape"/>
        </div>
        <div className="shape shape-2">
            <img src="assets/images/shape/shape-7.png" alt="Shape"/>
        </div>
        <div className="shape shape-3">
            <img src="assets/images/shape/shape-8.png" alt="Shape"/>
        </div>
        
    </div>
    </div>
  )
}
