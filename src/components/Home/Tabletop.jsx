export default function Tabletop() {
  return (
    <section className="py-[60px] bg-white" id="tabletop">
    <div className="max-w-[1200px] mx-auto px-5 text-left">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-[6px] bg-[rgba(9,25,69,0.07)] text-brand-blue text-[0.8rem] font-bold tracking-[0.08em] uppercase py-[6px] px-[14px] rounded-full mb-[14px]">🔬 Our Innovation</div>
        <h2 className="font-['Space_Grotesk',_sans-serif] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-[14px] text-brand-bg-dark">LABS....! Table-Top <span className="text-brand-orange">Solutions</span></h2>
      </div>
      <p className="text-[1.05rem] text-brand-text-light max-w-[600px] mx-auto mb-[30px] leading-[1.7] text-center">No complicated setup. No massive investment. Just pure learning — anywhere, anytime.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start mt-5">
        <div className="reveal-left">
          <h3 className="font-['Space_Grotesk',_sans-serif] text-[1.8rem] font-bold mb-[30px]">Why Schools <span className="text-brand-blue">Choose Us</span></h3>
          <ul className="flex flex-col gap-[22px]">
            <li className="flex items-start gap-4"><span className="w-8 h-8 rounded-full min-w-[32px] bg-gradient-to-br from-brand-blue to-brand-blue-light flex items-center justify-center text-white text-[0.75rem]"><i className="fas fa-check"></i></span>
              <div><strong className="block text-[0.97rem] font-bold mb-1">No separate lab setup required</strong>
                <p className="text-[0.87rem] text-brand-text-light leading-[1.6]">Our kits work inside existing classrooms without any infrastructure changes.</p>
              </div>
            </li>
            <li className="flex items-start gap-4"><span className="w-8 h-8 rounded-full min-w-[32px] bg-gradient-to-br from-brand-blue to-brand-blue-light flex items-center justify-center text-white text-[0.75rem]"><i className="fas fa-check"></i></span>
              <div><strong className="block text-[0.97rem] font-bold mb-1">No additional infrastructure cost</strong>
                <p className="text-[0.87rem] text-brand-text-light leading-[1.6]">Zero renovation, zero wiring, zero special equipment needed.</p>
              </div>
            </li>
            <li className="flex items-start gap-4"><span className="w-8 h-8 rounded-full min-w-[32px] bg-gradient-to-br from-brand-blue to-brand-blue-light flex items-center justify-center text-white text-[0.75rem]"><i className="fas fa-check"></i></span>
              <div><strong className="block text-[0.97rem] font-bold mb-1">Works inside regular classrooms</strong>
                <p className="text-[0.87rem] text-brand-text-light leading-[1.6]">Deploy on any standard desk or table in minutes.</p>
              </div>
            </li>
            <li className="flex items-start gap-4"><span className="w-8 h-8 rounded-full min-w-[32px] bg-gradient-to-br from-brand-blue to-brand-blue-light flex items-center justify-center text-white text-[0.75rem]"><i className="fas fa-check"></i></span>
              <div><strong className="block text-[0.97rem] font-bold mb-1">Easy to deploy &amp; teacher friendly</strong>
                <p className="text-[0.87rem] text-brand-text-light leading-[1.6]">Step-by-step guides make every teacher an STEM expert.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[18px] py-6 px-7 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-brand-border flex items-center gap-5 transition-all duration-[0.35s] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)]">
            <div className="w-[52px] h-[52px] rounded-[14px] min-w-[52px] flex items-center justify-center text-[1.3rem] text-white bg-gradient-to-br from-brand-orange to-brand-orange-light"><i className="fas fa-flask"></i></div>
            <div className="flex flex-col">
              <h4 className="text-[1rem] font-bold mb-1">Easy To<br /> Develop</h4>
              <p className="text-[0.87rem] text-brand-text-light">Through a DIY kits.</p>
            </div>
          </div>
          <div className="bg-white rounded-[18px] py-6 px-7 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-brand-border flex items-center gap-5 transition-all duration-[0.35s] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)]">
            <div className="w-[52px] h-[52px] rounded-[14px] min-w-[52px] flex items-center justify-center text-[1.3rem] text-white bg-gradient-to-br from-brand-blue to-brand-blue-light"><i className="fas "></i>₹</div>
            <div className="flex flex-col">
              <h4 className="text-[1rem] font-bold mb-1">No Extra Cost</h4>
              <p className="text-[0.87rem] text-brand-text-light">Affordable subscription model. No hidden infrastructure expenses.</p>
            </div>
          </div>
          <div className="bg-white rounded-[18px] py-6 px-7 shadow-[0_2px_20px_rgba(13,17,23,0.07),0_1px_4px_rgba(13,17,23,0.04)] border border-brand-border flex items-center gap-5 transition-all duration-[0.35s] ease-[cubic-bezier(.4,0,.2,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(13,17,23,0.14),0_4px_12px_rgba(255,130,46,0.12)]">
            <div className="w-[52px] h-[52px] rounded-[14px] min-w-[52px] flex items-center justify-center text-[1.3rem] text-white bg-gradient-to-br from-[#11998e] to-[#38ef7d]"><i className="fas fa-expand-arrows-alt"></i></div>
            <div className="flex flex-col">
              <h4 className="text-[1rem] font-bold mb-1">No Seprate Space Required</h4>
              <p className="text-[0.87rem] text-brand-text-light">Compact table-top kits that fit in any standard classroom space.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
