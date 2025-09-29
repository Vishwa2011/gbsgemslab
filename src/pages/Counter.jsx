import React, { useEffect, useState, useRef } from "react";

// Counter Component
const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            let start = 0;
            let duration = 2000; // 2 seconds
            let increment = end / (duration / 16); // ~60fps
            let counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCount(Math.floor(start));
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, started]);

  return (
    <div className="funfact-inner" ref={ref}>
      <span className="odometer">{count}</span>
      <span className="niktext">{suffix}</span>
    </div>
  );
};

// FunFact Section
const FunFactSection = () => {
  return (
    <div
      className="section-padding funfact"
      style={{ backgroundImage: "url('/assets/images/funfact/funfact-bg.png')" }}
    >
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
  <div className="heading-one">
    <span className="heading-one-subtitle">Why Choose GBS Gems</span>
    <h2 className="heading-one-title">
      Trusted Accuracy & Reliable Testing
    </h2>
    <p>
      Our expert team ensures precise gem and rudraksha testing with certified results. We provide transparency, high success rates, and cost-effective solutions for all your authenticity needs.
    </p>
  </div>
</div>

          {/* Right Counters */}
          <div className="col-lg-6">
            <div className="about-counter">
              <div className="about-counter-2 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                <Counter end={96} />
                <span className="about-counter-title">
                  ACCURACY
                </span>
              </div>
              <div className="about-counter-2 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".3s">
                <Counter end={95} />
                <span className="about-counter-title">
                 SUCCESS-RATE
                </span>
              </div>
              <div className="about-counter-2 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".1s">
                <Counter end={92}  />
                <span className="about-counter-title">
                  BETTER DATA
                </span>
              </div>
              <div className="about-counter-2 wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".3s">
                <Counter end={98}  />
                <span className="about-counter-title">
                 COST-EFFECTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactSection;
