import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
          <p className="text-center">We are a leading medical consultancy providing expert healthcare solutions.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;