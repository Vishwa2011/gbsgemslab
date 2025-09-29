import React, { useEffect, useState, useRef } from "react";

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

export default Counter;
