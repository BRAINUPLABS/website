import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './Books.css';
import Book1 from '../../assets/Books/1.png';
import Book2 from '../../assets/Books/2.png';
import Book3 from '../../assets/Books/3.png';

// 1. Updated bookItems with exact data from the reference image, including cover details
const bookItems = [
  {
    idx: 1,
    color: "#FF822E",
    classesCovered: "Classes 1 to 12",
    skillsCovered: "Coding, AI, ML, Robotics, VR, AR and Game Development",
    infrastructureRequired: "AI and Robotics Lab with at least 15 workstations",
    sessionsRequired: "25 Lab Activities Sessions",
    coverImg: Book1
  },
  {
    idx: 2,
    color: "#10b981", // Green theme
    classesCovered: "Classes 1 to 8",
    skillsCovered: "Coding, AI, Physical Computing, Robotics, Computer Basics, Windows 10 and Microsoft Office",
    infrastructureRequired: "AI and Robotics Lab with at least 15 workstations",
    sessionsRequired: "Total 50 (25 Lab Activities, 25 Classroom)",
    coverImg: Book2
  },
  {
    idx: 4,
    color: "#8b5cf6", // Purple theme
    classesCovered: "Classes 9 to 10",
    skillsCovered: "Employability Skills, Artificial Intelligence, Machine Learning, Python Basics and Data Science",
    infrastructureRequired: "Advance Computer Lab with at least 15 workstations",
    sessionsRequired: "Total 120 (60 Lab Sessions, 60 Classroom Learning Sessions)",
    coverImg: Book3
  },
  {
    idx: 2,
    color: "#10b981", // Green theme
    classesCovered: "Classes 1 to 8",
    skillsCovered: "Coding, AI, Physical Computing, Robotics, Computer Basics, Windows 10 and Microsoft Office",
    infrastructureRequired: "AI and Robotics Lab with at least 15 workstations",
    sessionsRequired: "Total 50 (25 Lab Activities, 25 Classroom)",
    coverImg: Book2
  },
];

const Books = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLabId, setSelectedLabId] = useState("");

  // 3. Create a unified style structure for table cells (center text and rounded corners)
  const cellBase = "w-full rounded-lg px-2 py-2 text-center text-xs md:text-sm flex items-center justify-center";
  const rowHeaderBase = `bg-[var(--orange)] text-[var(--bg)] font-bold ${cellBase}`;
  const dataCellBase = `bg-gray-100 ${cellBase}`; // Cell background with a hint of gray, like in the image

  // 4. Update row heights based on the long text from the reference image
  const rowHeights = {
    h_classesCovered: "h-[50px]",
    h_skillsCovered: "h-[200px] md:h-[180px]",
    h_infrastructureRequired: "h-[100px] md:h-[80px]",
    h_sessionsRequired: "h-[100px] md:h-[80px]",
  };

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
        <div className="labs-shape-1"></div>
        <div className="labs-shape-2"></div>
      </section>

      {/* Main content grid. Using light-gray background like in the image. */}
      <div className="w-full mt-10 rounded-2xl p-5 shadow-inner">
        
        {/* Top area for books and labels */}
        <section className="flex w-full px-4 md:px-10 overflow-hidden mt-8">
          
          {/* LEFT COLUMN (LEGEND) - Row Labels */}
          {/* Aligned to start from top with no image */}
          <div className="py-5 pr-2 md:pr-5 flex flex-col items-center justify-start gap-3 rounded-lg shrink-0 w-[130px] md:w-[180px]">
            {/* An empty div to align with the top books section */}
            <div className="w-full h-[100px] md:h-[120px]"></div>
            
            <span className={`${rowHeaderBase} ${rowHeights.h_classesCovered}`}>Classes Covered</span>
            <span className={`${rowHeaderBase} ${rowHeights.h_skillsCovered}`}>Skills Covered</span>
            <span className={`${rowHeaderBase} ${rowHeights.h_infrastructureRequired}`}>Infrastructure Required</span>
            <span className={`${rowHeaderBase} ${rowHeights.h_sessionsRequired}`}>Sessions Required</span>
          </div>

          {/* RIGHT COLUMN (SCROLLING BOOKS AND DATA) */}
          <div className="flex md:grid md:grid-cols-4 gap-3 overflow-x-auto w-full pb-4 snap-x snap-mandatory pt-5">
            {bookItems.map((book) => (
              <div key={book.idx} className="shrink-0 w-[80%] min-w-[250px] md:w-auto md:min-w-0 snap-start flex flex-col items-center justify-start gap-3 rounded-lg">
                
                {/* Detailed Book Area - replicating the illustrations and background shapes */}
                <div className="w-full h-[100px] md:h-[120px] flex items-center justify-center relative mb-2">
                  {/* The actual 3D, angled book illustration */}
                    <img 
                      src={book.coverImg} 
                      alt={book.title} 
                      className="h-full object-contain drop-shadow-lg"
                    />
                  </div>
                
                {/* Data Cells matching exact reference values */}
                <span className={`${dataCellBase} ${rowHeights.h_classesCovered}`} style={{ backgroundColor: `color-mix(in srgb, ${book.color} 15%, var(--bg))` }}>
                  {book.classesCovered}
                </span>
                
                <span className={`${dataCellBase} ${rowHeights.h_skillsCovered}`} style={{ backgroundColor: `color-mix(in srgb, ${book.color} 15%, var(--bg))` }}>
                  {book.skillsCovered}
                </span>
                
                <span className={`${dataCellBase} ${rowHeights.h_infrastructureRequired}`} style={{ backgroundColor: `color-mix(in srgb, ${book.color} 15%, var(--bg))` }}>
                  {book.infrastructureRequired}
                </span>
                
                <span className={`${dataCellBase} ${rowHeights.h_sessionsRequired}`} style={{ backgroundColor: `color-mix(in srgb, ${book.color} 15%, var(--bg))` }}>
                  {book.sessionsRequired}
                </span>

              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="labs-cta-section mt-10">
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