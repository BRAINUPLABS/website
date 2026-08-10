export default function Hero() {
  return (
    <section className="hero" id="hero">
    <div className="hero-bg-gradient"></div>
    <div className="hero-particles" id="heroParticles"></div>
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-badge">🧠 Future-Ready Education Platform</div>
        <h1 className="hero-heading">
          Unlock the <span className="hero-highlight">Future of</span>
        </h1>
        <div className="hero-rotating-words">
          <div className="word-list">
            <span className="word active">Neuroscience</span>
            <span className="word">Robotics</span>
            <span className="word">IoT</span>
            <span className="word">Neurotech</span>
            <span className="word">Artificial Intelligence</span>
            <span className="word">Aerospace</span>
          </div>
        </div>
        <p className="hero-sub">Empowering students with cutting-edge STEM skills through hands-on learning, real-world
          projects, and industry-aligned curriculum.</p>
        <div className="hero-cta-group">
          <a href="#demo" className="btn-primary">Book Free Demo <i className="fas fa-arrow-right"></i></a>
          <a href="#projects" className="btn-outline">Explore Projects <i className="fas fa-play-circle"></i></a>
        </div>
      </div>
      <div className="hero-right">
        <div className="diag-collage">
          <div className="diag-card diag-bottom">
            <img src="/images/hero/img2.png" alt="Robotics" />
          </div>
          <div className="diag-card diag-center">
            <img src="/images/hero/img1.png" alt="AI" />
          </div>
          <div className="diag-card diag-top">
            <img src="/images/hero/img3.png" alt="Aerospace" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
