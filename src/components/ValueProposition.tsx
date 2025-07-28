import React from 'react';
import { WrenchIcon, PenIcon, GaugeIcon } from 'lucide-react';
const ValueProposition = () => {
  return <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">
            My Unique Approach
          </h2>
          <p className="text-xl text-blue-100">
            I don't just write about cars—I understand them from the ground up
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg">
            <div className="bg-white/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <WrenchIcon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Technical Expertise</h3>
            <p className="text-blue-100">
              With years of hands-on mechanical experience, I bring authentic
              technical knowledge to every piece I write.
            </p>
          </div>
          <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg">
            <div className="bg-white/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <PenIcon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Compelling Storytelling</h3>
            <p className="text-blue-100">
              I transform complex automotive concepts into engaging narratives
              that resonate with enthusiasts and newcomers alike.
            </p>
          </div>
          <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-lg">
            <div className="bg-white/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <GaugeIcon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Industry Insight</h3>
            <p className="text-blue-100">
              My connections and experience provide a unique perspective on
              where the automotive world has been and where it's heading.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ValueProposition;