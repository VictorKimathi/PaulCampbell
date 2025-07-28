import React from 'react';
const Contact = () => {
  return <div className="pt-20 min-h-screen">
      <h1 className="text-center text-3xl font-bold mt-8">Contact Page</h1>
      <p className="text-center text-gray-600 mt-4">You can reach Paul Campbell through the following channels:</p>
      <ul className="text-center text-gray-600 mt-4 list-disc list-inside">
        <li>Email: paul.campbell@example.com</li>
        <li>Phone: +1 (123) 456-7890</li>
        <li>LinkedIn: linkedin.com/in/paulcampbell</li>
        <li>Twitter: @paulcampbell</li>
      </ul>
      <p className="text-center text-gray-600 mt-4">Feel free to send a message or connect on social media for inquiries, collaborations, or just to say hello!</p>
    </div>;
};
export default Contact;