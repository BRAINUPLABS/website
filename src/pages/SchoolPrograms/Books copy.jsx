import { useState } from 'react';
import { Sparkles, CheckCircle2, Rocket, BrainCircuit, Bot, Cpu, School, ArrowRight } from 'lucide-react';
import Book from '../../components/Labs/Book';

const bookItems = [
  {
    idx: 1,
    img: "/images/logo/lamp_logo.png",
    color: "#FF822E",
    designedFor: "All Grades",
    conceptsCovered: "Robotics, AI, IoT, Automation, SpaceTech, NeuroTech, Real World Skills",
    infrastructureRequired: "Books for each grade, NEP 2020 Aligned Curriculum, Industry Visits, Lab Design, Coding Platforms, DIY Kits",
    sessionRequired: "1-2 sessions per week",
  },
  {
    idx: 2,
    img: "/images/logo/lamp_logo.png",
    color: "#0c709a",
    designedFor: "All Grades",
    conceptsCovered: "Robotics, AI, IoT, Automation, SpaceTech, NeuroTech, Real World Skills",
    infrastructureRequired: "Books for each grade, NEP 2020 Aligned Curriculum, Industry Visits, Lab Design, Coding Platforms, DIY Kits",
    sessionRequired: "1-2 sessions per week",
  },
  {
    idx: 3,
    img: "/images/logo/lamp_logo.png",
    color: "#10b981",
    designedFor: "All Grades",
    conceptsCovered: "Robotics, AI, IoT, Automation, SpaceTech, NeuroTech, Real World Skills",
    infrastructureRequired: "Books for each grade, NEP 2020 Aligned Curriculum, Industry Visits, Lab Design, Coding Platforms, DIY Kits",
    sessionRequired: "1-2 sessions per week",
  },
  {
    idx: 4,
    img: "/images/logo/lamp_logo.png",
    color: "#ff2e69",
    designedFor: "All Grades",
    conceptsCovered: "Robotics, AI, IoT, Automation, SpaceTech, NeuroTech, Real World Skills",
    infrastructureRequired: "Books for each grade, NEP 2020 Aligned Curriculum, Industry Visits, Lab Design, Coding Platforms, DIY Kits",
    sessionRequired: "1-4 sessions per week",
  }
];

const Books = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLabId, setSelectedLabId] = useState("");

  return (
    <div className="bg-brand-bg-dark min-h-screen font-sans pb-16">
      {/* Hero Section */}
      <section className="relative bg-brand-bg-dark text-white pt-20 px-5 pb-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 text-brand-blue-light px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 shadow-[0_0_20px_rgba(125,212,247,0.2)] mb-5 backdrop-blur-md">
            <Sparkles size={14} /> School Programs
          </div>
          <h1 className="font-['Space_Grotesk'] text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-5 leading-[1.1] tracking-tight">
            Next-Generation <span className="bg-gradient-to-r from-brand-orange to-brand-yellow-light text-transparent bg-clip-text">STEM Books</span>
          </h1>
          <p className="text-base text-gray-300 leading-relaxed max-w-[600px] mx-auto">
            Empower your school with cutting-edge infrastructure. From Robotics and AI to IoT and SpaceTech, we design comprehensive books tailored for all grade levels.
          </p>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-[10%] w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none z-0 bg-brand-blue opacity-20"></div>
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none z-0 bg-brand-orange opacity-20"></div>
      </section>

      <section className="flex w-full px-10">
        <div></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 overflow-x-auto p-10">
          {bookItems.map((book, idx) => (
            <div key={book.idx} className="flex flex-col items-center justify-between gap-2 rounded-lg" style={{ backgroundColor: book.color }}>
              <img src={book.img} alt="Book" />
              <span className="rounded-lg px-2 py-1 text-center text-sm" style={{ backgroundColor: book.color }}>{book.designedFor}</span>
              <span className="rounded-lg px-2 py-1 text-center text-sm" style={{ backgroundColor: book.color }}>{book.conceptsCovered}</span>
              <span className="rounded-lg px-2 py-1 text-center text-sm" style={{ backgroundColor: book.color }}>{book.infrastructureRequired}</span>
              <span className="rounded-lg px-2 py-1 text-center text-sm" style={{ backgroundColor: book.color }}>{book.sessionRequired}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1200px] mx-auto mt-14 px-5">
        <div className="bg-gradient-to-r from-brand-bg-dark to-brand-bg-dark2 rounded-[28px] py-10 px-7 text-center text-white relative overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(12,112,154,0.4),transparent)] opacity-50"></div>
          <div className="relative z-10">
            <h2 className="font-['Space_Grotesk'] text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">Ready to transform your school?</h2>
            <p className="text-base text-gray-300 max-w-[500px] mx-auto mb-7 leading-relaxed">Partner with Brain Up Labs to build a future-ready learning ecosystem for your students.</p>
            <button onClick={(e) => { e.preventDefault(); setSelectedLabId(""); setShowModal(true); }} className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 hover:bg-brand-orange-dark hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,130,46,0.3)]">
              Book a Free Consultation <ArrowRight size={18} />
            </button>
          </div>
          <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] bg-brand-blue rounded-full blur-[80px] opacity-30 z-0 pointer-events-none"></div>
          <div className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[200px] bg-brand-orange rounded-full blur-[80px] opacity-30 z-0 pointer-events-none"></div>
        </div>
      </section>
      
      {showModal && (
        <Book setShowModal={setShowModal} selectedLabs={selectedLabId} />
      )}
    </div>
  )
}

export default Books;