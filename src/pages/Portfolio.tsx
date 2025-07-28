import React from 'react';
const Portfolio = () => {
  return <div className="pt-20 min-h-screen">
      <h1 className="text-center text-3xl font-bold mt-8">Portfolio Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Project Alpha</h2>
          <p className="text-gray-600 mt-2">A brief description of Project Alpha, highlighting its key features and Paul Campbell's role in its development.</p>
          <a href="#" className="text-blue-600 hover:underline mt-4 block">View Project</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Project Beta</h2>
          <p className="text-gray-600 mt-2">Details about Project Beta, focusing on the challenges faced and the innovative solutions implemented by Paul Campbell.</p>
          <a href="#" className="text-blue-600 hover:underline mt-4 block">View Project</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Project Gamma</h2>
          <p className="text-gray-600 mt-2">An overview of Project Gamma, showcasing the successful outcomes and the impact of Paul Campbell's contributions.</p>
          <a href="#" className="text-blue-600 hover:underline mt-4 block">View Project</a>
        </div>
      </div>
    </div>;
};
export default Portfolio;