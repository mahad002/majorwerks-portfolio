import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to MajorWerks
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Your trusted partner in innovation
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;