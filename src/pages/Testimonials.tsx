import React from 'react';
const Testimonials = () => {
  return <div className="pt-20 min-h-screen">
      <h1 className="text-center text-3xl font-bold mt-8">Testimonials Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">"Paul's expertise and dedication were instrumental in the success of our project. He consistently exceeded our expectations."</p>
          <p className="text-right font-semibold text-gray-800 mt-4">- Client A</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">"Working with Paul was a pleasure. His insights and strategic thinking brought immense value to our team."</p>
          <p className="text-right font-semibold text-gray-800 mt-4">- Colleague B</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">"Paul's ability to simplify complex problems and deliver effective solutions is truly remarkable."</p>
          <p className="text-right font-semibold text-gray-800 mt-4">- Partner C</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">"Highly recommend Paul for any project requiring a keen eye for detail and a commitment to excellence."</p>
          <p className="text-right font-semibold text-gray-800 mt-4">- Employer D</p>
        </div>
      </div>
    </div>;
};
export default Testimonials;