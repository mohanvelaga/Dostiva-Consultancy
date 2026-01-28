import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from "react";


const Contact = () => {
  const [success, setSuccess] = useState(false);

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
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <div>
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            {/* Required hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <input name="bot-field" />
            </p>

            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                required
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send
            </button>
              {success && (
              <p className="mt-4 text-green-600 font-medium">
                ✅ Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
