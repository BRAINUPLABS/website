import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
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
    <div className="bg-[#0D1117] min-h-screen font-sans pb-16">
      {/* Hero Section */}
      <section className="relative bg-[#0D1117] text-white pt-20 px-5 pb-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c709a]/20 to-[#FF822E]/20 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 text-[#7dd4f7] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 shadow-[0_0_20px_rgba(125,212,247,0.2)] mb-5 backdrop-blur-md">
            <Sparkles size={14} /> School Programs
          </div>
          <h1 className="font-['Space_Grotesk'] text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-5 leading-[1.1] tracking-tight">
            Next-Generation <span className="bg-gradient-to-r from-[#FF822E] to-[#fcc55a] text-transparent bg-clip-text">STEM Books</span>
          </h1>
          <p className="text-base text-gray-300 leading-relaxed max-w-[600px] mx-auto">
            Empower your school with cutting-edge infrastructure. From Robotics and AI to IoT and SpaceTech, we design comprehensive books tailored for all grade levels.
          </p>
        </div>
        <div className="absolute top-0 left-[10%] w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none z-0 bg-[#0c709a] opacity-20"></div>
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none z-0 bg-[#FF822E] opacity-20"></div>
      </section>

      {/* Main content grid. Using light-gray background like in the image. */}
      <div className="w-full mt-[-60px] relative z-20 rounded-2xl p-5 shadow-inner">
        
        {/* Top area for books and labels */}
        <section className="flex w-full px-4 md:px-10 overflow-hidden mt-8 max-w-[1200px] mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-5 border border-white/10">
          
          {/* LEFT COLUMN (LEGEND) - Row Labels */}
          {/* Aligned to start from top with no image */}
          <div className="py-5 pr-2 md:pr-5 flex flex-col items-center justify-start gap-3 rounded-lg shrink-0 w-[130px] md:w-[180px]">
            {/* An empty div to align with the top books section */}
            <div className="w-full h-[100px] md:h-[120px]"></div>
            
            <span className={`${rowHeaderBase} ${rowHeights.h_classesCovered} !bg-[#FF822E] !text-[#0D1117]`}>Classes Covered</span>
            <span className={`${rowHeaderBase} ${rowHeights.h_skillsCovered} !bg-[#FF822E] !text-[#0D1117]`}>Skills Covered</span>
            <span className={`${rowHeaderBase} ${rowHeights.h_infrastructureRequired} !bg-[#FF822E] !text-[#0D1117]`}>Infrastructure Required</span>
            <span className={`${rowHeaderBase} ${rowHeights.h_sessionsRequired} !bg-[#FF822E] !text-[#0D1117]`}>Sessions Required</span>
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
                      alt="Book Cover" 
                      className="h-full object-contain drop-shadow-lg"
                    />
                  </div>
                
                {/* Data Cells matching exact reference values */}
                <span className={`${dataCellBase} ${rowHeights.h_classesCovered} text-[#0D1117]`} style={{ backgroundColor: `color-mix(in srgb, ${book.color} 15%, var(--bg))` }}>
                  {book.classesCovered}
                </span>
                
                <span className={`${dataCellBase} ${rowHeights.h_skillsCovered} text-[#0D1117]`} style={{ backgroundColor: `color-mix(in srgb, ${book.color} 15%, var(--bg))` }}>
                  {book.skillsCovered}
                </span>
                
                <span className={`${dataCellBase} ${rowHeights.h_infrastructureRequired} text-[#0D1117]`} style={{ backgroundColor: `color-mix(in srgb, ${book.color} 15%, var(--bg))` }}>
                  {book.infrastructureRequired}
                </span>
                
                <span className={`${dataCellBase} ${rowHeights.h_sessionsRequired} text-[#0D1117]`} style={{ backgroundColor: `color-mix(in srgb, ${book.color} 15%, var(--bg))` }}>
                  {book.sessionsRequired}
                </span>

              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="max-w-[1200px] mx-auto mt-14 px-5">
        <div className="bg-gradient-to-r from-[#0D1117] to-[#161B27] rounded-[28px] py-10 px-7 text-center text-white relative overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(12,112,154,0.4),transparent)] opacity-50"></div>
          <div className="relative z-10">
            <h2 className="font-['Space_Grotesk'] text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">Ready to transform your school?</h2>
            <p className="text-base text-gray-300 max-w-[500px] mx-auto mb-7 leading-relaxed">Partner with Brain Up Labs to build a future-ready learning ecosystem for your students.</p>
            <button onClick={(e) => { e.preventDefault(); setSelectedLabId(""); setShowModal(true); }} className="inline-flex items-center gap-2 bg-[#FF822E] text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 hover:bg-[#d96318] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,130,46,0.3)]">
              Book a Free Consultation <ArrowRight size={18} />
            </button>
          </div>
          <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] bg-[#0c709a] rounded-full blur-[80px] opacity-30 z-0 pointer-events-none"></div>
          <div className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[200px] bg-[#FF822E] rounded-full blur-[80px] opacity-30 z-0 pointer-events-none"></div>
        </div>
      </section>
    </div>
  )
}

export default Books;