
import React from 'react';
import { CONTACT_INFO, BIO_TIMELINE, EXHIBITIONS } from '../constants';

const Biography: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white px-6 md:px-12 py-10 md:py-10 max-w-5xl mx-auto text-black font-sans">
      
      {/* 1. Name & Timeline Section */}
      <div className="mb-16">
        <div className="border-b border-black pb-2 mb-6">
          <h1 className="font-normal text-base">{CONTACT_INFO.name}</h1>
          {/* Added Location Subtitle */}
          {CONTACT_INFO.location && (
             <p className="text-base mt-1">{CONTACT_INFO.location}</p>
          )}
        </div>
        
        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-x-4 gap-y-4 text-base">
          {BIO_TIMELINE.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="text-black">{item.year}</div>
              <div className="text-black">{item.text}</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. Exhibitions Section */}
      <div className="mb-16">
        <div className="border-b border-black pb-2 mb-6">
          <h2 className="text-base font-normal">Exhibitions</h2>
        </div>
        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-x-4 gap-y-4 text-base">
          {EXHIBITIONS.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="text-black">{item.year}</div>
              <div className="text-black">{item.text}</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3. Contact Section */}
      <div className="mb-16">
         <div className="border-b border-black pb-2 mb-6">
          <h2 className="text-base font-normal">Contact</h2>
        </div>
        <div className="space-y-1 text-base">
           {CONTACT_INFO.phones.map((phone, idx) => (
             <div key={idx}>{phone}</div>
           ))}
           <div>
             <a 
               href={`mailto:${CONTACT_INFO.email}`} 
               className="hover:text-[#F22C2C] transition-colors"
             >
               {CONTACT_INFO.email}
             </a>
           </div>
           <div>
             <span>ins: </span>
             <a 
               href={`https://instagram.com/${CONTACT_INFO.instagram}`} 
               target="_blank" 
               rel="noreferrer"
               className="hover:text-[#F22C2C] transition-colors"
             >
               {CONTACT_INFO.instagram}
             </a>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Biography;
