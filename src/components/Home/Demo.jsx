export default function Demo() {
  return (
    <section className="demo" id="demo">
    <div className="demo-bg"></div>
    <div className="section-container">
      <div className="demo-wrapper">
        <div className="demo-left">
          <div className="section-tag"> 📅 Book a Demo </div>
          <h2 className="demo-title">Let's Bring Hands-On STEM Learning <span>To Your School</span></h2>
          <p>Fill in your details and our team will reach out within 24 hours to schedule a free demonstration at your
            school.</p>
          <ul className="demo-benefits">
            <li><i className="fas fa-check-circle"></i> Free 45-minute demo session</li>
            <li><i className="fas fa-check-circle"></i> No commitment required</li>
            <li><i className="fas fa-check-circle"></i> Custom curriculum walkthrough</li>
            <li><i className="fas fa-check-circle"></i> Meet our education team</li>
          </ul>
        </div>
        <div className="section-container-c">
          <div className="demo-right">
            <form className="demo-form" id="demoForm">
              <div className="form-row">
                <div className="form-group">
                  <label>School Name *</label>
                  <input type="text" id="schoolName" placeholder="e.g., Delhi Public School" required />
                </div>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" id="personName" placeholder="e.g., Rahul Sharma" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Designation *</label>
                  <input type="text" id="designation" placeholder="e.g., Principal / Teacher" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" id="email" placeholder="school@example.com" required />
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" id="city" placeholder="e.g., Jaipur" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>State *</label>
                  <select id="state" required>
                    <option value="">Select State</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input type="date" id="preferredDate" />
                </div>
              </div>
              <button type="submit" className="btn-demo-submit">
                <i className="fas fa-calendar-check"></i> Book Demo / Workshop
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
