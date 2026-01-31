import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ContactUsForm({ isOpen, onClose }) {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});
 
  if (!isOpen) return null;

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      console.error(data);
      alert("❌ Failed to send message");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Network error. Please try again.");
  }
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
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
/>

<input
  name="email"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
/>

<input
  name="phone"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
/>

<textarea
  name="message"
  value={formData.message}
  onChange={(e) =>
    setFormData({ ...formData, message: e.target.value })
  }
/>


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Enquiry
          </button>

        </form>
      </div>
    </div>
  );
}
