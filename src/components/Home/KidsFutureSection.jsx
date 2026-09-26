export default function KidsFutureSection() {
  return (
    <section className="py-20 bg-[#FF822E]">
      <div className="text-center mb-12 flex flex-col items-center px-6 max-w-[1200px] mx-auto">
        <h2 className="text-white text-3xl md:text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold font-['Space_Grotesk'] mb-4 leading-tight">Empowering The Next Generation For <span className="text-[#0D1044]">Learning Program</span></h2>
        <div className="w-20 h-1 bg-[#FFD814] mb-6 rounded-full"></div>
        <p className="text-white/90 text-sm md:text-base max-w-[800px] leading-relaxed">
          Empowering young minds through AI, Robotics, IoT, Coding, Aerospace, Neuroscience, and industry-oriented
          learning programs, fostering creativity, critical thinking, innovation, and problem-solving to develop
          future-ready leaders equipped to create meaningful real-world impact.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto px-6">
        <div className="bg-white rounded-[16px] p-6 flex flex-col items-center justify-center gap-4 w-[140px] md:w-[200px] text-center shadow-md hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] hover:-translate-y-2 transition-all duration-300">
          <img src="/images/ecosystem/codi.png" alt="Coding - Graphical & Python" className="h-14 md:h-16 object-contain" />
          <p className="text-sm md:text-base font-bold text-[#1d2939]">Coding</p>
        </div>

        <div className="bg-white rounded-[16px] p-6 flex flex-col items-center justify-center gap-4 w-[140px] md:w-[200px] text-center shadow-md hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] hover:-translate-y-2 transition-all duration-300">
          <img src="/images/ecosystem/aihai.png" alt="Artificial Intelligence" className="h-14 md:h-16 object-contain" />
          <p className="text-sm md:text-base font-bold text-[#1d2939]">Artificial Intelligence</p>
        </div>

        <div className="bg-white rounded-[16px] p-6 flex flex-col items-center justify-center gap-4 w-[140px] md:w-[200px] text-center shadow-md hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] hover:-translate-y-2 transition-all duration-300">
          <img src="/images/ecosystem/dron.png" alt="Machine Learning" className="h-14 md:h-16 object-contain" />
          <p className="text-sm md:text-base font-bold text-[#1d2939]">Aerospace</p>
        </div>

        <div className="bg-white rounded-[16px] p-6 flex flex-col items-center justify-center gap-4 w-[140px] md:w-[200px] text-center shadow-md hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] hover:-translate-y-2 transition-all duration-300">
          <img src="/images/ecosystem/robo.png" alt="Robotics" className="h-14 md:h-16 object-contain" />
          <p className="text-sm md:text-base font-bold text-[#1d2939]">Robotics</p>
        </div>

        <div className="bg-white rounded-[16px] p-6 flex flex-col items-center justify-center gap-4 w-[140px] md:w-[200px] text-center shadow-md hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] hover:-translate-y-2 transition-all duration-300">
          <img src="/images/ecosystem/neur.png" alt="AR & VR Tech" className="h-14 md:h-16 object-contain" />
          <p className="text-sm md:text-base font-bold text-[#1d2939]">Neuroscience</p>
        </div>

        <div className="bg-white rounded-[16px] p-6 flex flex-col items-center justify-center gap-4 w-[140px] md:w-[200px] text-center shadow-md hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] hover:-translate-y-2 transition-all duration-300">
          <img src="/images/ecosystem/iot.png" alt="Internet of Things (IoT)" className="h-14 md:h-16 object-contain" />
          <p className="text-sm md:text-base font-bold text-[#1d2939]">Internet of Things (IoT)</p>
        </div>

        <div className="bg-white rounded-[16px] p-6 flex flex-col items-center justify-center gap-4 w-[140px] md:w-[200px] text-center shadow-md hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] hover:-translate-y-2 transition-all duration-300">
          <img src="/images/ecosystem/indus.png" alt="Biomimetic Robot" className="h-14 md:h-16 object-contain" />
          <p className="text-sm md:text-base font-bold text-[#1d2939]">Industry exposure</p>
        </div>

        <div className="bg-white rounded-[16px] p-6 flex flex-col items-center justify-center gap-4 w-[140px] md:w-[200px] text-center shadow-md hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] hover:-translate-y-2 transition-all duration-300">
          <img src="/images/ecosystem/ste.png" alt="Advanced Robotics" className="h-14 md:h-16 object-contain" />
          <p className="text-sm md:text-base font-bold text-[#1d2939]">STEM Education</p>
        </div>
      </div>
    </section>
  );
}
