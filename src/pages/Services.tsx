import React from 'react';
const Services = () => {
  return <div className="pt-20 min-h-screen">
      <h1 className="text-center text-3xl font-bold mt-8">Services Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Consulting</h2>
          <p className="text-gray-600 mt-2">Paul Campbell offers expert consulting services to help businesses optimize their strategies and achieve their goals.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Project Management</h2>
          <p className="text-gray-600 mt-2">With strong leadership and organizational skills, Paul excels in managing complex projects from inception to completion.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Training & Development</h2>
          <p className="text-gray-600 mt-2">Paul provides customized training programs and workshops to enhance team skills and foster professional growth.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Strategic Planning</h2>
          <p className="text-gray-600 mt-2">Assisting organizations in developing robust strategic plans that drive innovation and sustainable growth.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Data Analysis</h2>
          <p className="text-gray-600 mt-2">Leveraging data to provide actionable insights and support informed decision-making for businesses.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Content Creation</h2>
          <p className="text-gray-600 mt-2">Crafting compelling and engaging content for various platforms, tailored to specific audience needs.</p>
        </div>
      </div>
    </div>;
};
export default Services;