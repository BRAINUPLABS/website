import { useState } from 'react';
import Book1 from '../assets/Books/1.png';
import Book2 from '../assets/Books/2.png';
import Book3 from '../assets/Books/3.png';

const navData = [
  {
    id: 'products',
    title: 'Products',
    href: '#hero',
    isActive: true,
    heading: 'Products',
    defaultCards: [
      { img: '/images/ecosystem/class4.png', label: 'DIY Kits' },
      { img: '/images/ecosystem/codi.png', label: 'Coding' },
      { img: '/images/ecosystem/aihai.png', label: 'AI Platform' },
      { img: '/images/ecosystem/robo.png', label: 'Robotics' }
    ],
    links: [
      { id: 'kits', label: 'Kits', icon: 'fas fa-box', href: '#educational-kits', cards: [ { img: '/images/ecosystem/class4.png', label: 'DIY Kits' }, { img: '/images/ecosystem/class5.png', label: 'Smart Kits' }, { img: '/images/ecosystem/same.png', label: 'Robotics Kits' }, { img: '/images/ecosystem/dron.png', label: 'Drone Kits' } ] },
      { id: 'books', label: 'Books', icon: 'fas fa-book', href: '#pictoblox', cards: [ { img: '/images/ecosystem/codi.png', label: 'Coding Books' }, { img: '/images/ecosystem/aihai.png', label: 'AI Books' }, { img: '/images/ecosystem/robo.png', label: 'Robotics Books' }, { img: '/images/ecosystem/neur.png', label: 'Neurotech Books' } ] },
      { id: 'coding', label: 'Coding Platform', icon: 'fas fa-code', href: '#curriculum', cards: [ { img: '/images/ecosystem/codi.png', label: 'Platform Features' }, { img: '/images/ecosystem/aihai.png', label: 'AI Tools' }, { img: '/images/ecosystem/robo.png', label: 'Simulators' }, { img: '/images/ecosystem/class4.png', label: 'Projects' } ] },
      { id: 'blockduino', label: 'Blockduino', icon: 'fas fa-microchip', href: '#teacher-development', cards: [ { img: '/images/ecosystem/robo.png', label: 'Blockduino Core' }, { img: '/images/ecosystem/class4.png', label: 'Extensions' }, { img: '/images/ecosystem/same.png', label: 'Accessories' }, { img: '/images/ecosystem/dron.png', label: 'Kits' } ] },
      { id: 'lms', label: 'LMS', icon: 'fas fa-laptop', href: '#codeavour', cards: [ { img: '/images/ecosystem/aihai.png', label: 'Dashboards' }, { img: '/images/ecosystem/codi.png', label: 'Progress Tracking' }, { img: '/images/ecosystem/class4.png', label: 'Assignments' }, { img: '/images/ecosystem/same.png', label: 'Resources' } ] }
    ]
  },
  {
    id: 'school',
    title: 'School Programs',
    href: '#why',
    isActive: false,
    heading: 'School Programs',
    defaultCards: [
      { img: '/images/school/sch_01.jpeg', label: 'Partner Schools' },
      { img: '/images/school/sch_002.jpg', label: 'Smart Labs' },
      { img: '/images/school/sch_03.png', label: 'ATL Setup' },
      { img: '/images/school/sch_04.jpg', label: 'Training' }
    ],
    links: [
      { id: 'labs', label: 'Labs', icon: 'fas fa-flask', href: '/school-programs/labs', cards: [ { img: '/images/school/sch_002.jpg', label: "Infinity Maker's Place" }, { img: '/images/school/sch_03.png', label: "Little Maker's Space" }, { img: '/images/school/sch_01.jpeg', label: 'Robocraft Lab' }, { img: '/images/school/sch_04.jpg', label: 'Mechatron Lab' } ] },
      { id: 'school-books', label: 'Books', icon: 'fas fa-book-open', href: '/school-programs/books', cards: [ { img: Book1, label: 'Classes 1 to 12' }, { img: Book2, label: 'Classes 1 to 8' }, { img: Book3, label: 'Classes 9 to 10' }, { img: Book2, label: 'Classes 1 to 8' } ] },
      { id: 'atl', label: 'ATL Labs', icon: 'fas fa-school', href: '#', cards: [ { img: '/images/school/sch_03.png', label: 'Tinkering Labs' }, { img: '/images/school/sch_01.jpeg', label: 'Components' }, { img: '/images/school/sch_04.jpg', label: 'Training' }, { img: '/images/school/sch_002.jpg', label: 'Support' } ] },
      { id: 'training', label: 'Teacher Training', icon: 'fas fa-chalkboard-teacher', href: '#', cards: [ { img: '/images/school/sch_04.jpg', label: 'Workshops' }, { img: '/images/journey/AICTE.png', label: 'Certifications' }, { img: '/images/school/sch_01.jpeg', label: 'Seminars' }, { img: '/images/school/sch_03.png', label: 'Resources' } ] }
    ]
  },
  {
    id: 'books-nav',
    title: 'Books',
    href: '#learning',
    isActive: false,
    heading: 'Books',
    defaultCards: [
      { img: '/images/ecosystem/codi.png', label: 'Coding' },
      { img: '/images/ecosystem/aihai.png', label: 'AI' },
      { img: '/images/ecosystem/robo.png', label: 'Robotics' },
      { img: '/images/ecosystem/neur.png', label: 'Neurotech' }
    ],
    links: [
      { id: 'coding-books', label: 'Coding Books', icon: 'fas fa-code', href: '#', cards: [ { img: '/images/ecosystem/codi.png', label: 'Block Coding' }, { img: '/images/ecosystem/codi.png', label: 'Python Basics' }, { img: '/images/ecosystem/codi.png', label: 'Web Dev' }, { img: '/images/ecosystem/codi.png', label: 'App Dev' } ] },
      { id: 'ai-books', label: 'AI Books', icon: 'fas fa-brain', href: '#', cards: [ { img: '/images/ecosystem/aihai.png', label: 'Machine Learning' }, { img: '/images/ecosystem/aihai.png', label: 'Computer Vision' }, { img: '/images/ecosystem/aihai.png', label: 'NLP' }, { img: '/images/ecosystem/aihai.png', label: 'Generative AI' } ] },
      { id: 'python-books', label: 'Python Books', icon: 'fab fa-python', href: '#', cards: [ { img: '/images/ecosystem/codi.png', label: 'Beginner Python' }, { img: '/images/ecosystem/codi.png', label: 'Data Science' }, { img: '/images/ecosystem/codi.png', label: 'Automation' }, { img: '/images/ecosystem/codi.png', label: 'Game Dev' } ] },
      { id: 'robotics-books', label: 'Robotics Books', icon: 'fas fa-robot', href: '#', cards: [ { img: '/images/ecosystem/robo.png', label: 'Basic Robotics' }, { img: '/images/ecosystem/robo.png', label: 'Arduino' }, { img: '/images/ecosystem/robo.png', label: 'IoT' }, { img: '/images/ecosystem/robo.png', label: 'Drones' } ] }
    ]
  },
  {
    id: 'impact',
    title: 'Impact',
    href: 'services.html',
    isActive: false,
    heading: 'Impact',
    defaultCards: [
      { img: '/images/journey/AICTE.png', label: 'AICTE' },
      { img: '/images/journey/istart.png', label: 'iStart' },
      { img: '/images/journey/MeityStartup.png', label: 'Meity' },
      { img: '/images/journey/summit.png', label: 'AI Summit' }
    ],
    links: [
      { id: 'hackathons', label: 'Hackathons', icon: 'fas fa-trophy', href: '#', cards: [ { img: '/images/journey/summit.png', label: 'National Hackathon' }, { img: '/images/journey/istart.png', label: 'State Level' }, { img: '/images/journey/MeityStartup.png', label: 'Innovation Challenge' }, { img: '/images/journey/AICTE.png', label: 'Ideathon' } ] },
      { id: 'collab', label: 'Collaboration', icon: 'fas fa-handshake', href: '#', cards: [ { img: '/images/journey/AICTE.png', label: 'Govt Tie-ups' }, { img: '/images/journey/MeityStartup.png', label: 'Corporate Partners' }, { img: '/images/journey/istart.png', label: 'NGOs' }, { img: '/images/school/sch_01.jpeg', label: 'Schools' } ] },
      { id: 'achievements', label: 'Achievements', icon: 'fas fa-chart-line', href: '#', cards: [ { img: '/images/journey/summit.png', label: 'Awards' }, { img: '/images/journey/istart.png', label: 'Recognitions' }, { img: '/images/journey/MeityStartup.png', label: 'Grants' }, { img: '/images/journey/AICTE.png', label: 'Milestones' } ] },
      { id: 'community', label: 'Community', icon: 'fas fa-users', href: '#', cards: [ { img: '/images/school/sch_01.jpeg', label: 'Educators' }, { img: '/images/school/sch_04.jpg', label: 'Students' }, { img: '/images/school/sch_002.jpg', label: 'Parents' }, { img: '/images/journey/summit.png', label: 'Events' } ] }
    ]
  },
  {
    id: 'shop',
    title: 'Shop',
    href: '#demo',
    isActive: false,
    heading: 'Shop',
    defaultCards: [
      { img: '/images/ecosystem/class4.png', label: 'Nano Kit' },
      { img: '/images/ecosystem/class5.png', label: 'Smart Kit' },
      { img: '/images/ecosystem/same.png', label: 'Robotics Kit' },
      { img: '/images/ecosystem/dron.png', label: 'Drone Kit' }
    ],
    links: [
      { id: 'shop-kits', label: 'Kits', icon: 'fas fa-box', href: '#', cards: [ { img: '/images/ecosystem/class4.png', label: 'Starter Kits' }, { img: '/images/ecosystem/class5.png', label: 'Advanced Kits' }, { img: '/images/ecosystem/same.png', label: 'Expansion Packs' }, { img: '/images/ecosystem/dron.png', label: 'Accessories' } ] },
      { id: 'courses', label: 'Courses', icon: 'fas fa-graduation-cap', href: '#', cards: [ { img: '/images/ecosystem/codi.png', label: 'Online Courses' }, { img: '/images/ecosystem/aihai.png', label: 'Bootcamps' }, { img: '/images/ecosystem/robo.png', label: 'Certifications' }, { img: '/images/school/sch_04.jpg', label: 'Workshops' } ] },
      { id: 'shop-books', label: 'Books', icon: 'fas fa-book', href: '#', cards: [ { img: '/images/ecosystem/codi.png', label: 'Textbooks' }, { img: '/images/ecosystem/aihai.png', label: 'Workbooks' }, { img: '/images/ecosystem/neur.png', label: 'Guides' }, { img: '/images/ecosystem/robo.png', label: 'Manuals' } ] },
      { id: 'bundles', label: 'Bundles', icon: 'fas fa-tags', href: '#', cards: [ { img: '/images/ecosystem/class4.png', label: 'School Bundles' }, { img: '/images/ecosystem/class5.png', label: 'Home Bundles' }, { img: '/images/ecosystem/same.png', label: 'Gift Packs' }, { img: '/images/ecosystem/dron.png', label: 'Special Offers' } ] }
    ]
  }
];

function NavItem({ item }) {
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  const activeCards = hoveredLinkId
    ? item.links.find((l) => l.id === hoveredLinkId)?.cards || item.defaultCards
    : item.defaultCards;

  return (
    <li className="mega-item" onMouseLeave={() => setHoveredLinkId(null)}>
      <a href={item.href} className={`nav-link ${item.isActive ? 'active' : ''}`}>
        {item.title} <i className="fas fa-chevron-down"></i>
      </a>
      <div className="mega-menu">
        <div className="mega-inner">
          <div className="mega-links">
            <p className="mega-heading">{item.heading}</p>
            {item.links.map((link) => (
              <a 
                key={link.id} 
                href={link.href}
                onMouseEnter={() => setHoveredLinkId(link.id)}
              >
                <i className={link.icon}></i> {link.label}
              </a>
            ))}
          </div>
          {activeCards.map((card, i) => (
            <div className="mega-card" key={i}>
              <img src={card.img} alt={card.label} />
              <span>{card.label}</span>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" className="nav-logo">
            <img src="/images/logo/brain.png" alt="Logo" />
          </a>
        </div>
        <ul className="nav-menu" id="navMenu">
          {navData.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>
        <div className="nav-right">
          <a href="#demo" className="btn-signin">Book Demo</a>
          <button className="hamburger" id="hamburger">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
