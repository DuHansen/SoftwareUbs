import React from 'react';

const Card = ({ title, subtitle, text, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-1">{subtitle}</p>
        <span className="text-gray-400 text-sm">{text}</span>
      </div>
    </div>
  );
};

export default Card;
