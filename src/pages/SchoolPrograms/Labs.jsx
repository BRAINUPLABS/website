import {useState} from 'react';
import { Sparkles, CheckCircle2, Rocket, BrainCircuit, Bot, Cpu, School, ArrowRight } from 'lucide-react';
import Book from '../../components/Labs/Book';
import './Labs.css';

const labItems = [
  {
    id: "lab-a",
    title: "Infinity Maker's Place",
    icon: <Sparkles size={32} color="var(--orange, #FF822E)" />,
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
    icon: <Rocket size={32} color="var(--blue, #0c709a)" />,
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
    icon: <School size={40} color="var(--green, #10b981)" />,
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
    <div className="labs-page">
      {/* Hero Section */}
      <section className="labs-hero">
        <div className="labs-hero-bg"></div>
        <div className="labs-hero-content">
          <div className="labs-badge">
            <Sparkles size={14} /> School Programs
          </div>
          <h1 className="labs-hero-title">
            Next-Generation <span className="labs-hero-highlight">STEM Labs</span>
          </h1>
          <p className="labs-hero-desc">
            Empower your school with cutting-edge infrastructure. From Robotics and AI to IoT and SpaceTech, we design comprehensive labs tailored for all grade levels.
          </p>
        </div>

        {/* Abstract Background Shapes */}
        <div className="labs-shape-1"></div>
        <div className="labs-shape-2"></div>
      </section>

      {/* Labs Grid */}
      <section className="labs-container">
        <div className="labs-grid">
          {labItems.map((lab) => (
            <div key={lab.id} className="labs-card">
              <div className="labs-card-header">
                <div className="labs-card-icon">
                  {lab.icon}
                </div>
                <div>
                  <h2 className="labs-card-title">{lab.title}</h2>
                  <div className="labs-tags">
                    <span className="labs-tag labs-tag-school">
                      <School size={14} /> {lab.targetAudience.schools}
                    </span>
                    <span className="labs-tag labs-tag-grade">
                      Grades: {lab.targetAudience.grades}
                    </span>
                  </div>
                </div>
              </div>

              <div className="labs-features">
                {/* Core Skills */}
                <div className="labs-feature-box">
                  <h3 className="labs-feature-title">
                    <div className="labs-feature-icon-wrap">
                      <BrainCircuit size={18} color="var(--orange, #FF822E)" />
                    </div>
                    Core Skills
                  </h3>
                  <ul className="labs-list">
                    {lab.features.coreSkills.map((skill, index) => (
                      <li key={index}>
                        <div className="labs-bullet"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="labs-feature-box">
                  <h3 className="labs-feature-title">
                    <div className="labs-feature-icon-wrap">
                      <CheckCircle2 size={18} color="var(--blue, #0c709a)" />
                    </div>
                    Deliverables
                  </h3>
                  <ul className="labs-list">
                    {lab.features.deliverables.map((deliverable, index) => (
                      <li key={index}>
                        <CheckCircle2 size={16} className="labs-check" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="labs-card-footer">
                <button onClick={(e) => { e.preventDefault(); setSelectedLabId(lab.id); setShowModal(true); }} className="labs-btn">
                  Enquire About {lab.title}
                  <ArrowRight size={18} />
                </button>
              </div>
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

      {showModal && (
        <Book setShowModal={setShowModal} selectedLabs={selectedLabId} />
      )}
    </div>
  )
}

export default Labs;