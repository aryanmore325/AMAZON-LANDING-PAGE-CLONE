import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;