export default function Partners() {
  return (
    <section className="py-20 bg-white" id="partners">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-[6px] bg-[#09194512] text-brand-blue text-[0.8rem] font-bold tracking-[0.08em] uppercase py-[6px] px-[14px] rounded-full mb-[14px]">🤝 Our Vision Partners</div>
        <h2 className="font-['Space_Grotesk'] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-[14px] text-brand-bg-dark">Partnering With <span className="text-brand-orange">Educators &amp; Institutions</span></h2>
        <p className="text-[1.05rem] text-brand-text-light max-w-[600px] mx-auto mb-[30px] leading-[1.7] text-center">Trusted by leading schools and educational institutions across India.</p>
        <div className="overflow-hidden w-full relative py-8 mt-4">
          <div className="flex gap-12 items-center w-max animate-[scroll_20s_linear_infinite]" id="partnersTrack">
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
            {[
              "/images/school/sch_01.jpeg",
              "/images/school/sch_002.jpg",
              "/images/school/sch_03.png",
              "/images/school/sch_04.jpg",
              "/images/school/sch_05.jpg",
              "/images/school/sch+06.png",
              "/images/school/sch_07.png",
              "/images/school/sch_08.png",
              "/images/school/sch_01.jpeg",
              "/images/school/sch_002.jpg",
              "/images/school/sch_03.png",
              "/images/school/sch_04.jpg",
              "/images/school/sch_05.jpg",
              "/images/school/sch+06.png",
              "/images/school/sch_07.png",
              "/images/school/sch_08.png"
            ].map((src, idx) => (
              <div key={idx} className="h-16 w-32 flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={src} alt="Partner" className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
