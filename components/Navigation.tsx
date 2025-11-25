
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavigationProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (view: ViewState) => {
    onChangeView(view);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white h-20 md:h-24 select-none">
      {/* Desktop Navigation */}
      <div className="hidden md:grid grid-cols-4 h-full w-full">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.view)}
            className="h-full flex items-center justify-center text-xl transition-colors duration-200 text-black hover:text-[#F22C2C]"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Navigation Header */}
      <div className="md:hidden flex items-center justify-end px-6 h-full w-full">
        {/* Strictly no title on the left, only menu button on the right */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none text-black hover:text-[#F22C2C]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bottom-0 bg-white flex flex-col border-t border-gray-100 z-40 overflow-hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.view)}
              className="w-full py-8 text-center text-xl text-black hover:text-[#F22C2C]"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
