export default function Backtotop() {
  return (
    <button className="fixed bottom-6 right-6 z-50 bg-[#0c709a] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-[0_4px_12px_rgba(12,112,154,0.3)] hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(12,112,154,0.5)] transition-all duration-300 opacity-0 pointer-events-none [&.show]:opacity-100 [&.show]:pointer-events-auto" id="backToTop" aria-label="Back to top">
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}
