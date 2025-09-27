import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Services() {
  return (
    <div>
      <Navbar />
      
        {/* <!-- Breadcrumb Section Start --> */}
    <div className="section-padding breadcrumb" style={{ backgroundImage: "url('assets/images/breadcrumb/breadcrumb-2.png')" }}>
        <div className="container">
            <div className="row">
                <div className="col-12 align-items-center text-center">
                    <div className="breadcrumb-wrapper">
                        <h1 className="title">Service</h1>
                        <ul className="breadcrumb-list">
                            <li><a href="/">Home</a></li>
                            <li><span>Service</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb Section End --> */}


        {/* <!-- Service Section Start --> */}
    <div className="section-padding">
        <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n30">
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".1s">
                    <div className="service-single">
                        <div className="service-single-image">
                            <div className="service-single-image-thumb">
                                <img src="assets/images/service/service4.png" alt="ServiceImage" />
                            </div>
                            <div className="service-single-image-content">
                                <div className="icon">
                                    <img src="assets/images/icon/service/icon-2.png" alt="Icon" />
                                </div>
                                <h4 className="title">Business <br/> Automation</h4>
                            </div>
                        </div>
                        <div className="service-single-white">
                            <a href="service-details.html" className="service-single-white-content">
                                <div className="icon gradient-1">
                                    <img src="assets/images/icon/service/icon-1-white.png" alt="Icon" />
                                </div>
                                <span className="title">Business <br/> Automation</span>
                                <p>adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore hastedek hojaan mafko redao</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".2s">
                    <div className="service-single">
                        <div className="service-single-image">
                            <div className="service-single-image-thumb">
                                <img src="assets/images/service/service1.png" alt="ServiceImage" />
                            </div>
                            <div className="service-single-image-content">
                                <div className="icon">
                                    <img src="assets/images/icon/service/icon-2.png" alt="Icon" />
                                </div>
                                <h4 className="title">Market <br/> Research</h4>
                            </div>
                        </div>
                        <div className="service-single-white">
                            <a href="service-details.html" className="service-single-white-content">
                                <div className="icon gradient-1">
                                    <img src="assets/images/icon/service/icon-1-white.png" alt="Icon" />
                                </div>
                                <span className="title">Market <br/> Research</span>
                                <p>adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore hastedek hojaan mafko redao</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".3s">
                    <div className="service-single">
                        <div className="service-single-image">
                            <div className="service-single-image-thumb">
                                <img src="assets/images/service/service2.png" alt="ServiceImage" />
                            </div>
                            <div className="service-single-image-content">
                                <div className="icon">
                                    <img src="assets/images/icon/service/icon-3.png" alt="Icon" />
                                </div>
                                <h4 className="title">Critical <br/> Analysis</h4>
                            </div>
                        </div>
                        <div className="service-single-white">
                            <a href="service-details.html" className="service-single-white-content">
                                <div className="icon gradient-1">
                                    <img src="assets/images/icon/service/icon-1-white.png" alt="Icon" />
                                </div>
                                <span className="title">Critical <br/> Analysis</span>
                                <p>adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore hastedek hojaan mafko redao</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".4s">
                    <div className="service-single">
                        <div className="service-single-image">
                            <div className="service-single-image-thumb">
                                <img src="assets/images/service/service3.png" alt="ServiceImage" />
                            </div>
                            <div className="service-single-image-content">
                                <div className="icon">
                                    <img src="assets/images/icon/service/icon-4.png" alt="Icon"  />
                                </div>
                                <h4 className="title">Risk <br/> Management</h4>
                            </div>
                        </div>
                        <div className="service-single-white">
                            <a href="service-details.html" className="service-single-white-content">
                                <div className="icon gradient-1">
                                    <img src="assets/images/icon/service/icon-1-white.png" alt="Icon" />
                                </div>
                                <span className="title">Risk <br/> Management</span>
                                <p>adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore hastedek hojaan mafko redao</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".5s">
                    <div className="service-single">
                        <div className="service-single-image">
                            <div className="service-single-image-thumb">
                                <img src="assets/images/service/service4.png" alt="ServiceImage" />
                            </div>
                            <div className="service-single-image-content">
                                <div className="icon">
                                    <img src="assets/images/icon/service/icon-5.png" alt="Icon" />
                                </div>
                                <h4 className="title">Annual <br/> Reporting</h4>
                            </div>
                        </div>
                        <div className="service-single-white">
                            <a href="service-details.html" className="service-single-white-content">
                                <div className="icon gradient-1">
                                    <img src="assets/images/icon/service/icon-1-white.png" alt="Icon" />
                                </div>
                                <span className="title">Annual <br/> Reporting</span>
                                <p>adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore hastedek hojaan mafko redao</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col mb-30 wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".6s">
                    <div className="service-single">
                        <div className="service-single-image">
                            <div className="service-single-image-thumb">
                                <img src="assets/images/service/service5.png" alt="ServiceImage" />
                            </div>
                            <div className="service-single-image-content">
                                <div className="icon">
                                    <img src="assets/images/icon/service/icon-6.png" alt="Icon" />
                                </div>
                                <h4 className="title">Human <br/> Resourses</h4>
                            </div>
                        </div>
                        <div className="service-single-white">
                            <a href="service-details.html" className="service-single-white-content">
                                <div className="icon gradient-1">
                                    <img src="assets/images/icon/service/icon-1-white.png" alt="Icon" />
                                </div>
                                <span className="title">Human <br/> Resourses</span>
                                <p>adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore hastedek hojaan mafko redao</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service Section End --> */}
  
        {/* <!-- System Section Start --> */}
    <div className="system">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="system-bg" style={{ backgroundImage: "url('assets/images/system/system-bg1.png')" }} >

                        <div className="system-single wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".1s">

                            <div className="system-icon">
                                <img src="assets/images/icon/system/icon-1.png" alt="Icon" />
                            </div>

                            <div className="system-content">
                                <h5 className="title">System Automation</h5>
                                <p>Pore et dolore magna aliqua. Uetom rud exercitation laboris nisi uot aliqex emya tersa never cared forthis.</p>
                            </div>

                        </div>

                        <div className="system-single wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".2s">

                            <div className="system-icon">
                                <img src="assets/images/icon/system/icon-2.png" alt="Icon" />
                            </div>

                            <div className="system-content">
                                <h5 className="title">System Automation</h5>
                                <p>Pore et dolore magna aliqua. Uetom rud exercitation laboris nisi uot aliqex emya tersa never cared forthis.</p>
                            </div>

                        </div>

                        <div className="system-single wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".3s">

                            <div className="system-icon">
                                <img src="assets/images/icon/system/icon-3.png" alt="Icon" />
                            </div>

                            <div className="system-content">
                                <h5 className="title">System Automation</h5>
                                <p>Pore et dolore magna aliqua. Uetom rud exercitation laboris nisi uot aliqex emya tersa never cared forthis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="system-bg2" data-bg-image="assets/images/system/system-bg2.png">
                        <div className="heading-one wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".1s">
                            <span className="heading-one-subtitle">We are Avers</span>
                            <h2 className="heading-one-title">We Are Leading The Industry</h2>
                            <p>Kimod tempoer incididunt onomes sundo ritoma amar Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor inci didunt ut labore et dolore happy birthday toyou.</p>
                            <a href="about.html" className="btn-style-one"><span>Learn more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- System Section End --> */}

        {/* <!-- Strategy Section Start --> */}
    <div className="section-padding strategy-two">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">

                    <div className="heading-one wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".1s">
                        <span className="heading-one-subtitle">Design matters</span>
                        <h2 className="heading-one-title">A Great Create Develop</h2>
                        <p>Kimod tempoer incididunt onomes sundo ritoma amar porem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="strategy-two-inner">

                        <div className="strategy-two-single wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".1s">
                            <div className="strategy-two-icon">
                                <img src="assets/images/icon/icon-6.png" alt="Icon" />
                            </div>
                            <div className="strategy-two-content">
                                <h4 className="title">Design and Develop</h4>
                                <p>Kimod tempoer incididunt ono mes sundo ritom nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div className="strategy-two-single wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".2s">
                            <div className="strategy-two-icon">
                                <img src="assets/images/icon/icon-7.png" alt="Icon" />
                            </div>
                            <div className="strategy-two-content">
                                <h4 className="title">Design and Develop</h4>
                                <p>Kimod tempoer incididunt ono mes sundo ritom nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div className="strategy-two-single wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".3s">
                            <div className="strategy-two-icon">
                                <img src="assets/images/icon/icon-8.png" alt="Icon" />
                            </div>
                            <div className="strategy-two-content">
                                <h4 className="title">Design and Develop</h4>
                                <p>Kimod tempoer incididunt ono mes sundo ritom nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Strategy Section End --> */}

      <Footer />
    </div>
  )
}
