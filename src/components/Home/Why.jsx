const whyCards = [
  {
    icon: "fas fa-graduation-cap",
    title: "NEP 2020 Aligned Framework",
    desc: "Our entire curriculum is built in line with India's National Education Policy 2020, ensuring future readiness."
  },
  {
    icon: "fas fa-layer-group",
    title: "Industry Relevant Tech Stack",
    desc: "Students work with the same tools used by industry professionals — Arduino, Python, EEG, drones, and more."
  },
  {
    icon: "fas fa-chart-line",
    title: "Structured Growth Pathway",
    desc: "Clear learning progression from beginner to advanced, with milestones and certifications at every stage."
  },
  {
    icon: "fas fa-lightbulb",
    title: "Future Focused Skill Building",
    desc: "We train students in tomorrow's skills — AI, neurotech, space tech — before they become mainstream."
  },
  {
    icon: "fas fa-cogs",
    title: "Experiential Learning by Design",
    desc: "Every lesson is built around doing, making, and creating — not passive reading and rote memorization."
  },
  {
    icon: "fas fa-handshake",
    title: "Trusted Learning Partner",
    desc: "Dedicated support, training for teachers, and continuous curriculum updates to keep schools ahead."
  }
];

export default function Why() {
  return (
    <section className="py-20 bg-[#F8F9FA]" id="why">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-[6px] bg-[#09194512] text-brand-blue text-[0.8rem] font-bold tracking-[0.08em] uppercase py-[6px] px-[14px] rounded-full mb-[14px]">⭐ Why Choose Us</div>
        <h2 className="font-['Space_Grotesk',_sans-serif] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-[14px] text-brand-bg-dark text-left md:text-center">Why <span className="text-brand-orange">Brain Up Labs</span>?</h2>
        <p className="text-[1.05rem] text-brand-text-light max-w-[600px] mx-auto mb-[30px] leading-[1.7] text-center">
          Six pillars that make us the most trusted STEM education partner for schools and parents.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-left">
          {whyCards.map((card, index) => (
            <div key={index} className={`bg-white rounded-[18px] p-6 shadow-[0_2px_20px_rgba(13,17,23,0.07)] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] transition-all duration-300 flex flex-col items-start ${index > 0 ? `delay-${index}` : ''}`.trim()}>
              <div className="w-14 h-14 bg-[#FF822E1A] text-brand-orange rounded-full flex items-center justify-center text-2xl mb-4"><i className={card.icon}></i></div>
              <h4 className="font-bold text-lg mb-2 text-brand-bg-dark">{card.title}</h4>
              <p className="text-brand-text-light text-sm leading-[1.6]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
