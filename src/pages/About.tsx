// src/pages/About.tsx

import React, { FC } from 'react';
// import { paulCampbellProfile } from '../data/aboutData'; // Import the new data file
import { Link } from 'react-router-dom'; // Assuming you have React Router for navigation
import { paulCampbellProfile } from '../utils/aboutData';

// Optional: If you want to use icons (e.g., Heroicons)
// import { BriefcaseIcon, AcademicCapIcon, BoltIcon } from '@heroicons/react/24/outline';


const About: FC = () => {
  const {
    name,
    tagline,
    profileImage,
    shortBio,
    summary,
    address,
    email,
    experience,
    education,
    skills,
    callToActionText,
    callToActionLink,
  } = paulCampbellProfile;

  return (
    <div className="pt-20 min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-light opacity-10 pointer-events-none"></div> {/* Background pattern overlay */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 animate-fade-in-up">
            <p className="text-lg md:text-xl font-semibold mb-2">{tagline}</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-4">{name}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-6">{shortBio}</p>
            <Link
              to={callToActionLink}
              className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform"
            >
              {callToActionText}
            </Link>
          </div>
          <div className="md:w-1/3 flex justify-center animate-fade-in-right">
            <img
              src={profileImage}
              alt={name}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Profile Summary Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">Who I Am</h2>
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{summary}</p>
            <div className="flex flex-wrap justify-center gap-4 text-center text-md text-gray-600 mt-6">
              <span className="flex items-center space-x-2">
                {/* <BriefcaseIcon className="h-5 w-5 text-red-500" /> */}
                <span>{experience.length}+ Years Experience</span>
              </span>
              <span className="flex items-center space-x-2">
                {/* <AcademicCapIcon className="h-5 w-5 text-red-500" /> */}
                <span>Automotive Industry Focus</span>
              </span>
              <span className="flex items-center space-x-2">
                {/* <BoltIcon className="h-5 w-5 text-red-500" /> */}
                <span>Technical & Creative</span>
              </span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                <p className="text-md text-gray-600 italic mb-2">{job.company} | {job.location} | {job.years}</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 flex-grow"> {/* flex-grow for uniform card height */}
                  {job.responsibilities.map((responsibility, rIndex) => (
                    <li key={rIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Skills Section (Side-by-Side on large screens) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Education */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.institution}</h3>
                <p className="text-md text-gray-700">{edu.degree}</p>
                <p className="text-sm text-gray-500 italic">{edu.graduated}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">Skills</h2>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500 h-full"> {/* h-full to match sibling height */}
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Info (optional, can be moved to Contact page) */}
        <section className="text-center bg-white shadow-xl rounded-lg p-8 md:p-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-700 mb-4">Ready to elevate your automotive content?</p>
            <p className="text-2xl font-bold text-red-600 mb-6">
                <a href={`mailto:${email}`} className="hover:underline">{email}</a>
            </p>
            <p className="text-md text-gray-600">{address}</p>
        </section>

      </div>
    </div>
  );
};

export default About;