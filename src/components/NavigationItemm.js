import React, { useState } from 'react';

const NavigationItem = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <button
        className="inline-flex items-center justify-center w-full h-full px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover Here
      </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-10">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Menu Item</h3>
            <ul className="list-disc pl-4">
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationItem;
