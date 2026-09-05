// src/sections/ProjectsSection.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Define project data based on your HTML structure
// {
//   id: 2,
//   title: 'Product Landing',
//   iconName: 'tags', // Maps to FaTags
//   link: 'https://product-landing-sal.netlify.app/',
//   imageSrc: '/pic/product.jpg',
// },
// {
//   id: 3,
//   title: 'Todo List',
//   iconName: 'tasks', // Maps to FaTasks
//   link: 'https://todo-app-sal.netlify.app',
//   imageSrc: '/pic/todopp.jpg',
// },

const projects = [

  {
    id: 1,
    title: 'MyShop E-Commerce Platform',
    iconName: 'shopping-cart',
    link: 'https://eccomerse-full-sa.vercel.app/',
    imageSrc: '/pic/eccomerce.jpg',
    description:
      'A full-stack e-commerce web application with product search, cart/wishlist management, checkout, and an admin dashboard built with MERN stack.',
  },
  {
    id: 2,
    title: 'Ethio-Post Legal Automation System',
    iconName: 'gavel',
    link: '#',
    detailPath: '/project/ethio-post',
    imageSrc: '/pic/legal.jpg',
    description:
      'A CRM and legal management system built to automate case tracking, Contract management, document versioning.',
  },
  {
    id: 3,
    title: 'ECAA Official Content Management System',
    iconName: 'newspaper',
    link: 'https://ecaa.gov.et/',
    imageSrc: '/pic/ecaaLogo.png',
    description:
      'A CMS developed for the Ethiopian Civil Aviation Authority (ECAA) to publish news, manage official documents.'
  },
  {
    id: 4,
    title: 'Kids Websites',
    iconName: 'child',
    link: 'https://kelem-kids-sa.netlify.app/',
    imageSrc: '/pic/kelempp.jpg',
    description:
      'A colorful and engaging website designed for kids and featuring fun UI  design.',
  },

  {
    id: 5,
    title: 'Ethio-Capital',
    iconName: 'handshake',
    link: 'https://ethio-capital-five.vercel.app/',
    imageSrc: '/pic/ethio-capital-pp.jpg',
    description:
      'A MERN-stack platform that connects entrepreneurs with potential investors to facilitate collaborations.',
  },

  {
    id: 6,
    title: 'Real-Time Chat App',
    iconName: 'chat',
    link: 'https://real-time-chat-app-k382.vercel.app/',
    imageSrc: '/pic/chat-pp.jpg',
    description:
      'A full-stack MERN real-time chat application with instant messaging and live updates.',
  },

  // {
  //   id: 7,
  //   title: 'Note Keeper',
  //   iconName: 'sticky-note',
  //   link: 'https://keeper1-mu.vercel.app/',
  //   imageSrc: '/pic/kepperpp.jpg',
  //   description:
  //     'A React-based note-keeping app that allows users to add, delete and organize their notes easily.',
  // },
  {
    id: 8,
    title: 'E-commerce Design to React',
    iconName: 'react',
    link: 'https://ecomercedesign.netlify.app/',
    imageSrc: '/pic/figmaToReact.webp',
    description:
      'A pixel-perfect conversion of a Figma e-commerce design into a React app.',
  },

  {
    id: 9,
    title: 'Figma to Next.js Design',
    iconName: 'nextjs',
    link: 'https://figma-to-next-gules.vercel.app/',
    imageSrc: '/pic/figmaToNext.jpg',
    description:
      'A Figma design turned into high-fidelity, production-ready Next.js website.',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="services flex flex-col items-center justify-center my-20 px-4 sm:px-8 lg:px-20"
    >
      <div className="services-heading mb-10">
        {/* my-heading: font-size: 2.5rem, text-center */}
        <h1 className="text-4xl sm:text-[2.5rem] font-bold text-center">
          My Projects
        </h1>
      </div>

      <div className=" services-content w-full max-w-7xl">
        {/* my-row: responsive layout, uses flex-wrap and gap */}
        <div className="my-row flex flex-wrap justify-center items-center my-8 gap-2 md:gap-2">
          {/* <div className=" my-8 gap-4 sm:gap-2"> */}
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              iconName={project.iconName}
              link={project.link}
              detailPath={project.detailPath}
              imageSrc={project.imageSrc}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
