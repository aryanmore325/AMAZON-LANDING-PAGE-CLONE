import React from 'react';

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard = ({ title, image }: CategoryCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <a 
        href="#" 
        className="text-[#007185] hover:text-[#c7511f] hover:underline transition-colors"
      >
        Shop now
      </a>
    </div>
  );
};

export default CategoryCard;