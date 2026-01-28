import React from 'react'
import { FaStar } from "react-icons/fa";
import Reveal from "./Reveal";

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-blue-50">
       <Reveal>
      <div className="max-w-7xl mx-auto px-6" >  
        <h2 className="text-3xl font-bold text-center mb-10">Success Stories</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold text-lg">Student Name</h4>
              <p className="text-sm text-gray-500 mb-2">MBBS Abroad</p>
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 text-sm">
                MedConsult guided me through every step. I am now studying at a top university.
              </p>
              <button className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded">
                See More
              </button>
            </div>
          ))}
        </div>
      </div></Reveal>
    </section>
  );
}

export default Testimonials;