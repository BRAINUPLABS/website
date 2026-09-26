import {useState} from 'react';
import { Sparkles, CheckCircle2, Rocket, BrainCircuit, Bot, Cpu, School, ArrowRight } from 'lucide-react';
import Book from '../../components/Labs/Book';

const labItems = [
  {
    id: "lab-a",
    title: "Infinity Maker's Place",
    icon: <Sparkles size={32} color="#FF822E" />,
    targetAudience: {
      grades: "1-12",
      schools: "CBSE, ICSE, All Boards Supported",
    },
    features: {
      coreSkills: [
        "Robotics", "AI", "IoT", "Automation",
        "SpaceTech", "NeuroTech", "Real World Skills"
      ],
      deliverables: [
        "Books for each grade", "NEP 2020 Aligned Curriculum",
        "Industry Visits", "Lab Design",
        "Coding Platforms", "DIY Kits"
      ]
    }
  },
  {
    id: "lab-b",
    title: "Little Maker's Space",
    icon: <Rocket size={32} color="#0c709a" />,
    targetAudience: {
      grades: "1-3",
      schools: "Pre-primary, Play Schools",
    },
    features: {
      coreSkills: [
        "Hello World Kit", "Logistic Explorer Kit", "Crater Inventor Kit", "Creator Kit", "Master Kit"
      ],
      deliverables: [
        "Trained Teachers", "Books", "NEP 2022 Aligned Curriculum", "Lab Design", "Coding Platforms", "Kits"
      ]
    }
  },
  {
    id: "lab-c",
    title: "Robocraft Lab",
    icon: <Bot size={32} color="#10b981" />,
    targetAudience: {
      grades: "1-8",
      schools: "Primary Schools",
    },
    features: {
      coreSkills: [
        "Plug and Play Kits", "Automation", "IoT", "Robotics"
      ],
      deliverables: [
        "Teachers", "NEP Aligned Curriculum", "Kits", "Coding Platforms", "Lab Design", "Books for each grade"
      ]
    }
  },
  {
    id: "lab-d",
    title: "Mechatron Lab",
    icon: <Cpu size={32} color="#8b5cf6" />,
    targetAudience: {
      grades: "1-10",
      schools: "Secondary Schools",
    },
    features: {
      coreSkills: [
        "Plug and Play Kits", "Automation", "IoT", "Robotics"
      ],
      deliverables: [
        "Teachers", "NEP Aligned Curriculum", "Kits", "Books for each grade", "Industry Visits", "Lab Design", "Coding Platforms"
      ]
    }
  },
  {
    id: "lab-ngo",
    title: "NGO Model Lab",
    icon: <School size={40} color="#10b981" />,
    targetAudience: {
      grades: "All",
      schools: "NGO,s, Small Orphanages",
    },
    features: {
      coreSkills: [
        "Plug and Play Kits", "IoT House", "Mars Rover", "Humanoid Robot", "Autonomous Robot", "Spider Robot", "AI & ML", "Drone"
      ],
      deliverables: [
        "Teacher Training Program", "Books for each grade", "Coding Platforms", "Industry Visits", "Lab Design", "NEP Aligned Curriculum"
      ]
    }
  }
];

const Labs = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedLabId, setSelectedLabId] = useState("");

  return (
    <div className="bg-brand-bg-dark min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-brand-bg-dark text-white pt-20 px-5 pb-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 text-brand-blue-light px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 shadow-[0_0_20px_rgba(125,212,247,0.2)] mb-5 backdrop-blur-md">
            <Sparkles size={14} /> School Programs
          </div>
          <h1 className="font-['Space_Grotesk'] text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-5 leading-[1.1] tracking-tight">
            Next-Generation <span className="bg-gradient-to-r from-brand-orange to-brand-yellow-light text-transparent bg-clip-text">STEM Labs</span>
          </h1>
          <p className="text-base text-gray-300 leading-relaxed max-w-[600px] mx-auto">
            Empower your school with cutting-edge infrastructure. From Robotics and AI to IoT and SpaceTech, we design comprehensive labs tailored for all grade levels.
          </p>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-[10%] w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none z-0 bg-brand-blue opacity-20"></div>
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none z-0 bg-brand-orange opacity-20"></div>
      </section>

      {/* Labs Grid */}
      <section className="max-w-[1200px] mx-auto px-5 relative z-20 -mt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {labItems.map((lab) => (
            <div key={lab.id} className="bg-white rounded-3xl p-5 sm:p-7 shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-brand-border transition-all duration-300 flex flex-col hover:shadow-[0_16px_30px_rgba(255,130,46,0.08)] hover:-translate-y-1 hover:border-brand-orange/20 group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
                <div className="w-[60px] h-[60px] rounded-2xl bg-brand-bg-soft flex items-center justify-center border border-black/5 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] shrink-0 group-hover:scale-105 group-hover:bg-white group-hover:border-brand-orange/20 group-hover:shadow-[0_4px_10px_rgba(0,0,0,0.04)]">
                  {lab.icon}
                </div>
                <div>
                  <h2 className="font-['Space_Grotesk'] text-xl font-bold text-brand-bg-dark mb-2">{lab.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-bg-soft text-brand-blue">
                      <School size={14} /> {lab.targetAudience.schools}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange-dark">
                      Grades: {lab.targetAudience.grades}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                {/* Core Skills */}
                <div className="bg-brand-bg-soft rounded-2xl p-5 border border-transparent transition-colors duration-300 hover:border-black/5">
                  <h3 className="flex items-center gap-2.5 text-base font-bold text-brand-bg-dark mb-4">
                    <div className="p-1.5 bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex">
                      <BrainCircuit size={18} color="#FF822E" />
                    </div>
                    Core Skills
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {lab.features.coreSkills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2 text-brand-text-light font-medium text-sm leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_6px_rgba(255,130,46,0.5)]"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-brand-bg-soft rounded-2xl p-5 border border-transparent transition-colors duration-300 hover:border-black/5">
                  <h3 className="flex items-center gap-2.5 text-base font-bold text-brand-bg-dark mb-4">
                    <div className="p-1.5 bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex">
                      <CheckCircle2 size={18} color="#0c709a" />
                    </div>
                    Deliverables
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {lab.features.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start gap-2 text-brand-text-light font-medium text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="mt-[1px] text-brand-blue shrink-0" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-brand-border">
                <button onClick={(e) => { e.preventDefault(); setSelectedLabId(lab.id); setShowModal(true); }} className="flex items-center justify-center gap-2 w-full p-3 rounded-xl font-bold text-[0.95rem] text-white bg-brand-bg-dark transition-all duration-300 shadow-[0_6px_12px_rgba(0,0,0,0.08)] hover:bg-brand-orange hover:shadow-[0_8px_16px_rgba(255,130,46,0.2)] group/btn">
                  Enquire About {lab.title}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1200px] mx-auto mt-14 px-5 pb-16">
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

export default Labs;