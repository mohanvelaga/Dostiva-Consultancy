import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Doctor from "../assets/docters.png";
import { motion as Motion } from "framer-motion";
import WaveBackground from "./WaveBackground";

export default function Hero({ onContactClick }) {
  return (
   <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#eef5ff] to-[#e6f0ff]">
    <WaveBackground back="#e0f2fe" front="#bae6fd" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-blue-200 to-blue-300 opacity-40 rounded-t-full blur-2xl"></div>
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Your Gateway to MBBS Abroad
          </h1>
          <p className="text-gray-600 mb-6">
            The trusted medical admissions consultancy for your MBBS dream
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow"  onClick={onContactClick}>
            Get Free Consultation 
          </button>
          {/* Icons row */}
          <div className="flex gap-6 mt-6 text-sm text-gray-600 items-center">
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              info@medconsult.com
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" />
              +91 98765 43210
            </span>
          </div>
        </div>
        {/* Right image */}
        <div>
          <img src={Doctor} className="w-full max-w-md mx-auto drop-shadow-2xl" />
        </div>
      </Motion.div>
    </section>
  );
}
