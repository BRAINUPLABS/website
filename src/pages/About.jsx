export default function About() {
  return (
    <div className="pt-[116px] min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About Brain Up Labs</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          We are on a mission to revolutionize STEM education and prepare students for the technologies of tomorrow.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg prose-blue mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Brain Up Labs was founded with a singular vision: to make advanced technologies like AI, Robotics, and Neurotech accessible to students everywhere. We believe that by providing hands-on, practical learning experiences, we can unlock the potential of the next generation of innovators and problem solvers.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Journey</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Since our inception, we have partnered with over 50 schools and trained more than 500 students. Our comprehensive curriculum and state-of-the-art educational kits have been recognized by leading industry bodies.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
            <img src="/images/journey/AICTE.png" alt="AICTE" className="w-full h-24 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
            <img src="/images/journey/istart.png" alt="iStart" className="w-full h-24 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
            <img src="/images/journey/MeityStartup.png" alt="Meity" className="w-full h-24 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
            <img src="/images/journey/summit.png" alt="AI Summit" className="w-full h-24 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
