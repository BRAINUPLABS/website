const diyKits = [
  {
    id: 1,
    title: "IoT & Electronics",
    desc: "Build smart devices, sensors, and connected projects using Arduino and ESP32.",
    image: "/images/ecosystem/class4.png",
    icon: "fas fa-microchip",
    color: "#FF6B35"
  },
  {
    id: 2,
    title: "Coding",
    desc: "Learn Python, Scratch, and web development through fun, project-based challenges.",
    image: "/images/ecosystem/codi.png",
    icon: "fas fa-code",
    color: "#4A90E2"
  },
  {
    id: 3,
    title: "Robotics",
    desc: "Assemble, program and control robots with step-by-step guided learning kits.",
    image: "/images/ecosystem/robo.png",
    icon: "fas fa-robot",
    color: "#119931"
  },
  {
    id: 4,
    title: "Neuroscience / Neurotech",
    desc: "Understand the brain and build brain-computer interface experiments at home.",
    image: "/images/ecosystem/aihai.png",
    icon: "fas fa-brain",
    color: "#e91e63"
  },
  {
    id: 5,
    title: "Aerospace",
    desc: "Explore rocketry, drones, and aerodynamics with hands-on aerospace kits.",
    image: "/images/ecosystem/aero.png",
    icon: "fas fa-rocket",
    color: "#1a1a2e"
  }
];

const classKits = [
  {
    id: 1,
    title: "Labs on Table",
    desc: "Full lab experience right on a classroom desk — no infrastructure required.",
    image: "/images/ecosystem/same.png",
    icon: "fas fa-flask",
    color: "#FF6B35"
  },
  {
    id: 2,
    title: "Hands-On Learning",
    desc: "Activity-based classes where students learn by doing, not just watching.",
    image: "/images/ecosystem/class4.png",
    icon: "fas fa-hands",
    color: "#4A90E2"
  },
  {
    id: 3,
    title: "Curriculum Aligned",
    desc: "All content mapped to NEP 2020 and CBSE/ICSE curriculum standards.",
    image: "/images/ecosystem/class5.png",
    icon: "fas fa-book-open",
    color: "#11998e"
  },
  {
    id: 4,
    title: "Competition Leagues",
    desc: "Inter-school STEM competitions to showcase student innovation and creativity.",
    image: "/images/ecosystem/class6.png",
    icon: "fas fa-trophy",
    color: "#e91e63"
  },
  {
    id: 5,
    title: "Student Led Clubs",
    desc: "Student-run innovation clubs that nurture leadership and collaborative skills.",
    image: "/images/ecosystem/class7.png",
    icon: "fas fa-users",
    color: "#1a1a2e"
  }
];

export default function Learning() {
  return (
    <section className="py-[60px] bg-[#F7F9FC]" id="learning">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-[6px] bg-[rgba(9,25,69,0.07)] text-brand-blue text-[0.8rem] font-bold tracking-[0.08em] uppercase py-[6px] px-[14px] rounded-full mb-[14px]">
          Learning Paths
        </div>
        <h2 className="font-['Space_Grotesk',_sans-serif] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-[14px] text-brand-bg-dark">
          How Does Your Child <span className="text-brand-orange">Learn Best?</span>
        </h2>
        <p className="text-[1.05rem] text-brand-text-light max-w-[600px] mx-auto mb-[30px] leading-[1.7] text-center">
          Hands-On DIY STEM Kits designed to match every child's curiosity.
        </p>

        <div className="w-full">
          <div className="flex justify-center gap-3 text-center">
            <button className="py-3 px-7 rounded-[10px] text-[0.9rem] font-bold transition-all duration-[0.35s] flex items-center gap-2 bg-white text-brand-blue shadow-[0_2px_12px_rgba(30,79,216,0.12)]" data-tab="diy">
              <i className="fas fa-tools"></i> Our DIY Kits
            </button>
            <button className="py-3 px-7 rounded-[10px] text-[0.9rem] font-bold text-brand-text-light transition-all duration-[0.35s] flex items-center gap-2" data-tab="classes">
              <i className="fas fa-chalkboard-teacher"></i> Our Top-Notch Classes
            </button>
          </div>
          <br />
          <div className="block animate-[fadeInUp_0.4s_ease]" id="tab-diy">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-[10px] md:grid md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-5 md:overflow-visible">
              {diyKits.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center bg-white rounded-[24px] p-4 pb-6 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-slate-100 transition-all duration-300 relative group hover:-translate-y-1.5 hover:shadow-xl shrink-0 w-[75%] md:w-auto h-full"
                >
                  <div
                    className="w-full aspect-[4/3] rounded-[18px] overflow-hidden flex items-center justify-center"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${item.color} 8%, transparent)`,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full"
                    />
                  </div>

                  <div
                    className="relative -mt-7 w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl shadow-md shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, color-mix(in srgb, ${item.color} 80%, black))`,
                    }}
                  >
                    <i className={item.icon}></i>
                  </div>

                  <div className="flex flex-col items-center text-center px-2 mt-4 flex-grow">
                    <h4 className="text-[1.1rem] font-bold text-slate-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[0.875rem] text-slate-500 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    className="mt-6 w-full py-3 px-4 font-bold text-[0.92rem] rounded-full transition-opacity hover:opacity-90 flex items-center justify-center gap-1.5"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${item.color} 12%, transparent)`,
                      color: item.color,
                    }}
                  >
                    Explore Kit →
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden animate-[fadeInUp_0.4s_ease]" id="tab-classes">
            <p className="text-[1.05rem] text-brand-text-light max-w-[600px] mx-auto mb-[30px] leading-[1.7] text-center">
              NEP-Aligned Live Classes, Guided By Expert Educators
            </p>
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-[10px] md:grid md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-5 md:overflow-visible">
              {classKits.map((item) => (
                <div key={item.id} className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-brand-border transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto h-full">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-orange scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
                  <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4 shrink-0" style={{ background: item.gradient }}>
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[0.97rem] font-bold mb-2 text-center">{item.title}</h4>
                  <p className="text-[0.83rem] text-brand-text-light leading-[1.6] mb-[14px] flex-grow text-center">{item.desc}</p>
                  <button className={`mt-3 w-fit p-3 bg-${item.color} font-bold rounded-full font-bold text-[0.9rem] transition-colors hover:bg-[#e65c00]`}>Explore Kit →</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
