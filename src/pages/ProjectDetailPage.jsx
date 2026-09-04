// src/pages/ProjectDetailPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGavel,
  FaBriefcase,
  FaFileContract,
  FaFileAlt,
  FaUsers,
  FaBell,
  FaMoneyBillWave,
  FaClipboardCheck,
} from 'react-icons/fa';

// Custom gradient based on the card style used in the projects section
const pageGradientStyle = {
  backgroundImage: 'linear-gradient(to bottom, #74D7BB, #53C8B6, #35A99C)',
};

const technologies = [
  'Next.js',
  'TypeScript',
  'React',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'Sequelize',
  'REST API',
  'RBAC',
];

const features = [
  {
    icon: <FaBriefcase />,
    title: 'Case Management',
    description:
      'Manage legal cases, track their status, assignments, hearings, and related activities.',
  },
  {
    icon: <FaFileContract />,
    title: 'Contract Management',
    description:
      'Manage contracts and agreements throughout their lifecycle, including assignments and payment information.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Document Management',
    description:
      'Upload, organize, and manage legal documents while maintaining document version history.',
  },
  {
    icon: <FaClipboardCheck />,
    title: 'Hearings & Assignments',
    description:
      'Track hearings and assign cases or agreements to responsible officers while maintaining assignment history.',
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Payment Tracking',
    description:
      'Track contract payments, payment schedules, and related payment activities.',
  },
  {
    icon: <FaUsers />,
    title: 'Users & Permissions',
    description:
      'Control access through roles and granular permissions across different system operations.',
  },
  {
    icon: <FaBell />,
    title: 'Notifications & Approvals',
    description:
      'Support notifications and approval-based workflows for relevant operations.',
  },
  {
    icon: <FaGavel />,
    title: 'Audit & Accountability',
    description:
      'Maintain records of important user actions and system activities for better accountability.',
  },
];

const screenshots = [
  {
    images: ['/pic/ep-dashboard.png', '/pic/ep-dashboard-2.png'],
    title: 'Dashboard',
    description:
      'Overview of the legal management platform and key operational information.',
  },
  {
    images: ['/pic/ep-case-1.png'],
    title: 'Case Management',
    description:
      'Manage legal cases, track their status, assignments, and related activities.',
  },
  {
    images: ['/pic/ep-case-detail.png', '/pic/ep-case-detail-2.png'],
    title: 'Case Details',
    description:
      'View detailed case information together with related legal activities, documents, assignments, and hearings.',
  },
  {
    images: ['/pic/ep-contract.png'],
    title: 'Contract Management',
    description:
      'Manage contracts and agreements, including their status, assignments, and payment-related information.',
  },
  {
    images: ['/pic/ep-doc.png'],
    title: 'Document Management',
    description:
      'Organize legal documents and maintain document versions and related records.',
  },
  {
    images: ['/pic/ep-role.png'],
    title: 'Users & Permissions',
    description:
      'Manage users, roles, and permissions to control access to system features and operations.',
  },
];

const ProjectDetailPage = () => {
  return (
    <section
      id="project-detail"
      className="flex flex-col items-center w-full text-white py-10 sm:py-20 px-4 sm:px-8 lg:px-20"
    >
      {/* Back link */}
      <div className="w-full max-w-5xl mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white text-lg hover:underline"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>
      </div>

      {/* Main card */}
      <div
        className="w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden"
        style={pageGradientStyle}
      >
        {/* Hero */}
        <div className="flex flex-col items-center text-center p-6 sm:p-10">
          <div className="h-20 w-20 rounded-full bg-accent-dark flex items-center justify-center mb-5 shadow-md">
            <FaGavel className="text-white text-3xl" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-accent-dark mb-3">
            EthioPost Legal & Contract Management System
          </h1>

          <p className="text-base sm:text-lg text-white/90 max-w-3xl mt-3 leading-relaxed">
            A centralized platform for managing legal cases, contracts,
            hearings, documents, assignments, payments, approvals, and related
            legal workflows.
          </p>

          {/* Technology preview */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="bg-white/20 text-white px-3 py-1.5 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="px-5 sm:px-10">
          <img
            src="/pic/ep-dashboard.png"
            alt="EthioPost Legal Management System Dashboard"
            className="w-full max-h-[600px] object-cover object-top rounded-xl border-2 border-white/30 shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          <div className="space-y-14">
            {/* Overview */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent-dark mb-4">
                Overview
              </h2>

              <div className="space-y-4 text-white/90 leading-relaxed text-base sm:text-lg">
                <p>
                  This system was developed for EthioPost to centralize and
                  digitize legal and contract-related operations. It brings
                  cases, contracts, hearings, documents, assignments, payments,
                  approvals, notifications, and user access control into a
                  single platform.
                </p>

                <p>
                  The goal is to replace scattered and manual processes with
                  structured digital workflows, making legal information easier
                  to manage, track, and access while improving accountability
                  across the organization.
                </p>
              </div>
            </div>

            {/* My Contribution */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent-dark mb-4">
                My Contribution
              </h2>

              <p className="text-white/90 leading-relaxed text-base sm:text-lg">
                I contributed to the full-stack development of the system,
                working across the frontend, backend, database, and business
                workflows. My work included implementing features, integrating
                REST APIs, designing and connecting database workflows,
                implementing permission-based authorization, and translating
                real-world legal processes into usable software workflows.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent-dark mb-6">
                Key Features
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white/15 rounded-xl p-5 border border-white/20 hover:bg-white/20 transition"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-accent-dark text-xl">
                        {feature.icon}
                      </div>

                      <h3 className="font-semibold text-lg">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent-dark mb-3">
                Selected Screens
              </h2>

              <p className="text-white/85 mb-8 leading-relaxed">
                Selected views from the system demonstrating its main
                workflows and management features.
              </p>

              <div className="space-y-8">
                {screenshots.map((screenshot) => (
                  <div
                    key={screenshot.title}
                    className="bg-white/10 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 overflow-hidden"
                  >
                    {/* Card header: title + description */}
                    <div className="bg-accent-dark/80 px-6 py-5">
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        {screenshot.title}
                      </h3>

                      <p className="text-white/85 mt-1 leading-relaxed text-sm sm:text-base">
                        {screenshot.description}
                      </p>
                    </div>

                    {/* Images inside the same card */}
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-4">
                        {screenshot.images.map((img) => (
                          <div
                            key={img}
                            className="bg-black/20 rounded-xl p-2 border border-white/10"
                          >
                            <img
                              src={img}
                              alt={`${screenshot.title} - ${img}`}
                              className="w-full rounded-lg object-cover object-top"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent-dark mb-6">
                Technical Highlights
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  'Full-stack business application',
                  'REST API architecture',
                  'PostgreSQL relational database',
                  'Sequelize ORM',
                  'Role & permission-based authorization',
                  'Document version management',
                  'Workflow & approval logic',
                  'Notification workflows',
                  'Relational data modeling',
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent-dark mb-5">
                Technology Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/20 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Availability */}
            <div className="border-t border-white/20 pt-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent-dark mb-3">
                Project Availability
              </h2>

              <p className="text-white/90 leading-relaxed">
                This is an internal business application and is not publicly
                accessible as a live demo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom back link */}
      <div className="w-full max-w-5xl mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white text-lg hover:underline"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetailPage;