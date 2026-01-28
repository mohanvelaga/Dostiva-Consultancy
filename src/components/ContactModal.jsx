import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
    >
      {/* Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 animate-fadeIn"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          <FaTimes />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="space-y-5 text-gray-700">

          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <span className="text-sm">
               +91 9182849769
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <FaEnvelope />
            </div>
            <span className="text-sm">support@dostiva.com</span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <span className="text-sm">
                Anakapalle, Andhra Pradesh, India
              </span>
            </div>

            {/* Map */}
            <div className="w-full h-48 rounded-xl overflow-hidden border">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=17.675161,82.9982837&output=embed"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
