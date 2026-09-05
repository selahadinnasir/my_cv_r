// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserTie,
  FaComments,
  FaHandshake,
  FaChild,
  FaTags,
  FaTasks,
  FaStickyNote,
  FaReact,
  FaShoppingCart,
  FaGavel,
  FaNewspaper,
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

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
  'shopping-cart': FaShoppingCart,
  gavel: FaGavel,
  newspaper: FaNewspaper,
};

const ProjectCard = ({
  title,
  iconName,
  link,
  imageSrc,
  description,
  detailPath,
}) => {
  // Get the correct Icon component based on the prop
  const IconComponent = IconMap[iconName] || FaStickyNote;

  // Custom gradient style for the card: background-image: linear-gradient(#74D7BB, #53C8B6, #35A99C);
  const cardGradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, #74D7BB, #53C8B6, #35A99C)',
  };

  return (
    <div className="w-full md:w-[45%] lg:w-[32%] text-center p-2">
      <div
        className="min-h-[400px] flex flex-col items-center justify-between rounded-xl p-5 mx-2 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
        style={cardGradientStyle}
      >
        <div className="flex flex-col items-center flex-1 justify-center w-full">
          <div className="h-20 w-20 rounded-full bg-accent-dark flex items-center justify-center mb-3 shadow-md">
            <IconComponent className="text-white text-3xl" />
          </div>

          <h3 className="text-lg font-medium text-accent-dark mb-3">{title}</h3>

          {/* Use an internal Link when a detail page exists, otherwise an external link */}
          {detailPath ? (
            <Link to={detailPath} className="block mb-3">
              <img
                src={imageSrc}
                alt={`${title} screenshot`}
                className="w-[160px] h-[160px] object-cover rounded-3xl border-2 border-white/30"
              />
            </Link>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-3"
            >
              <img
                src={imageSrc}
                alt={`${title} screenshot`}
                className="w-[160px] h-[160px] object-cover rounded-3xl border-2 border-white/30"
              />
            </a>
          )}
        </div>

        <p className="text-xs text-white/90 leading-relaxed line-clamp-3 w-full">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
