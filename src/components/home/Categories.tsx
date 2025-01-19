import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Books",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80"
  }
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 -mt-32 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;