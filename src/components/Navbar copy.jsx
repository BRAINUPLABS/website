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

        
        <li className="mega-item">
          <a href="#hero" className="nav-link active">Products <i className="fas fa-chevron-down"></i></a>
          <div className="mega-menu">
            <div className="mega-inner">
              <div className="mega-links">
                <p className="mega-heading">Products</p>
                <a href="#educational-kits"><i className="fas fa-box"></i> Kits</a>
                <a href="#pictoblox"><i className="fas fa-book"></i> Books</a>
                <a href="#curriculum"><i className="fas fa-code"></i> Coding Platform</a>
                <a href="#teacher-development"><i className="fas fa-microchip"></i> Blockduino</a>
                <a href="#codeavour"><i className="fas fa-laptop"></i> LMS</a>
              </div>
              <div className="mega-card"><img src="/images/ecosystem/class4.png" alt="Kits" /><span>DIY Kits</span></div>
              <div className="mega-card"><img src="/images/ecosystem/codi.png" alt="Coding" /><span>Coding</span></div>
              <div className="mega-card"><img src="/images/ecosystem/aihai.png" alt="AI" /><span>AI Platform</span></div>
              <div className="mega-card"><img src="/images/ecosystem/robo.png" alt="Robotics" /><span>Robotics</span></div>
            </div>
          </div>
        </li>

        
        <li className="mega-item">
          <a href="#why" className="nav-link">School Programs <i className="fas fa-chevron-down"></i></a>
          <div className="mega-menu">
            <div className="mega-inner">
              <div className="mega-links">
                <p className="mega-heading">School Programs</p>
                <a href="/school-programs/labs"><i className="fas fa-flask"></i> Labs</a>
                <a href="/school-programs/books"><i className="fas fa-book-open"></i> Books</a>
                <a href="#"><i className="fas fa-school"></i> ATL Labs</a>
                <a href="#"><i className="fas fa-chalkboard-teacher"></i> Teacher Training</a>
              </div>
              <div className="mega-card"><img src="/images/school/sch_01.jpeg" alt="School" /><span>Partner Schools</span>
              </div>
              <div className="mega-card"><img src="/images/school/sch_002.jpg" alt="Lab" /><span>Smart Labs</span></div>
              <div className="mega-card"><img src="/images/school/sch_03.png" alt="ATL" /><span>ATL Setup</span></div>
              <div className="mega-card"><img src="/images/school/sch_04.jpg" alt="Training" /><span>Training</span></div>
            </div>
          </div>
        </li>

        
        <li className="mega-item">
          <a href="#learning" className="nav-link">Books <i className="fas fa-chevron-down"></i></a>
          <div className="mega-menu">
            <div className="mega-inner">
              <div className="mega-links">
                <p className="mega-heading">Books</p>
                <a href="#"><i className="fas fa-code"></i> Coding Books</a>
                <a href="#"><i className="fas fa-brain"></i> AI Books</a>
                <a href="#"><i className="fab fa-python"></i> Python Books</a>
                <a href="#"><i className="fas fa-robot"></i> Robotics Books</a>
              </div>
              <div className="mega-card"><img src="/images/ecosystem/codi.png" alt="Coding" /><span>Coding</span></div>
              <div className="mega-card"><img src="/images/ecosystem/aihai.png" alt="AI" /><span>AI</span></div>
              <div className="mega-card"><img src="/images/ecosystem/robo.png" alt="Robotics" /><span>Robotics</span></div>
              <div className="mega-card"><img src="/images/ecosystem/neur.png" alt="Neuro" /><span>Neurotech</span></div>
            </div>
          </div>
        </li>

        
        <li className="mega-item">
          <a href="services.html" className="nav-link">Impact <i className="fas fa-chevron-down"></i></a>
          <div className="mega-menu">
            <div className="mega-inner">
              <div className="mega-links">
                <p className="mega-heading">Impact</p>
                <a href="#"><i className="fas fa-trophy"></i> Hackathons</a>
                <a href="#"><i className="fas fa-handshake"></i> Collaboration</a>
                <a href="#"><i className="fas fa-chart-line"></i> Achievements</a>
                <a href="#"><i className="fas fa-users"></i> Community</a>
              </div>
              <div className="mega-card"><img src="/images/journey/AICTE.png" alt="AICTE" /><span>AICTE</span></div>
              <div className="mega-card"><img src="/images/journey/istart.png" alt="iStart" /><span>iStart</span></div>
              <div className="mega-card"><img src="/images/journey/MeityStartup.png" alt="Meity" /><span>Meity</span></div>
              <div className="mega-card"><img src="/images/journey/summit.png" alt="Summit" /><span>AI Summit</span></div>
            </div>
          </div>
        </li>

        
        <li className="mega-item">
          <a href="#demo" className="nav-link">Shop <i className="fas fa-chevron-down"></i></a>
          <div className="mega-menu">
            <div className="mega-inner">
              <div className="mega-links">
                <p className="mega-heading">Shop</p>
                <a href="#"><i className="fas fa-box"></i> Kits</a>
                <a href="#"><i className="fas fa-graduation-cap"></i> Courses</a>
                <a href="#"><i className="fas fa-book"></i> Books</a>
                <a href="#"><i className="fas fa-tags"></i> Bundles</a>
              </div>
              <div className="mega-card"><img src="/images/ecosystem/class4.png" alt="Kit1" /><span>Nano Kit</span></div>
              <div className="mega-card"><img src="/images/ecosystem/class5.png" alt="Kit2" /><span>Smart Kit</span></div>
              <div className="mega-card"><img src="/images/ecosystem/same.png" alt="Kit4" /><span>Robotics Kit</span></div>
              <div className="mega-card"><img src="/images/ecosystem/dron.png" alt="Drone" /><span>Drone Kit</span></div>
            </div>
          </div>
        </li>

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
