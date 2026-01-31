import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import ContactUsForm from "./components/ContactUsForm";
import { Routes, Route } from "react-router-dom"; // ❌ removed BrowserRouter
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
   useEffect(() => {
  fetch("/.netlify/functions/hello")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
  const [modalOpen, setModalOpen] = useState(false);

  const onContactClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onContactClick={onContactClick} />

      <Routes>
        <Route path="/" element={<Home onContactClick={onContactClick} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <ContactUsForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default App;
