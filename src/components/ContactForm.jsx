import { motion as Motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-16 bg-blue-50">
        
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Get Free Counseling
        </h2>

        <form className="bg-white shadow-xl rounded-2xl p-8 grid md:grid-cols-2 gap-6">
          <input className="border p-3 rounded-lg" placeholder="Full Name" />
          <input className="border p-3 rounded-lg" placeholder="Email" />
          <input className="border p-3 rounded-lg" placeholder="Phone Number" />
          <input className="border p-3 rounded-lg" placeholder="Interested Country" />

          <textarea
            className="border p-3 rounded-lg md:col-span-2"
            rows="4"
            placeholder="Your Message"
          />

          <button className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Submit Enquiry
          </button>
        </form>
      </Motion.div>
    </section>
  );
}
