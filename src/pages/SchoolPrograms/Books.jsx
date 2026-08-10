import {useState} from 'react';
import { Sparkles, CheckCircle2, Rocket, BrainCircuit, Bot, Cpu, School, ArrowRight } from 'lucide-react';
import Book from '../../components/Labs/Book';
import './Books.css';

const bookItems = [
  {
    img: "/logo.png",
    color: "#FF822E",
    designedFor: "All Grades",
    conceptsCovered: "Robotics, AI, IoT, Automation, SpaceTech, NeuroTech, Real World Skills",
    infrastructureRequired: "Books for each grade, NEP 2020 Aligned Curriculum, Industry Visits, Lab Design, Coding Platforms, DIY Kits",
    sessionRequired: "1-2 sessions per week",
  },
  {
    img: "/logo.png",
    color: "#0c709a",
    designedFor: "All Grades",
    conceptsCovered: "Robotics, AI, IoT, Automation, SpaceTech, NeuroTech, Real World Skills",
    infrastructureRequired: "Books for each grade, NEP 2020 Aligned Curriculum, Industry Visits, Lab Design, Coding Platforms, DIY Kits",
    sessionRequired: "1-2 sessions per week",
  },
  {
    img: "/logo.png",
    color: "#10b981",
    designedFor: "All Grades",
    conceptsCovered: "Robotics, AI, IoT, Automation, SpaceTech, NeuroTech, Real World Skills",
    infrastructureRequired: "Books for each grade, NEP 2020 Aligned Curriculum, Industry Visits, Lab Design, Coding Platforms, DIY Kits",
    sessionRequired: "1-2 sessions per week",
  },
  {
    img: "/logo.png",
    color: "#FF822E",
    designedFor: "All Grades",
    conceptsCovered: "Robotics, AI, IoT, Automation, SpaceTech, NeuroTech, Real World Skills",
    infrastructureRequired: "Books for each grade, NEP 2020 Aligned Curriculum, Industry Visits, Lab Design, Coding Platforms, DIY Kits",
    sessionRequired: "1-2 sessions per week",
  }
];

const Books = () => {
  return (
    <div className="labs-page">
      {/* Hero Section */}
      <section className="labs-hero">
        <div className="labs-hero-bg"></div>
        <div className="labs-hero-content">
          <div className="labs-badge">
            <Sparkles size={14} /> School Programs
          </div>
          <h1 className="labs-hero-title">
            Next-Generation <span className="labs-hero-highlight">STEM Books</span>
          </h1>
          <p className="labs-hero-desc">
            Empower your school with cutting-edge infrastructure. From Robotics and AI to IoT and SpaceTech, we design comprehensive books tailored for all grade levels.
          </p>
        </div>

        {/* Abstract Background Shapes */}
        <div className="labs-shape-1"></div>
        <div className="labs-shape-2"></div>
      </section>

      <section className="flex w-full px-10">
        <div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 scroll-x-auto">
          {bookItems.map((book, index) => (
            <div key={index} className={`flex flex-col items-center justify-between bg-${book.color}/50 p-6 rounded-lg`}>
             <img src={book.img} alt={book.title} />
             <span>{book.title}</span>
             <span>{book.designedFor}</span>
             <span>{book.conceptsCovered}</span>
             <span>{book.infrastructureRequired}</span>
             <span>{book.sessionRequired}</span>
            </div>
          ))}
        </div>
      </section>      

      {/* Bottom CTA */}
      <section className="labs-cta-section">
        <div className="labs-cta-box">
          <div className="labs-cta-bg"></div>
          <div className="labs-cta-content">
            <h2 className="labs-cta-title">Ready to transform your school?</h2>
            <p className="labs-cta-desc">Partner with Brain Up Labs to build a future-ready learning ecosystem for your students.</p>
            <button onClick={(e) => { e.preventDefault(); setSelectedLabId(""); setShowModal(true); }} className="labs-cta-btn">
              Book a Free Consultation <ArrowRight size={18} />
            </button>
          </div>
          <div className="labs-cta-shape-1"></div>
          <div className="labs-cta-shape-2"></div>
        </div>
      </section>
    </div>
  )
}

export default Books;