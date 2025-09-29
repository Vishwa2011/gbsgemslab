import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Privacypolicy = () => {
  return (
    <>
      <div>
        <Navbar />
           <div className="section-padding breadcrumb "  style={{ backgroundImage: "url('https://png.pngtree.com/background/20250226/original/pngtree-gleaming-round-diamonds-positioned-against-a-stylish-black-background-stunning-3d-picture-image_13269374.jpg')" }}>
        <div className="container">
            <div className="row">
                <div className="col-12 align-items-center text-center">
                    {/* <!-- Breadcrumb Wrapper Start --> */}
                    <div className="breadcrumb-wrapper">
                        <h1 className="title">Privacy Policy </h1>
                        <ul className="breadcrumb-list">
                            <li><a href="index.html">Home</a></li>
                            <li><span>Privacy Policy </span></li>
                        </ul>
                    </div>
                    {/* <!-- Breadcrumb Wrapper End --> */}
                </div>
            </div>
        </div>
    </div>

<section className="customer-service-area ptb-100 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s" style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
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
    <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>Privacy Policy</h2>

    {/* Box 1: Intro */}
    <div className="policy-box" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <p style={{ lineHeight: '1.8', color: '#555' }}>
        At <strong>GBS Gems</strong>, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
      </p>
    </div>

    {/* Box 2: Information We Collect */}
    <div className="policy-box" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <h4 style={{ marginBottom: '15px', color: '#333' }}>Information We Collect</h4>
      <ul style={{ paddingLeft: '20px', color: '#555' }}>
        <li style={{listStyle:'circle'}}><strong>Personal Information:</strong> Name, email address, phone number, shipping/billing address when you place an order or contact us.</li>
        <li style={{listStyle:'circle'}}><strong>Non-Personal Information:</strong> Browser type, IP address, pages visited, time spent on the site, and other analytics information.</li>
      </ul>
    </div>

    {/* Box 3: How We Use Your Information */}
    <div className="policy-box" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <h4 style={{ marginBottom: '15px', color: '#333' }}>How We Use Your Information</h4>
      <ul style={{ paddingLeft: '20px', color: '#555' }}>
        <li style={{listStyle:'circle'}}>Process and deliver your orders.</li>
        <li style={{listStyle:'circle'}}>Respond to inquiries and provide customer support.</li>
        <li style={{listStyle:'circle'}}>Improve our website, services, and user experience.</li>
        <li style={{listStyle:'circle'}}>Send updates, promotions, or marketing emails (only if you opt-in).</li>
      </ul>
    </div>

    {/* Box 4: Cookies */}
    <div className="policy-box" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <h4 style={{ marginBottom: '15px', color: '#333' }}>Cookies</h4>
      <p style={{ color: '#555' }}>Our website may use cookies and similar tracking technologies to enhance your browsing experience.</p>
      <ul style={{ paddingLeft: '20px', color: '#555' }}>
        <li style={{listStyle:'circle'}}>Analyze website traffic and usage.</li>
        <li style={{listStyle:'circle'}}>Remember your preferences and login information.</li>
      </ul>
      <p style={{ color: '#555' }}>You can disable cookies in your browser settings, but some features of the website may not work properly.</p>
    </div>

    {/* Box 5: Sharing Your Information */}
    <div className="policy-box" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <h4 style={{ marginBottom: '15px', color: '#333' }}>Sharing Your Information</h4>
      <p style={{ color: '#555' }}>We do not sell or rent your personal information to third parties. We may share your information with:</p>
      <ul style={{ paddingLeft: '20px', color: '#555' }}>
        <li style={{listStyle:'circle'}}>Service providers who assist us in operating the website, fulfilling orders, or sending communications.</li>
        <li style={{listStyle:'circle'}}>Legal authorities, if required by law or to protect our rights.</li>
      </ul>
    </div>

    {/* Box 6: Security */}
    <div className="policy-box" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <h4 style={{ marginBottom: '15px', color: '#333' }}>Security</h4>
      <p style={{ color: '#555' }}>We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
    </div>

    {/* Box 7: Contact Us */}
    <div className="policy-box" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <h4 style={{ marginBottom: '15px', color: '#333' }}>Contact Us</h4>
      <p style={{ color: '#555' }}>If you have any questions about this Privacy Policy, please contact us at:</p>
      <ul style={{ paddingLeft: '20px', color: '#555' }}>
        <li style={{listStyle:'circle'}}>Email: <a href="mailto:info@gbsgemslab.com" style={{ color: '#1a73e8' }}>info@gbsgemslab.com</a></li>
      </ul>
    </div>

  </div>
</section>

        <Footer />
      </div>
    </>
  )
}

export default Privacypolicy
