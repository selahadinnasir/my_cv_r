// src/components/ProjectCard.jsx
import React from 'react';
// You need to install react-icons: npm install react-icons
import {
  FaUserTie,
  FaComments,
  FaHandshake,
  // FaMoneyBillTrendUp,
  FaChild,
  FaTags,
  FaTasks,
  FaStickyNote,
  FaReact,
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

// Map icon names (from your HTML comments) to the actual React Icon components
const IconMap = {
  child: FaChild,
  tags: FaTags,
  tasks: FaTasks,
  'sticky-note': FaStickyNote,
  investor: FaHandshake,
  business: FaUserTie,
  handshake: FaHandshake,
  chat: FaComments,
  react: FaReact,
  nextjs: SiNextdotjs,
};

const ProjectCard = ({ title, iconName, link, imageSrc, description }) => {
  // Get the correct Icon component based on the prop
  const IconComponent = IconMap[iconName] || FaStickyNote;

  // Custom gradient style for the card: background-image: linear-gradient(#74D7BB, #53C8B6, #35A99C);
  const cardGradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, #74D7BB, #53C8B6, #35A99C)',
  };

  return (
    // my-col: text-align: center; width: 30% (desktop) / 45% (tablet) / 100% (mobile)
    <div className="my-col w-full md:w-[45%] lg:w-[32%]  text-center p-2">
      <div
        className="my-card h-[350px] flex flex-col items-center justify-center rounded-xl p-4 mx-2"
        style={cardGradientStyle}
      >
        {/* Icon Container (.icon) */}
        <div className="icon h-24 w-24 rounded-full bg-accent-dark flex items-center justify-center mb-2">
          {/* icon svg: font-size: 30px; color: #fff; */}
          <IconComponent className="text-white text-3xl" />
        </div>

        {/* Title (.greet-heading, .blue-text) */}
        <h3 className="text-xl font-light text-accent-dark my-2">{title}</h3>

        {/* Image Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block my-2"
        >
          {/* Card Image */}
          <img
            src={imageSrc}
            alt={`${title} profile`}
            className="w-[170px] h-[170px] object-fill rounded-[40px]"
          />
        </a>

        {/* Small Para (commented out in original HTML) */}
        <p className="text-sm text-white mt-1">
          {/* if text needed */}
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
