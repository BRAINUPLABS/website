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
    <section className="why" id="why">
      <div className="section-container">
        <div className="section-tag">⭐ Why Choose Us</div>
        <h2 className="section-title">Why <span className="text-orange">Brain Up Labs</span>?</h2>
        <p className="section-sub">
          Six pillars that make us the most trusted STEM education partner for schools and parents.
        </p>
        <div className="why-grid">
          {whyCards.map((card, index) => (
            <div key={index} className={`why-card reveal-up ${index > 0 ? `delay-${index}` : ''}`.trim()}>
              <div className="why-icon"><i className={card.icon}></i></div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
