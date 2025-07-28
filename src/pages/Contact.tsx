// src/pages/Contact.tsx

import React, { FC } from 'react';

const Contact: FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-100 p-6 md:p-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mt-8 mb-4">
        Get In Touch
      </h1>
      <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        I'd love to hear from you. Feel free to reach out directly using the details below.
      </p>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Details</h2>

        <div className="space-y-4">
          <p className="text-xl text-gray-700">
            <span className="font-semibold block sm:inline">Email:</span>{' '}
            <a href="mailto:p14aulcampbell@gmail.com" className="text-blue-600 hover:underline break-words">p14aulcampbell@gmail.com</a>
          </p>
          <p className="text-xl text-gray-700">
            <span className="font-semibold block sm:inline">Address:</span>{' '}
            8641 N Kansas Ave, Kansas City, MO 64156
          </p>
          {/* You can add a phone number here if desired */}
          {/* <p className="text-xl text-gray-700">
            <span className="font-semibold block sm:inline">Phone:</span>{' '}
            <a href="tel:+1-555-123-4567" className="text-blue-600 hover:underline">+1 (555) 123-4567</a>
          </p> */}
        </div>

        <p className="text-md text-gray-600 mt-8">
          I look forward to discussing how my automotive copywriting skills can benefit your next project.
        </p>
      </div>
    </div>
  );
};

export default Contact;