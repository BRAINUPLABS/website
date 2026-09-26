export default function FloatingStatsWrap() {
  return (
    <div className="w-full relative z-20 px-6 -mt-[40px] md:-mt-[50px]">
    <div className="max-w-[1000px] mx-auto bg-white rounded-[24px] shadow-[0_16px_48px_rgba(13,17,23,0.08)] p-6 md:p-8 flex flex-wrap md:flex-nowrap justify-between items-center gap-6 border border-brand-border">
      <div className="flex flex-col items-center gap-2 flex-1 min-w-[120px]">
        <div className="w-12 h-12 rounded-full bg-[rgba(12,112,154,0.08)] text-brand-blue flex items-center justify-center text-xl mb-1"><i className="fas fa-user-graduate"></i></div>
        <span className="font-['Space_Grotesk',_sans-serif] text-3xl font-extrabold text-brand-bg-dark leading-none">500+</span>
        <span className="text-[0.9rem] text-brand-text-light font-semibold text-center">Students Trained</span>
      </div>
      <div className="hidden md:block w-px h-16 bg-brand-border"></div>
      <div className="flex flex-col items-center gap-2 flex-1 min-w-[120px]">
        <div className="w-12 h-12 rounded-full bg-[rgba(12,112,154,0.08)] text-brand-blue flex items-center justify-center text-xl mb-1"><i className="fas fa-school"></i></div>
        <span className="font-['Space_Grotesk',_sans-serif] text-3xl font-extrabold text-brand-bg-dark leading-none">50+</span>
        <span className="text-[0.9rem] text-brand-text-light font-semibold text-center">Partner Schools</span>
      </div>
      <div className="hidden md:block w-px h-16 bg-brand-border"></div>
      <div className="flex flex-col items-center gap-2 flex-1 min-w-[120px]">
        <div className="w-12 h-12 rounded-full bg-[rgba(12,112,154,0.08)] text-brand-blue flex items-center justify-center text-xl mb-1"><i className="fas fa-layer-group"></i></div>
        <span className="font-['Space_Grotesk',_sans-serif] text-3xl font-extrabold text-brand-bg-dark leading-none">6+</span>
        <span className="text-[0.9rem] text-brand-text-light font-semibold text-center">STEM Domains</span>
      </div>
      <div className="hidden md:block w-px h-16 bg-brand-border"></div>
      <div className="flex flex-col items-center gap-2 flex-1 min-w-[120px]">
        <div className="w-12 h-12 rounded-full bg-[rgba(12,112,154,0.08)] text-brand-blue flex items-center justify-center text-xl mb-1"><i className="fas fa-trophy"></i></div>
        <span className="font-['Space_Grotesk',_sans-serif] text-3xl font-extrabold text-brand-bg-dark leading-none">10+</span>
        <span className="text-[0.9rem] text-brand-text-light font-semibold text-center">Recognitions</span>
      </div>
    </div>
  </div>
  );
}
