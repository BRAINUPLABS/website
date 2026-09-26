export default function Learning() {
  return (
    <section className="py-[60px] bg-[#F7F9FC]" id="learning">
    <div className="max-w-[1200px] mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-[6px] bg-[rgba(9,25,69,0.07)] text-[#0c709a] text-[0.8rem] font-bold tracking-[0.08em] uppercase py-[6px] px-[14px] rounded-full mb-[14px]">Learning Paths</div>
      <h2 className="font-['Space_Grotesk',_sans-serif] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-[14px] text-[#0D1117]">How Does Your Child <span className="text-[#FF822E]">Learn Best?</span></h2>
      <div className="w-full">
        <div className="flex justify-center gap-3 text-center">
          <button className="py-3 px-7 rounded-[10px] text-[0.9rem] font-bold transition-all duration-[0.35s] flex items-center gap-2 bg-white text-[#0c709a] shadow-[0_2px_12px_rgba(30,79,216,0.12)]" data-tab="diy"><i className="fas fa-tools"></i> Our DIY Kits</button>
          <button className="py-3 px-7 rounded-[10px] text-[0.9rem] font-bold text-[#5C6B82] transition-all duration-[0.35s] flex items-center gap-2" data-tab="classes"><i className="fas fa-chalkboard-teacher"></i> Our Top-Notch
            Classes</button>
        </div>
        <br />
        <div className="block animate-[fadeInUp_0.4s_ease]" id="tab-diy">
          <p className="text-[1.05rem] text-[#5C6B82] max-w-[600px] mx-auto mb-[30px] leading-[1.7] text-center">Hands-On DIY STEM Kits For Curious Minds!</p>
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-[10px] md:grid md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-5 md:overflow-visible">
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #FF6B35, #FF9B35)"}}>
                <i className="fas fa-microchip"></i>
              </div>
              <h4 className="text-[0.97rem] font-bold mb-2">IoT &amp; Electronics</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">Build smart devices, sensors, and connected projects using Arduino and ESP32.</p>
              <br />
              <span className="inline-block bg-[rgba(30,79,216,0.08)] text-[#0c709a] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">DIY Kit</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #4A90E2, #6A5ACD)"}}>
                <i className="fas fa-code"></i>
              </div>
              <h4 className="text-[0.97rem] font-bold mb-2">Coding</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">Learn Python, Scratch, and web development through fun, project-based challenges.</p>
              <br />
              <span className="inline-block bg-[rgba(30,79,216,0.08)] text-[#0c709a] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">DIY Kit</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #11998e, #38ef7d)"}}>
                <i className="fas fa-robot"></i>
              </div>
              <h4 className="text-[0.97rem] font-bold mb-2">Robotics</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">Assemble, program and control robots with step-by-step guided learning kits.</p>
              <br />
              <span className="inline-block bg-[rgba(30,79,216,0.08)] text-[#0c709a] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">DIY Kit</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #e91e63, #ff5722)"}}>
                <i className="fas fa-brain"></i>
              </div>
              <h4 className="text-[0.97rem] font-bold mb-2">Neuroscience / Neurotech</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">Understand the brain and build brain-computer interface experiments at home.</p>

              <span className="inline-block bg-[rgba(30,79,216,0.08)] text-[#0c709a] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">DIY Kit</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)"}}>
                <i className="fas fa-rocket"></i>
              </div>
              <h4 className="text-[0.97rem] font-bold mb-2">Aerospace</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">Explore rocketry, drones, and aerodynamics with hands-on aerospace kits.</p>
              <br />
              <br />
              <span className="inline-block bg-[rgba(30,79,216,0.08)] text-[#0c709a] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">DIY Kit</span>
            </div>
          </div>
        </div>
        <div className="hidden animate-[fadeInUp_0.4s_ease]" id="tab-classes">
          <p className="text-[1.05rem] text-[#5C6B82] max-w-[600px] mx-auto mb-[30px] leading-[1.7] text-center">NEP-Aligned Live Classes, Guided By Expert Educators</p>
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-[10px] md:grid md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-5 md:overflow-visible">
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #FF6B35, #FF9B35)"}}>
                <i className="fas fa-flask"></i>
              </div>
              <h4 className="text-[0.97rem] font-bold mb-2">Labs on Table</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">Full lab experience right on a classroom desk — no infrastructure required.</p>
              <br />
              <br />
              <span className="inline-block bg-[rgba(255,107,53,0.08)] text-[#FF822E] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">Class</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #4A90E2, #6A5ACD)"}}>
                <i className="fas fa-hands"></i>
              </div>
              <br />
              <h4 className="text-[0.97rem] font-bold mb-2">Hands-On Learning</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">Activity-based cl
                <br />asses where students learn by doing, not just watching.
              </p>
              <br />

              <span className="inline-block bg-[rgba(255,107,53,0.08)] text-[#FF822E] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">Class</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #11998e, #38ef7d)"}}>
                <i className="fas fa-book-open"></i>
              </div>
              <h4 className="text-[0.97rem] font-bold mb-2">Curriculum Aligned</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">All content mapped to NEP 2020 and CBSE/ICSE curriculum standards.</p>
              <br />
              <br />
              <span className="inline-block bg-[rgba(255,107,53,0.08)] text-[#FF822E] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">Class</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #e91e63, #ff5722)"}}>
                <i className="fas fa-trophy"></i>
              </div>
              <h4 className="text-[0.97rem] font-bold mb-2">Competition Leagues</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">Inter-school STEM competitions to showcase student innovation and creativity.</p>
              <br />
              <span className="inline-block bg-[rgba(255,107,53,0.08)] text-[#FF822E] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">Class</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-[18px] py-6 px-5 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-[#E2E8F0] transition-all duration-[0.35s] relative overflow-hidden group hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)] shrink-0 w-[75%] snap-center md:w-auto">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0c709a] to-[#FF822E] scale-x-0 origin-left transition-transform duration-[0.35s] group-hover:scale-x-100"></div>
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white text-[1.3rem] mb-4" style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)"}}>
                <i className="fas fa-users"></i>
              </div>
              <h4 className="text-[0.97rem] font-bold mb-2">Student Led Clubs</h4>
              <p className="text-[0.83rem] text-[#5C6B82] leading-[1.6] mb-[14px]">Student-run innovation clubs that nurture leadership and collaborative skills.</p>
              <br />
              <span className="inline-block bg-[rgba(255,107,53,0.08)] text-[#FF822E] text-[0.72rem] font-bold py-[3px] px-[10px] rounded-full">Class</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
