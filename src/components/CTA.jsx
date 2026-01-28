import Reveal from "./Reveal";
import WaveBackground from "./WaveBackground";

export default function CTA({ onContactClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white">
       <Reveal>
      {/* Waves always behind */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="rotate-180">
          <WaveBackground back="#1e3a8a" front="#1d4ed8" />
        </div>
      </div>

      {/* Real content always above */}
      <div className="relative z-10 py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Book Your Free Counseling Session!
        </h2>

        <p className="mb-6 text-blue-100">
          Take the first step towards your MBBS dream
        </p>

        <button  onClick={onContactClick} className="bg-yellow-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Get Started
        </button>
        <div className="  bottom-0 left-0 w-full h-16">
          <WaveBackground back="#1e3a8a" front="#1d4ed8" />
        </div>
      </div></Reveal>
    </section>
  );
}
