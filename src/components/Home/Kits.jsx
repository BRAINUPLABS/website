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
    <section className="kits" id="kits">
      <div className="section-container">

        <div className="section-tag">🛠️ DIY Kits</div>

        <h2 className="section-title">
          Our Most Trusted <span className="text-orange">Curriculum-Aligned</span> DIY Kits
        </h2>

        <p className="section-sub">
          Designed for hands-on learning across all grades - from exploration to real-world innovation.
        </p>

        <div className="kits-categories">
          {kitCategories.map((kit) => (
            <div className="kit-cat" key={kit.id}>
              <img src={kit.image} alt={kit.title} />
              <div className="kit-cat-info">
                <span>Class {kit.class}</span>
                <h4>{kit.title}</h4>
                <p>{kit.desc}</p>
              </div>
              <button className="btn-kit">Explore Kit →</button>
            </div>
          ))}
        </div>

        <div className="featured-kits">
          {advancedInnovationKits.map((kit) => (
            <div className="kit-card" key={kit.id}>
              <div className="kit-image">
                <img src={kit.image} alt={kit.title} />
              </div>
              <h4>{kit.title}</h4>
              <p>{kit.description}</p>
              <button className="btn-kit">Explore Kit →</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
