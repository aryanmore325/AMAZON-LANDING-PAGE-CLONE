import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import Deals from '../components/home/Deals';

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Deals />
    </main>
  );
};

export default Home;