export default function Tabletop() {
  return (
    <section className="tabletop" id="tabletop">
    <div className="section-container-c">
      <div className="section-container">
        <div className="section-tag">🔬 Our Innovation</div>
        <h2 className="section-title">LABS....! Table-Top <span className="text-orange">Solutions</span></h2>
      </div>
      <p className="section-sub">No complicated setup. No massive investment. Just pure learning — anywhere, anytime.</p>
      <div className="tabletop-grid">
        <div className="tabletop-left reveal-left">
          <h3>Why Schools <span className="text-blue">Choose Us</span></h3>
          <ul className="feature-checklist">
            <li><span className="check-icon"><i className="fas fa-check"></i></span>
              <div><strong>No separate lab setup required</strong>
                <p>Our kits work inside existing classrooms without any infrastructure changes.</p>
              </div>
            </li>
            <li><span className="check-icon"><i className="fas fa-check"></i></span>
              <div><strong>No additional infrastructure cost</strong>
                <p>Zero renovation, zero wiring, zero special equipment needed.</p>
              </div>
            </li>
            <li><span className="check-icon"><i className="fas fa-check"></i></span>
              <div><strong>Works inside regular classrooms</strong>
                <p>Deploy on any standard desk or table in minutes.</p>
              </div>
            </li>
            <li><span className="check-icon"><i className="fas fa-check"></i></span>
              <div><strong>Easy to deploy &amp; teacher friendly</strong>
                <p>Step-by-step guides make every teacher an STEM expert.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="tabletop-right">
          <div className="highlight-card reveal-right delay-1">
            <div className="highlight-icon orange"><i className="fas fa-flask"></i></div>
            <h4>Easy To<br /> Develop</h4>
            <tab></tab>
            <p>Through a DIY kits.</p>
          </div>
          <div className="highlight-card reveal-right delay-2">
            <div className="highlight-icon blue"><i className="fas "></i>₹</div>
            <h4>No Extra Cost</h4>
            <p>Affordable subscription model. No hidden infrastructure expenses.</p>
          </div>
          <div className="highlight-card reveal-right delay-3">
            <div className="highlight-icon green"><i className="fas fa-expand-arrows-alt"></i></div>
            <h4>No Seprate Space Required</h4>
            <p>Compact table-top kits that fit in any standard classroom space.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
