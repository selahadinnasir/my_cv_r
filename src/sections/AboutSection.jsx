// src/sections/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  // Custom gradient based on original CSS: linear-gradient(45deg, #363D73, #2794B3)
  const aboutGradientStyle = {
    backgroundImage: 'linear-gradient(45deg, #363D73, #2794B3)',
  };

  return (
    <section
      id="about"
      // Default (Mobile): flex-col. Tablet/Desktop (lg:flex-row).
      // Uses the custom gradient and ensures full width.
      className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full text-white py-10 sm:py-20"
      style={aboutGradientStyle}
    >
      <div
        // about-text: Responsive padding (1rem mobile, 2rem tablet, 5rem desktop)
        className="about-text w-[90%] md:w-full lg:max-w-[450px] p-4 sm:p-8 lg:py-20 lg:pl-20 lg:pr-4"
      >
        {/* my-heading: font-size: 2.5rem */}
        <h1 className="text-4xl sm:text-[2.5rem] font-bold mb-4">About Me</h1>

        {/* lead-para */}
        <p className="text-base leading-relaxed">
          Full-Stack Web Developer specializing in the MERN stack, Next.js,
          Tailwind CSS, and Laravel. I excel at converting Figma designs into
          pixel-perfect, responsive React and Next.js applications, ensuring
          both aesthetics and performance. I also build clean, modern UIs using
          Webflow, blending creativity with technical precision. Passionate
          about developing scalable, user-focused web applications and
          continuously improving through hands-on learning and real-world
          projects.
        </p>
      </div>

      {/* The original HTML had a commented-out image. We keep the responsive 
                structure here, assuming the image is placed in /public/pic. 
            */}
      <div className="about-image p-4 sm:p-8 lg:p-20 lg:pl-4 lg:block">
        <img
          src="/pic/heroImg2.jpg"
          alt="Selahadin Nasir profile image"
          className=" h-[500px] w-[500px] object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
