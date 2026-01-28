import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Countries from "../components/countries";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton"; 
import ContactForm  from '../components/ContactForm';

function Home( {onContactClick}) {
  return (
    <>
      <Navbar />
      <Hero onContactClick={onContactClick} />  
      <Services />
      <Countries />
      <Testimonials />
      <CTA onContactClick={onContactClick} />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </>
  );
}


export default Home;