import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=300&q=80",
    price: 999,
    originalPrice: 1299,
    discount: 40,
    rating: 5,
    reviews: 2500,
    description: "Premium Wireless Noise-Cancelling Headphones with Amazing Sound Quality"
  },
  {
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80",
    price: 599,
    originalPrice: 899,
    discount: 30,
    rating: 4,
    reviews: 1800,
    description: "Latest Model Laptop with High Performance and Long Battery Life"
  },
  {
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=300&q=80",
    price: 499,
    originalPrice: 799,
    discount: 35,
    rating: 4,
    reviews: 3200,
    description: "Smart Watch with Health Monitoring and Fitness Tracking"
  },
  {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
    price: 1599,
    originalPrice: 2499,
    discount: 35,
    rating: 5,
    reviews: 1500,
    description: "Premium Wireless Earbuds with Active Noise Cancellation"
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80",
    price: 2999,
    originalPrice: 4499,
    discount: 33,
    rating: 4,
    reviews: 950,
    description: "Professional Camera with 4K Video Recording Capability"
  }
];

const Deals = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <h2 className="text-2xl font-bold mb-6">Today's Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Deals;