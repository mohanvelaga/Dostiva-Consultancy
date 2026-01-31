import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    const handleScroll = () => {
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      // If hero bottom is above navbar (i.e. user scrolled past it)
      setScrolledPastHero(heroBottom <= 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
   
   const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
   <> 
   <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolledPastHero
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left */}
          <Link to="/" className="text-xl font-bold text-blue-600">
          Dostiva Consultancy
        </Link>


        {/* Center */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
           <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Right */}
        {/* Contact button */}
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm"
          >
            Reach Us
          </button>
       
        {/* Mobile */}
       <button className="md:hidden text-2xl z-50 relative" onClick={() => setOpen(!open)}> ☰</button>
      </div>

      {/* Mobile menu */}
     {open && (
  <div className="fixed top-[72px] left-0 w-full bg-white z-40 shadow-xl border-t md:hidden">
    <div className="flex flex-col px-6 py-6 space-y-5 text-gray-800 font-medium">

      <NavLink to="/" onClick={() => setOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={() => setOpen(false)}>
        About
      </NavLink>
      <NavLink to="/contact" onClick={() => setOpen(false)}>
        Contact
      </NavLink>

    </div>
  </div>
)}
    </nav>
      {/* Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      /></>
  );
}

export default Navbar;
