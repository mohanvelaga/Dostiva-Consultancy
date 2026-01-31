import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">

        <div>
          <h3 className="text-white font-bold mb-2">MedConsult</h3>
          <p>Leading medical admissions consultancy.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <p>MBBS Abroad</p>
          <p>NEET Counseling</p>
          <p>Documentation</p>
        </div>

        <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>

               <p className="flex items-center gap-2">
                <FaPhoneAlt /> +91 9052926868
              </p>

               <p className="flex items-center gap-2">
                <FaEnvelope /> info@dostiva.com
              </p>

              <p className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Anakapalli,Andhra Pradesh, India, 531002
              </p>
            </div>
      </div>
    </footer>
  );
}


export default Footer;