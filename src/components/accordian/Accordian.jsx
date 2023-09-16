import React from 'react';


function Accordion({ title, content, isOpen, onToggle }) {
  return (
    <div className="border border-gray-900 mb-2">
      <button
        className="flex items-center justify-between w-full p-3 bg-black text-left"
        onClick={onToggle}
      >
        <span className="text-lg text-white font-semibold">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform transform  text-white ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-3 bg-black">
          <p className="text-white">{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
