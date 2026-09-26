export default function FutureSkills() {
  return (
    <section className="py-[80px] bg-brand-orange px-4 md:px-10">
    <div className="text-center max-w-[800px] mx-auto mb-[50px] text-white">
      <h2 className="text-[2.2rem] md:text-[3rem] font-bold mb-4 leading-tight">
        A complete Eco-System For <span className="text-[#0D1044]">Future Ready Skills</span>
      </h2>
      <div className="w-[80px] h-1 bg-[#FFD814] mx-auto mb-6 rounded-full"></div>
      <p className="text-[1.1rem] leading-relaxed opacity-90">
        Brain Up Labs empowers students aged 7–18 through hands-on learning in AI, Robotics, Coding, IoT, Electronics,
        and STEM. Our experiential programs inspire creativity, critical thinking, and problem-solving, enabling
        learners to design, build, and innovate real-world solutions while developing the future-ready skills needed to
        succeed in a rapidly evolving world.
    </p>
</div>

    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

      
      <div className="relative bg-white rounded-[48px] overflow-hidden group shadow-lg h-[400px] lg:h-auto">

        <div className="w-full h-full overflow-hidden">
          <img src="/images/ecosystem/img1.png" alt="Educational Kits" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>

        <span className="absolute bottom-6 left-6 bg-[#49BDF4] text-white px-6 py-2 rounded-full font-bold shadow-md z-10">Educational Kits</span>
      </div>

      
      <div className="flex flex-col gap-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="relative bg-white rounded-[48px] overflow-hidden group shadow-lg h-[250px] md:h-[300px]">

            <div className="w-full h-full overflow-hidden">
              <img src="/images/ecosystem/img3.png" alt="PictoBlox" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <span className="absolute bottom-6 left-6 bg-[#49BDF4] text-white px-6 py-2 rounded-full font-bold shadow-md z-10">Personalized Learning Kits</span>
          </div>

          <div className="relative bg-white rounded-[48px] overflow-hidden group shadow-lg h-[250px] md:h-[300px]">

            <div className="w-full h-full overflow-hidden">
              <img src="/images/ecosystem/img2.jpeg" alt="Curriculum" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <span className="absolute bottom-6 left-6 bg-[#49BDF4] text-white px-6 py-2 rounded-full font-bold shadow-md z-10">AI & Robotics Lab Setup</span>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="relative bg-white rounded-[48px] overflow-hidden group shadow-lg h-[250px] md:h-[300px]">

            <div className="w-full h-full overflow-hidden">
              <img src="/images/ecosystem/img4.png" alt="Teacher Development Program" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <span className="absolute bottom-6 left-6 bg-[#49BDF4] text-white px-6 py-2 rounded-full font-bold shadow-md z-10">Drone Technology</span>
          </div>

          <div className="relative bg-white rounded-[48px] overflow-hidden group shadow-lg h-[250px] md:h-[300px]">

            <div className="w-full h-full overflow-hidden">
              <img src="/images/ecosystem/img5.png" alt="Codeavour" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <span className="absolute bottom-6 left-6 bg-[#49BDF4] text-white px-6 py-2 rounded-full font-bold shadow-md z-10">School Workshops</span>
          </div>

        </div>

      </div>

    </div>
  </section>
  );
}
