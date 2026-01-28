import React from "react";
import WaveBackground from "./WaveBackground";
import Reveal from "./Reveal";

import ru from "../assets/flags/russia.svg";
import ge from "../assets/flags/georgia.svg";
import kz from "../assets/flags/kazakhstan.svg";
import uz from "../assets/flags/uzbekistan.svg";

function Countries() {
  const countries = [
    { name: "Russia", flag: ru },
    { name: "Georgia", flag: ge },
    { name: "Kazakhstan", flag: kz },
    { name: "Uzbekistan", flag: uz },
    // { name: "Philippines", flag: ph }, // only if you add this file
  ];

  return (
    <section
      id="countries"
      className="relative bg-white text-center overflow-hidden"
    >
      {/* Background wave */}
      <div className="absolute inset-x-0 bottom-0 z-0 pointer-events-none">
        <WaveBackground back="#f0f9ff" front="#e0f2fe" />
      </div>

      {/* Content */}
      <Reveal>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-6">Study MBBS In</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 bg-white/80 backdrop-blur px-6 py-2 rounded-full shadow-md border border-blue-100 hover:shadow-lg hover:bg-white transition cursor-pointer"
              >
                <img
                  src={c.flag}
                  alt={c.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="font-medium text-gray-700">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Countries;
