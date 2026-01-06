import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ScrollSequence.css'
gsap.registerPlugin(ScrollTrigger);

const totalFrames = 150;

const ScrollSequence = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const frameImages = [];
    for (let i = 1; i <= totalFrames; i++) {
      const padded = String(i).padStart(3, '0'); // unscreen-001.png
      frameImages.push(`/frames/unscreen-${padded}.png`);
    }

    const obj = { frame: 0 };
    gsap.to(obj, {
      frame: totalFrames - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top top",
        end: "+=1500",
        scrub: true,
      },
      onUpdate: () => {
        if (imgRef.current && frameImages[obj.frame]) {
          imgRef.current.src = frameImages[obj.frame];
        }
      }
    });
  }, []);

  return (
    <div className="sequence-container">
      <img
        ref={imgRef}
        src="/frames/unscreen-001.png"
        alt="Pomegranate Animation"
        className="sequence-image"
          style={{
    width: '65vw',
    maxWidth: 'none',
    height: 'auto',
    display: 'block'
  }}
      />
    </div>
  );
};

export default ScrollSequence;
