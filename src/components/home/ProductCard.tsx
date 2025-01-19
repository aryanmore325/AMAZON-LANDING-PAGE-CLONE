import React from 'react';
import { Star, Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  description: string;
}

const ProductCard = ({ 
  image, 
  price, 
  originalPrice, 
  discount, 
  rating, 
  reviews, 
  description 
}: ProductCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300">
      <div className="relative group">
        <img
          src={image}
          alt="Product"
          className="w-full h-48 object-cover rounded-md"
        />
        <button 
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Add to wishlist"
        >
          <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      <div className="mt-4">
        <div className="inline-block bg-red-600 text-white px-2 py-1 text-sm rounded-md">
          Up to {discount}% off
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-lg font-bold">Rs{price.toFixed(2)}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">Rs{originalPrice.toFixed(2)}</span>
        </div>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
          <span className="ml-1 text-sm text-gray-600">({reviews})</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;