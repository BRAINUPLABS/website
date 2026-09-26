export default function Authmodal() {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 invisible transition-all duration-300" id="authModal">
    <div className="relative w-[90%] max-w-md bg-white rounded-3xl p-8 shadow-2xl scale-95 transition-all duration-300">
      <button className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 text-xl transition-colors" id="authModalClose"><i className="fas fa-times"></i></button>

      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button className="pb-3 text-sm font-bold text-[#FF822E] border-b-2 border-[#FF822E]" data-auth="login">Login</button>
        <button className="pb-3 text-sm font-semibold text-gray-500 border-b-2 border-transparent hover:text-gray-800 transition-colors" data-auth="signup">Sign Up</button>
      </div>

      
      <div className="block opacity-100" id="auth-login">
        <h3 className="text-2xl font-bold mb-2">Welcome Back 👋</h3>
        <p className="text-gray-500 mb-6">Login to your BrainUp Labs account</p>
        <div className="mb-5 flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input className="w-full p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0c709a] focus:ring-4 focus:ring-[#0c709a]/10 transition-all outline-none" type="email" placeholder="you@example.com" />
        </div>
        <div className="mb-5 flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Password</label>
          <input className="w-full p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0c709a] focus:ring-4 focus:ring-[#0c709a]/10 transition-all outline-none" type="password" placeholder="Enter your password" />
        </div>
        <button className="w-full py-3.5 mt-2 bg-gradient-to-r from-[#FF822E] to-[#ffaa6b] text-white font-bold rounded-full shadow-lg shadow-[#FF822E]/30 hover:-translate-y-1 hover:shadow-[#FF822E]/40 transition-all flex items-center justify-center gap-2">Login <i className="fas fa-arrow-right"></i></button>
        <p className="text-center text-sm text-gray-500 mt-6">Don't have an account? <span className="text-[#0c709a] font-semibold cursor-pointer hover:underline" data-auth="signup">Sign Up</span></p>
      </div>

      
      <div className="hidden opacity-0 transition-opacity duration-300" id="auth-signup">
        <h3 className="text-2xl font-bold mb-2">Create Account 🚀</h3>
        <p className="text-gray-500 mb-6">Join BrainUp Labs today</p>
        <div className="mb-5 flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Full Name</label>
          <input className="w-full p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0c709a] focus:ring-4 focus:ring-[#0c709a]/10 transition-all outline-none" type="text" placeholder="Your full name" />
        </div>
        <div className="mb-5 flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input className="w-full p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0c709a] focus:ring-4 focus:ring-[#0c709a]/10 transition-all outline-none" type="email" placeholder="you@example.com" />
        </div>
        <div className="mb-5 flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Password</label>
          <input className="w-full p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0c709a] focus:ring-4 focus:ring-[#0c709a]/10 transition-all outline-none" type="password" placeholder="Create a password" />
        </div>
        <button className="w-full py-3.5 mt-2 bg-gradient-to-r from-[#FF822E] to-[#ffaa6b] text-white font-bold rounded-full shadow-lg shadow-[#FF822E]/30 hover:-translate-y-1 hover:shadow-[#FF822E]/40 transition-all flex items-center justify-center gap-2">Create Account <i className="fas fa-arrow-right"></i></button>
        <p className="text-center text-sm text-gray-500 mt-6">Already have an account? <span className="text-[#0c709a] font-semibold cursor-pointer hover:underline" data-auth="login">Login</span></p>
      </div>
    </div>
  </div>
  );
}
