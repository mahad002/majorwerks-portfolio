import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Domains from '../components/Domains';
import About from '../components/About';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Partners from '../components/Partners';
import Contact from '../components/Contact';
import BookCall from '../components/BookCall';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Domains />
      <About />
      <Team />
      <BookCall />
      {/* <Blog /> */}
      <Partners />
      <Contact />
    </>
  );
};

export default HomePage;