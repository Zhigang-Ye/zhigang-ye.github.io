import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 md:px-8 pb-20 pt-4">
      {/* 
        Grid Layout: 
        - 1 column on mobile 
        - 2 columns on tablet
        - 3 columns on desktop
        Gap is small to keep it tight like the reference.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="relative group cursor-pointer w-full aspect-square bg-gray-50 overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
              loading="lazy"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
              <h2 className="text-black text-base mb-2">{project.title}</h2>
              <span className="text-black text-sm">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;