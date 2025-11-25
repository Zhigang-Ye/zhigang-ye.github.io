import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white pt-2 pb-20 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-7xl mx-auto">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group cursor-pointer flex flex-col">
            <div className="relative w-full aspect-[4/3] overflow-hidden mb-4 bg-gray-50">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
            
            <div className="space-y-2 text-black">
              <div className="flex justify-between items-start text-xl">
                <h2>{project.title}</h2>
                <span className="text-lg">{project.year}</span>
              </div>
              
              <div className="flex justify-between items-end pt-1">
                 <div className="max-w-md">
                   <p className="text-base mb-1">{project.category}</p>
                   <p className="text-base leading-relaxed">{project.description}</p>
                 </div>
                 <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-[#ff0000] transition-opacity duration-200 ml-4 mb-1" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;