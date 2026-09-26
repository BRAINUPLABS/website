export default function Demo() {
  return (
    <section className="py-20 relative bg-brand-bg-dark overflow-hidden" id="demo">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg-dark to-brand-bg-dark2"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-white">
            <div className="inline-flex items-center gap-[6px] bg-[#ffffff15] text-white text-[0.8rem] font-bold tracking-[0.08em] uppercase py-[6px] px-[14px] rounded-full mb-[20px]"> 📅 Book a Demo </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold mb-6 font-['Space_Grotesk',_sans-serif] leading-[1.2]">Let's Bring Hands-On STEM Learning <span className="text-brand-orange">To Your School</span></h2>
            <p className="text-white/80 text-[1.05rem] leading-[1.7] mb-8">Fill in your details and our team will reach out within 24 hours to schedule a free demonstration at your school.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/90 font-medium"><i className="fas fa-check-circle text-brand-blue text-xl"></i> Free 45-minute demo session</li>
              <li className="flex items-center gap-3 text-white/90 font-medium"><i className="fas fa-check-circle text-brand-blue text-xl"></i> No commitment required</li>
              <li className="flex items-center gap-3 text-white/90 font-medium"><i className="fas fa-check-circle text-brand-blue text-xl"></i> Custom curriculum walkthrough</li>
              <li className="flex items-center gap-3 text-white/90 font-medium"><i className="fas fa-check-circle text-brand-blue text-xl"></i> Meet our education team</li>
            </ul>
          </div>
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
            <form className="bg-white rounded-[24px] p-8 shadow-xl" id="demoForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[#1d2939] mb-2">School Name *</label>
                  <input className="w-full bg-[#F8F9FA] border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-bg-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" type="text" id="schoolName" placeholder="e.g., Delhi Public School" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1d2939] mb-2">Your Name *</label>
                  <input className="w-full bg-[#F8F9FA] border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-bg-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" type="text" id="personName" placeholder="e.g., Rahul Sharma" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[#1d2939] mb-2">Designation *</label>
                  <input className="w-full bg-[#F8F9FA] border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-bg-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" type="text" id="designation" placeholder="e.g., Principal / Teacher" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1d2939] mb-2">Phone Number *</label>
                  <input className="w-full bg-[#F8F9FA] border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-bg-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" type="tel" id="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[#1d2939] mb-2">Email *</label>
                  <input className="w-full bg-[#F8F9FA] border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-bg-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" type="email" id="email" placeholder="school@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1d2939] mb-2">City *</label>
                  <input className="w-full bg-[#F8F9FA] border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-bg-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" type="text" id="city" placeholder="e.g., Jaipur" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-[#1d2939] mb-2">State *</label>
                  <select className="w-full bg-[#F8F9FA] border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-bg-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" id="state" required>
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
                <div>
                  <label className="block text-sm font-bold text-[#1d2939] mb-2">Preferred Date</label>
                  <input className="w-full bg-[#F8F9FA] border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-bg-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue" type="date" id="preferredDate" />
                </div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_8px_24px_rgba(255,130,46,0.3)] transition-all duration-300">
                <i className="fas fa-calendar-check"></i> Book Demo / Workshop
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
