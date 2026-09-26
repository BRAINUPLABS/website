import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Support() {
  return (
    <section className="py-20 bg-[#F8F9FA]" id="support">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-['Space_Grotesk'] text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-12 text-center text-[#0D1117]">Need <span className="text-[#FF822E]">Instant Support</span>?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_20px_rgba(13,17,23,0.07)] flex flex-col items-center text-center hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] transition-all duration-300">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 bg-[#25D366]/10 text-[#25D366]">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-[#0D1117]">Chat on WhatsApp</h4>
              <p className="text-[#5C6B82] mb-6 leading-relaxed">Instant support — Connect with our team on WhatsApp for quick answers, demos, and guidance.</p>
              <a href="https://wa.me/917976769859" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#128C7E] transition-colors" target="_blank">
                <i className="fab fa-whatsapp"></i> Start WhatsApp Chat
              </a>
            </div>
          </div>
          <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_20px_rgba(13,17,23,0.07)] flex flex-col items-center text-center hover:shadow-[0_16px_48px_rgba(13,17,23,0.14)] transition-all duration-300">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 bg-[#0c709a]/10 text-[#0c709a]">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-[#0D1117]">Need Email Support?</h4>
              <p className="text-[#5C6B82] mb-6 leading-relaxed">Have questions or need assistance? Reach out to our support team via email, and we'll get back to you as
                soon as possible.</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=brainuplabs@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0c709a] text-white px-6 py-3 rounded-full font-bold hover:bg-[#095779] transition-colors">
                <i className="fas fa-envelope"></i> Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
