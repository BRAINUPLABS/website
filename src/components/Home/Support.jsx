import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Support() {
  return (
    <section className="support" id="support">
    
    <div className="section-container">
      <h2 className="section-title">Need <span className="text-orange">Instant Support</span>?</h2>
      <div className="support-grid">
        <div className="support-card whatsapp-card">
          <div className="support-icon whatsapp">
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="support-content">
            <h4>Chat on WhatsApp</h4>
            <p>Instant support — Connect with our team on WhatsApp for quick answers, demos, and guidance.</p>
            <a href="https://wa.me/917976769859" className="btn-whatsapp" target="_blank">
              <i className="fab fa-whatsapp"></i> Start WhatsApp Chat
            </a>
          </div>
        </div>
        <div className="support-card email-card">
          <div className="support-icon email">
            <i className="fas fa-envelope"></i>
          </div>

          <div className="support-content">
            <h4>Need Email Support?</h4>
            <p>Have questions or need assistance? Reach out to our support team via email, and we'll get back to you as
              soon as possible.</p>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=brainuplabs@gmail.com" target="_blank"
              rel="noopener noreferrer" className="btn-email">
              <i className="fas fa-envelope"></i> Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
