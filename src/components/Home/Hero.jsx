import { useState, useEffect } from 'react';

export default function Hero() {
  const words = [
    "Neuroscience",
    "Robotics",
    "IoT",
    "Neurotech",
    "Artificial Intelligence",
    "Aerospace"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] mt-30 relative overflow-hidden flex items-center bg-gradient-to-br from-[#fff8f0] via-[#fff] to-[#fff8f5] pt-[60px] pb-[40px] flex-col lg:flex-row lg:pt-[60px]" id="hero">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_70%_at_70%_50%,_rgba(30,79,216,0.07)_0%,_transparent_60%),radial-gradient(ellipse_50%_50%_at_20%_80%,_rgba(255,107,53,0.07)_0%,_transparent_60%)]"></div>
    <div className="absolute inset-0 pointer-events-none overflow-hidden" id="heroParticles"></div>
    <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center relative z-10">
      <div className="">
        <div className="inline-flex items-center gap-[6px] bg-gradient-to-br from-[rgba(30,79,216,0.1)] to-[rgba(74,127,255,0.1)] text-brand-blue border border-[rgba(30,79,216,0.2)] text-[0.8rem] font-bold py-[6px] px-[16px] rounded-full mb-5 animate-[fadeInDown_0.6s_ease_forwards]">🧠 Future-Ready Education Platform</div>
        <h1 className="font-['Space_Grotesk',_sans-serif] text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.1] text-brand-bg-dark mb-3 animate-[fadeInLeft_0.7s_0.1s_ease_both]">
          Unlock the <span className="text-brand-blue"><br/>Future of</span>
        </h1>
        <div className="min-h-[60px] overflow-hidden mb-5 animate-[fadeInLeft_0.7s_0.2s_ease_both]">
          <div className="relative">
            {words.map((word, index) => {
              const isActive = index === currentIndex;
              return (
                <span
                  key={word}
                  className={`block font-['Space_Grotesk',_sans-serif] text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-brand-orange absolute top-0 transition-all duration-500 ease-in-out leading-[1.2] ${
                    isActive
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 translate-y-[30px]"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        <p className="text-[1.05rem] text-brand-text-light leading-[1.8] max-w-[480px] mb-8 animate-[fadeInLeft_0.7s_0.3s_ease_both]">Empowering students with cutting-edge STEM skills through hands-on learning, real-world
          projects, and industry-aligned curriculum.</p>
        <div className="flex items-center gap-4 flex-wrap mb-10 animate-[fadeInLeft_0.7s_0.4s_ease_both]">
          <a href="#demo" className="group inline-flex items-center gap-2 bg-gradient-to-br from-brand-blue to-brand-blue-light text-white py-[14px] px-[28px] rounded-full text-[0.95rem] font-bold font-['Plus_Jakarta_Sans',_sans-serif] shadow-[0_6px_24px_rgba(30,79,216,0.35)] hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(30,79,216,0.45)] transition-all duration-[0.35s] ease-[cubic-bezier(.4,0,.2,1)]">Book Free Demo <i className="fas fa-arrow-right transition-transform duration-[0.35s] group-hover:translate-x-1"></i></a>
          <a href="#projects" className="inline-flex items-center gap-2 text-brand-blue border-2 border-[rgba(30,79,216,0.25)] py-[12px] px-[24px] rounded-full text-[0.95rem] font-bold bg-transparent hover:bg-[rgba(30,79,216,0.06)] hover:border-brand-blue hover:-translate-y-[2px] transition-all duration-[0.35s] ease-[cubic-bezier(.4,0,.2,1)]">Explore Projects <i className="fas fa-play-circle"></i></a>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center animate-[fadeInRight_0.8s_0.2s_ease_both]">
        <div className="relative w-[420px] h-[460px] shrink-0">
          <div className="absolute rounded-[22px] overflow-hidden border-[5px] border-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:block w-[240px] h-[290px] top-0 left-0 z-10 -rotate-4">
            <img src="/images/hero/img2.png" alt="Robotics" />
          </div>
          <div className="absolute rounded-[22px] overflow-hidden border-[5px] border-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:block w-[200px] h-[240px] top-[30px] right-0 z-20 rotate-3">
            <img src="/images/hero/img1.png" alt="AI" />
          </div>
          <div className="absolute rounded-[22px] overflow-hidden border-[5px] border-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:block w-[260px] h-[190px] bottom-0 left-1/2 -translate-x-1/2 rotate-1 z-30">
            <img src="/images/hero/img3.png" alt="Aerospace" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
