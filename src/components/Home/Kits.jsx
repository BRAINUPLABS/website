const kitCategories = [
  {
    id: 1,
    image: "/images/ecosystem/class4.png",
    class: 4,
    title: "NANO PLAY KIT",
    desc: "A fun introduction to electronics and problem solving."
  },
  {
    id: 2,
    image: "/images/ecosystem/class5.png",
    class: 5,
    title: "SMART SYSTEMS KIT",
    desc: "Explore sensors and build real-world smart systems."
  },
  {
    id: 3,
    image: "/images/ecosystem/class6.png",
    class: 6,
    title: "AI-READY SENSOR INTELLIGENCE KIT",
    desc: "Work with sensors and develop basic AI concepts."
  },
  {
    id: 4,
    image: "/images/ecosystem/same.png",
    class: 7,
    title: "ESP32 IOT & SMART SYSTEMS KIT",
    desc: "Build connected projects and explore IoT."
  },
  {
    id: 5,
    image: "/images/ecosystem/same.png",
    class: 8,
    title: "ROBOTICS & AI TRANSITION KIT",
    desc: "Take the next step into robotics and artificial intelligence."
  }
];

const advancedInnovationKits = [
  {
    id: 1,
    image: "/images/ecosystem/same.png",
    title: "COMPUTER VISION & SMART IOT KIT",
    description: "Explore object detection, image processing, and smart IoT applications."
  },
  {
    id: 2,
    image: "/images/ecosystem/same.png",
    title: "AERODYNAMICS & NEUROSCIENCE ENGINEERING KIT",
    description: "Explore flight, motion and human brain-inspired systems through hands-on projects."
  },
  {
    id: 3,
    image: "/images/ecosystem/same.png",
    title: "AI & ROBOTICS PROJECT KIT",
    description: "Build advanced AI and robotics projects with real hardware and intelligent systems."
  }
];

export default function Kits() {
  return (
    <section className="py-[80px] bg-[#F7F9FC]" id="kits">
      <div className="max-w-[1200px] mx-auto px-5 text-center">

        <div className="inline-flex items-center gap-[6px] bg-[rgba(9,25,69,0.07)] text-brand-blue text-[0.8rem] font-bold tracking-[0.08em] uppercase py-[6px] px-[14px] rounded-full mb-[14px]">🛠️ DIY Kits</div>

        <h2 className="font-['Space_Grotesk',_sans-serif] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-[14px] text-brand-bg-dark">
          Our Most Trusted <span className="text-brand-orange">Curriculum-Aligned</span> DIY Kits
        </h2>

        <p className="text-[1.05rem] text-brand-text-light max-w-[600px] mx-auto mb-[30px] leading-[1.7] text-center">
          Designed for hands-on learning across all grades - from exploration to real-world innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1200px] mx-auto mt-10 text-left">
          {kitCategories.map((kit) => (
            <div className="bg-white rounded-[20px] overflow-hidden transition-all duration-[0.4s] shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex flex-col hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]" key={kit.id}>
              <img src={kit.image} alt={kit.title} className="w-full h-[160px] object-cover rounded-b-lg" />
              <div className="p-5 flex-grow flex flex-col">
                <span className="bg-brand-orange/20 rounded-lg w-fit px-3 py-1 text-brand-blue text-[0.8rem] font-bold uppercase tracking-wider">Class {kit.class}</span>
                <h4 className="text-[1.1rem] font-bold mt-2 mb-2 leading-tight">{kit.title}</h4>
                <p className="text-brand-text-light text-[0.9rem] leading-relaxed flex-grow">{kit.desc}</p>
                <button className="mt-3 w-fit p-3 bg-brand-orange text-white rounded-[10px] font-bold text-[0.9rem] transition-colors hover:bg-[#e65c00]">Explore Kit →</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-['Space_Grotesk',_sans-serif] text-2xl font-bold leading-[1.2] mt-10 mb-[14px] text-brand-bg-dark">
          Advanced Innovation Kits
        </h2>

        <p className="text-[1.05rem] text-brand-text-light max-w-[600px] mx-auto mb-[30px] leading-[1.7] text-center">
          Specialized kist for advanced learning, research and real-world applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto mt-10 text-left">
          {advancedInnovationKits.map((kit) => (
            <div className="bg-white rounded-[20px] overflow-hidden p-6 transition-all duration-[0.4s] shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex flex-col hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]" key={kit.id}>
              <div className="w-full h-[200px] rounded-[12px] overflow-hidden mb-4">
                <img src={kit.image} alt={kit.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-[1.2rem] font-bold mb-2 leading-tight">{kit.title}</h4>
              <p className="text-brand-text-light text-[0.95rem] leading-relaxed mb-6 flex-grow">{kit.description}</p>
              <button className="w-full py-3 bg-brand-orange text-white rounded-[10px] font-bold text-[0.9rem] transition-colors hover:bg-[#e65c00]">Explore Kit →</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
