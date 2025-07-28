import React from 'react';
import { CalendarIcon, NewspaperIcon, PenToolIcon, AwardIcon } from 'lucide-react';
const Stats = () => {
  const stats = [{
    value: '12+',
    label: 'Years Experience',
    description: 'Both as a mechanic and automotive writer',
    icon: CalendarIcon
  }, {
    value: '250+',
    label: 'Articles Published',
    description: 'Across major automotive publications',
    icon: NewspaperIcon
  }, {
    value: '35+',
    label: 'Brands Worked With',
    description: 'From startups to industry leaders',
    icon: PenToolIcon
  }, {
    value: '8',
    label: 'Industry Awards',
    description: 'Recognizing excellence in automotive content',
    icon: AwardIcon
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
          const Icon = stat.icon;
          return <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:shadow-md">
                <div className="bg-blue-100 p-3 rounded-full text-blue-800 mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  {stat.label}
                </h4>
                <p className="text-gray-600">{stat.description}</p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default Stats;