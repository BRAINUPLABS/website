export default function Learning() {
  return (
    <section className="learning" id="learning">
    <div className="section-container">
      <div className="section-tag">Learning Paths</div>
      <h2 className="section-title">How Does Your Child <span className="text-orange">Learn Best?</span></h2>
      <div className="tabs-wrapper">
        <div className="tabs-header">
          <button className="tab-btn active" data-tab="diy"><i className="fas fa-tools"></i> Our DIY Kits</button>
          <button className="tab-btn" data-tab="classes"><i className="fas fa-chalkboard-teacher"></i> Our Top-Notch
            Classes</button>
        </div>
        <br />
        <div className="tab-content active" id="tab-diy">
          <p className="section-sub">Hands-On DIY STEM Kits For Curious Minds!</p>
          <div className="learning-cards">
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #FF6B35, #FF9B35)"}}>
                <i className="fas fa-microchip"></i>
              </div>
              <h4>IoT &amp; Electronics</h4>
              <p>Build smart devices, sensors, and connected projects using Arduino and ESP32.</p>
              <br />
              <span className="lcard-badge">DIY Kit</span>
            </div>
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #4A90E2, #6A5ACD)"}}>
                <i className="fas fa-code"></i>
              </div>
              <h4>Coding</h4>
              <p>Learn Python, Scratch, and web development through fun, project-based challenges.</p>
              <br />
              <span className="lcard-badge">DIY Kit</span>
            </div>
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #11998e, #38ef7d)"}}>
                <i className="fas fa-robot"></i>
              </div>
              <h4>Robotics</h4>
              <p>Assemble, program and control robots with step-by-step guided learning kits.</p>
              <br />
              <span className="lcard-badge">DIY Kit</span>
            </div>
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #e91e63, #ff5722)"}}>
                <i className="fas fa-brain"></i>
              </div>
              <h4>Neuroscience / Neurotech</h4>
              <p>Understand the brain and build brain-computer interface experiments at home.</p>

              <span className="lcard-badge">DIY Kit</span>
            </div>
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)"}}>
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Aerospace</h4>
              <p>Explore rocketry, drones, and aerodynamics with hands-on aerospace kits.</p>
              <br />
              <br />
              <span className="lcard-badge">DIY Kit</span>
            </div>
          </div>
        </div>
        <div className="tab-content" id="tab-classes">
          <p className="section-sub">NEP-Aligned Live Classes, Guided By Expert Educators</p>
          <div className="learning-cards">
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #FF6B35, #FF9B35)"}}>
                <i className="fas fa-flask"></i>
              </div>
              <h4>Labs on Table</h4>
              <p>Full lab experience right on a classroom desk — no infrastructure required.</p>
              <br />
              <br />
              <span className="lcard-badge classes">Class</span>
            </div>
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #4A90E2, #6A5ACD)"}}>
                <i className="fas fa-hands"></i>
              </div>
              <br />
              <h4>Hands-On Learning</h4>
              <p>Activity-based cl
                <br />asses where students learn by doing, not just watching.
              </p>
              <br />

              <span className="lcard-badge classes">Class</span>
            </div>
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #11998e, #38ef7d)"}}>
                <i className="fas fa-book-open"></i>
              </div>
              <h4>Curriculum Aligned</h4>
              <p>All content mapped to NEP 2020 and CBSE/ICSE curriculum standards.</p>
              <br />
              <br />
              <span className="lcard-badge classes">Class</span>
            </div>
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #e91e63, #ff5722)"}}>
                <i className="fas fa-trophy"></i>
              </div>
              <h4>Competition Leagues</h4>
              <p>Inter-school STEM competitions to showcase student innovation and creativity.</p>
              <br />
              <span className="lcard-badge classes">Class</span>
            </div>
            <div className="learning-card">
              <div className="lcard-icon" style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)"}}>
                <i className="fas fa-users"></i>
              </div>
              <h4>Student Led Clubs</h4>
              <p>Student-run innovation clubs that nurture leadership and collaborative skills.</p>
              <br />
              <span className="lcard-badge classes">Class</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
