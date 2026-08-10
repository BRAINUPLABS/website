export default function Kits() {
  return (
    <section className="kits" id="kits">
    <div className="section-container">

      <div className="section-tag">🛠️ DIY Kits</div>

      <h2 className="section-title">
        Our Most Trusted <span className="text-orange">Curriculum Aligned</span> DIY Kits
      </h2>

      <p className="section-sub">
        Designed for students across all grades — hands-on, fun, and fully aligned with the national curriculum.
      </p>

      
      <div className="kits-categories">

        <div className="kit-cat">
          <img src="/images/ecosystem/class4.png" />
          <div className="kit-cat-info">
            <h4>NANO PLAY KIT</h4>
            
          </div>
        </div>

        <div className="kit-cat">
          <img src="/images/ecosystem/class5.png" />
          <div className="kit-cat-info">
            <h4>SMART SYSTEMS KIT</h4>
            
          </div>
        </div>

        <div className="kit-cat">
          <img src="/images/ecosystem/class6.png" />
          <div className="kit-cat-info">
            <h4>AI-READY SENSOR
              INTELLIGENCE KIT</h4>
            
          </div>
        </div>

        <div className="kit-cat">
          <img src="/images/ecosystem/same.png" />
          <div className="kit-cat-info">
            <h4>ROBOTICS & AI
              TRANSITION KIT</h4>
            
          </div>
        </div>
      </div>

      
      <div className="featured-kits">

        <div className="kit-card">
          <div className="kit-image">
            <img src="/images/ecosystem/same.png" />
          </div>
          <h4>ESP32 IOT & SMART
            SYSTEMS KI</h4>
          <p>Brain-computer interface experiments and EEG projects.</p>
          <button className="btn-kit">Explore Kit →</button>
        </div>

        <div className="kit-card">
          <div className="kit-image">
            <img src="/images/ecosystem/same.png" />
          </div>
          <h4>COMPUTER VISION &
            SMART IOT KIT</h4>
          <p>Rocket design, drones and aerodynamics experiments.</p>
          <button className="btn-kit">Explore Kit →</button>
        </div>

        <div className="kit-card">
          <div className="kit-image">
            <img src="/images/ecosystem/same.png" />
          </div>
          <h4>AERODYNAMICS & NEUROSCIENCE
            ENGINEERING KIT</h4>
          <p>Rocket design, drones and aerodynamics experiments.</p>
          <button className="btn-kit">Explore Kit →</button>
        </div>

      </div>

    </div>
  </section>
  );
}
