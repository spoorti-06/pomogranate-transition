import React, { useRef, useEffect } from 'react';
import './Hero.css';
import { GiFruitTree } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiTick } from "react-icons/ti";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);

useEffect(() => {
  const video = videoRef.current;
  let scrollTrigger;

  const update = () => {
    if (video && video.duration && scrollTrigger) {
      const progress = scrollTrigger.progress;
      const time = progress * video.duration;
      video.currentTime = time;
    }
    requestAnimationFrame(update);
  };

  
  requestAnimationFrame(update);

  scrollTrigger = ScrollTrigger.create({
    trigger: wrapperRef.current,
    start: "top top",
    end: "+=1500",
    scrub: true,
    pin: true,
    markers: false,
  });

gsap.to(contentRef.current, {
  y: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: wrapperRef.current,
    start: "top top",
    end: "+=500",
    scrub: true,
    onLeave: () => {
      contentRef.current.style.display = "none";
    },
    onEnterBack: () => {
      contentRef.current.style.display = "";
    }
  }
});


  
  setTimeout(() => {
    const src = video.currentSrc || video.src;
    if (window.fetch) {
      fetch(src)
        .then(res => res.blob())
        .then(blob => {
          const t = video.currentTime;
          video.src = URL.createObjectURL(blob);
          video.currentTime = t + 0.01;
        });
    }
  }, 500);

 
  const once = (el, event, fn) => {
    const handler = (e) => {
      el.removeEventListener(event, handler);
      fn(e);
    };
    el.addEventListener(event, handler);
  };

  once(document.documentElement, 'touchstart', () => {
    if (video) {
      video.play();
      video.pause();
    }
  });

  return () => {
    if (scrollTrigger) scrollTrigger.kill();
  };
}, []);


  return (
    <>
      <div className="hero">
        <div className="hero-wrapper" ref={wrapperRef}>
          <nav className="navbar">
            <div className="logo">
              <GiFruitTree size={44} />
              <span className='text-[24px]'>POMEGRANATE</span>
            </div>
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Why Us?</li>
              <li>Products</li>
              <li><button>Contact</button></li>
            </ul>
          </nav>
        
  <div className="hero-content" ref={contentRef}>
            <h2 className="organic">ORGANIC</h2>
            <h1 className="headline">THE PERFECT POMEGRANATE JUICE</h1>
          </div>
          <div className="sequence-container">
            <video
              ref={videoRef}
              src="/video/pom.mp4"
              className="sequence-video"
              muted
              playsInline
              preload="auto"
            />
          </div>
          <img src="./images/leaf.png" alt=""  className='leaf'/>
                    <img src="./images/leaf1.png" alt=""  className='leaf1'/>

        </div>
      </div>

     
<div style={{ minHeight: "1200px", background: "#f5f5f5", padding: "80px 60px" }}>
  <div className="juice-section">
    <div className="juice-header flex  justify-center items-center gap-[150px]">
   <div>
       <button className="juice-tag">BEST JUICE 🍹</button>
      <h1 className="juice-title">DRINK YOUR JUICE. IT’S LIKE LIQUID SUNSHINE FOR YOUR BODY</h1>
   </div>
  <div>
    <p className="juice-desc">
  Pomegranate is a nutrient-rich fruit packed with antioxidants and vitamins.  
  Known for its juicy seeds and tangy-sweet flavor, it's a symbol of vitality and health.
</p>

      <div className="juice-rating flex items-center gap-[40px]">
      <div className=''>
          <span>⭐️⭐️⭐️⭐️⭐️</span>
        <p className='font-bold mt-[20px]'>4.5/5<br /><small>More than +12,000 customers</small></p>
      </div>
        <div className="juice-avatars flex">
          <img src="/images/user1.jpg" alt="" />
          <img src="/images/user2.jpg" alt="" />
          <img src="/images/user3.jpg" alt="" />
          <div className="more flex justify-center items-center">+12k</div>
        </div>
  </div>
      </div>
    </div>

  <div className="row1">
      <div className="juice-grid">
      <div className="juice-card">
        <img src="/images/pom1.jpg" alt="" />
        <button className="explore-btn">Explore More</button>
      </div>
      <div className="juice-info">
        <h3>It’s like liquid sunshine for your body</h3>
        <div className="h-[1px] w-[370px] bg-white mt-[20px]"></div>
        <ul className='flex flex-col gap-[30px] mt-[10px]'>
          <li className='flex  items-center'><TiTick /> Lorem ipsum dolor amsut</li>
          <li className='flex  items-center'><TiTick /> Ut wisi enim ad minim veniam</li>
          <li className='flex  items-center'><TiTick /> Quis nostrud exerci tation ullamcorper</li>
          <li className='flex  items-center'><TiTick /> Ut wisi enim ad minim veniam</li>
        </ul>
      </div>
      <div className="juice-card">
        <img src="/images/pom2.jpg" alt=""  className='h-[500px]'/>
        <button className="explore-btn">Explore More</button>
      </div>
    </div>
    <div className="juice-grid">
      <div className="juice-card1">
        <img src="/images/pom3.jpg" alt="" />
        <button className="explore-btn">Explore More</button>
      </div>
      <div className="juice-info">
        <h3>The Bold Taste of Nature</h3>
        <div className="h-[1px] w-[370px] bg-white mt-[20px]"></div>
        <ul className='flex flex-col gap-[30px] mt-[10px]'>
          <li className='flex  items-center'><TiTick /> Lorem ipsum dolor amsut</li>
          <li className='flex  items-center'><TiTick /> Ut wisi enim ad minim veniam</li>
          <li className='flex  items-center'><TiTick /> Quis nostrud exerci tation ullamcorper</li>
          <li className='flex  items-center'><TiTick /> Ut wisi enim ad minim veniam</li>
        </ul>
      </div>
    
    </div>
  </div>
  </div>
</div>

    </>
  );
};

export default Hero;
