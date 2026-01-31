import React from "react";
import { FaGraduationCap, FaUserMd, FaFileAlt } from "react-icons/fa";
import Reveal from "./Reveal";

function Services() {
  const services = [
    {
      title: "MBBS Abroad",
      desc: "Guidance for pursuing medical studies abroad.",
      more: "We help with university selection, admission process, fee structure, and post-arrival support.",
      icon: <FaGraduationCap size={40} className="text-blue-600 mx-auto" />
    },
    {
      title: "NEET Counseling",
      desc: "Expert advice for seat allocation.",
      more: "Personalized counseling based on rank, category, budget, and career goals.",
      icon: <FaUserMd size={40} className="text-blue-600 mx-auto" />
    },
    {
      title: "Documentation Support",
      desc: "Visa and admission documentation help.",
      more: "We assist with SOP, passport, visa filing, medical certificates, and embassy requirements.",
      icon: <FaFileAlt size={40} className="text-blue-600 mx-auto" />
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
     <Reveal> <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

         <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flip-card h-80">
              <div className="flip-inner relative w-full h-full">

                {/* Front */}
                <div className="flip-front absolute inset-0 bg-white rounded-2xl shadow p-8 text-center flex flex-col justify-center">
                  {s.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                  <span className="mt-4 text-blue-600 text-sm">Hover to know more</span>
                </div>

                {/* Back */}
                <div className="flip-back absolute inset-0 bg-blue-600 text-white rounded-2xl shadow p-8 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm mb-6">{s.more}</p>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium">
                    Enquire Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div></Reveal>
    </section>
  );
}
 export default Services;