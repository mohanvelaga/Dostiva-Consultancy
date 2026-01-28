import { FaGraduationCap, FaUserMd, FaFileAlt } from "react-icons/fa";
import Reveal from "./Reveal";

function Services() {
  const services = [
    {
      title: "MBBS Abroad",
      desc: "Guidance for pursuing medical studies abroad.",
      icon: <FaGraduationCap size={40} className="text-blue-600 mx-auto" />
    },
    {
      title: "NEET Counseling",
      desc: "Expert advice for seat allocation.",
      icon: <FaUserMd size={40} className="text-blue-600 mx-auto" />
    },
    {
      title: "Documentation Support",
      desc: "Visa and admission documentation help.",
      icon: <FaFileAlt size={40} className="text-blue-600 mx-auto" />
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
     <Reveal> <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition">
              
              {s.icon}

              <h3 className="text-xl font-semibold mt-4 mb-3">{s.title}</h3>

              <p className="text-gray-600 mb-5">{s.desc}</p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div></Reveal>
    </section>
  );
}
 export default Services;