// src/sections/HeroSection.jsx
import React from 'react';

// Utility Button Component (for reusability)
const Button = ({ children, isGhost = false }) => {
  // Styles based on .common-btn and .ghost-btn (including hover states)
  const baseClasses =
    'py-2 px-5 rounded cursor-pointer tracking-wider border-2 transition-all duration-250';

  if (isGhost) {
    // ghost-btn: background-color: #fff; color: #35A99C; border: 2px solid #35A99C;
    // ghost-btn:hover: background-color: #35A99C; color: #fff;
    return (
      <button
        className={`${baseClasses} bg-white text-primary-teal-dark border-primary-teal-dark
        hover:bg-primary-teal-dark hover:text-white hover:border-primary-teal-dark`}
      >
        {children}
      </button>
    );
  } else {
    // common-btn: background-color: #35A99C; color: #fff; border: 2px solid #35A99C;
    // common-btn:hover: background-color: #fff; color: #35A99C;
    return (
      <button
        className={`${baseClasses} bg-primary-teal-dark text-white border-primary-teal-dark
        hover:bg-white hover:text-primary-teal-dark hover:border-primary-teal-dark`}
      >
        {children}
      </button>
    );
  }
};

const HeroSection = () => {
  // Styles for responsive background (mobile only)
  // Your CSS used a radial gradient over a background image on mobile.
  const mobileHeroStyle = {
    // This inline style recreates the complex mobile background/gradient
    backgroundImage:
      "radial-gradient(circle, rgba(15,14,14,0.3), rgba(102,96,96,0.4), rgba(163,160,160,0.16)), url('./heroImg3.avif')", // Assuming you put heroImg3.avif in /public
  };

  return (
    // Section ID and general layout (h-screen, flex)
    // Desktop: justify-start. Mobile (280px-576px): justify-center.
    <section
      id="home"
      className="h-screen w-full flex items-center justify-start 
                 md:justify-start lg:justify-start 
                 min-[280px]:justify-center 
                 mt-[4.8rem] md:mt-[4.8rem] lg:mt-[4.8rem] xl:mt-[4.8rem] 
                 min-[280px]:mt-0
                 "
      // Mobile-specific background applied only when screen is very small
      style={{
        minHeight: '100vh', // Ensure h-screen works correctly
        ...(window.innerWidth <= 576 ? mobileHeroStyle : {}), // Conditional application of mobile style
      }}
    >
      <div className="intro text-center mx-20">
        {' '}
        {/* margin: 0 5rem -> mx-20 */}
        <div className="headings">
          {/* greet-heading: font-size: 1.3rem; font-weight: lighter; margin: 0; */}
          <h3 className="text-xl font-light m-0 tracking-wider">Hello, I'm</h3>
          {/* my-heading: font-size: 2.5rem; margin: 0; */}
          <h1 className="text-5xl font-bold m-0">Selahadin Nasir</h1>
          {/* sub-heading: font-size: 0.8rem; color: #ccc; font-weight: lighter; */}
          <h4 className="text-sm font-light text-gray-subhead">
            Full-Stack web developer
          </h4>
        </div>
        <div className="intro-buttons mt-8 flex items-center justify-evenly gap-5">
          {' '}
          {/* margin: 2rem 0 -> mt-8, added gap */}
          <Button>Hire Me</Button>
          <Button>
            <a href="./Selahadin_CV.pdf" download>
              Download CV
            </a>{' '}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
