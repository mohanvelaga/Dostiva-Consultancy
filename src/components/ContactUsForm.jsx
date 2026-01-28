import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ContactUsForm({ isOpen, onClose }) {
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setSuccess(true);
        form.reset();
      })
      .catch(() => alert("Something went wrong"));
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
    >
      {/* Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-fadeIn"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          Get Free Counseling
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Netlify required */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <input name="bot-field" />
          </p>

          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Enquiry
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
