export default function FloatingStatsWrap() {
  return (
    <div className="floating-stats-wrap">
    <div className="floating-stats-card">
      <div className="fstat-item">
        <div className="fstat-icon"><i className="fas fa-user-graduate"></i></div>
        <span className="fstat-num">500+</span>
        <span className="fstat-label">Students Trained</span>
      </div>
      <div className="fstat-divider"></div>
      <div className="fstat-item">
        <div className="fstat-icon"><i className="fas fa-school"></i></div>
        <span className="fstat-num">50+</span>
        <span className="fstat-label">Partner Schools</span>
      </div>
      <div className="fstat-divider"></div>
      <div className="fstat-item">
        <div className="fstat-icon"><i className="fas fa-layer-group"></i></div>
        <span className="fstat-num">6+</span>
        <span className="fstat-label">STEM Domains</span>
      </div>
      <div className="fstat-divider"></div>
      <div className="fstat-item">
        <div className="fstat-icon"><i className="fas fa-trophy"></i></div>
        <span className="fstat-num">10+</span>
        <span className="fstat-label">Recognitions</span>
      </div>
    </div>
  </div>
  );
}
