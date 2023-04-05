import React, { useState } from 'react';

// TODO: correct items type
type DropdownProps = {
  items: string[];
};

const Dropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //   TODO: correct the item type
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-blue text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        <div className="text-sm font-medium bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] text-transparent bg-clip-text">
          {selectedItem}
        </div>
        <svg
          className="-mr-1 ml-2 h-5 w-5 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c0fecf" />
              <stop offset="100%" stopColor="#1ed5a9" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            d="M10 14l-5-5h10l-5 5z"
            fill="url(#gradient)"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 w-full rounded-md bg-blue text-white z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {/* TODO: correct the rendering of the data */}
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
