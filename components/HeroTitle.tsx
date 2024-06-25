"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroTitle = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Initial fade-in animation
    gsap.from([h1Ref.current, h2Ref.current], {
      opacity: 1,
      duration: 1,
      stagger: 0.3
    });

    // Function to determine animation properties based on screen size
    const getAnimationSettings = () => {
      const isSmallDevice = window.innerWidth < 768;
      return {
        scrollThreshold: isSmallDevice ? 0 : 50, // Adjust the threshold for small devices
        h1Move: isSmallDevice ? -30 : -150, // Adjust the movement distance for h1
        h2Move: isSmallDevice ? 90 : 300,  // Adjust the movement distance for h2
      };
    };

    // Scroll animation
    const handleScroll = () => {
      const { scrollThreshold, h1Move, h2Move } = getAnimationSettings();
      const scrollPosition = window.scrollY;

      if (scrollPosition > scrollThreshold) {
        gsap.to(h1Ref.current, { x: h1Move, duration: 1 }); // Move h1
        gsap.to(h2Ref.current, { x: h2Move, duration: 1 }); // Move h2
      } else {
        gsap.to(h1Ref.current, { x: 0, duration: 1 }); // Reset position of h1
        gsap.to(h2Ref.current, { x: 0, duration: 1 }); // Reset position of h2
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='custom flex flex-col w-full justify-center items-center'>
      <div className='flex flex-col flex-1 gap-3 align-center text-center'>
        <h1 ref={h1Ref} className='text-[5vw] font-[300] transform origin-left opacity-0'>
          Step to the path of Excellence
        </h1>
        <h2 ref={h2Ref} className='text-[5vw] font-[300] transform origin-left opacity-0'>
          With my Portfolio
        </h2>
      </div>
    </section>
  );
};

export default HeroTitle;
